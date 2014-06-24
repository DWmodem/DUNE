$(document).ready(function(){

	var stage;
	
	function letsDoThis(){
		
		stage = new createjs.Stage("board");
		

		var ball = new createjs.Shape();
		ball.graphics.beginFill("#000000").drawCircle(0, 0, 50);
		ball.x = 50;
		ball.y = 200;
		ball.addEventListener("click", handleClick);
		//Pass a config object
		createjs.Tween.get(ball, {loop:true}).to({x:450}, 3000).to({x:0}, 3000);

		//The ticker sends a tick
		createjs.Ticker.addEventListener("tick", onTick);


		stage.addChild(ball);
		
	}

	function onTick(event){
		stage.update();
	}

	function handleClick(){
		console.log("Clicked the ball");
	}
	letsDoThis();
	

	
});