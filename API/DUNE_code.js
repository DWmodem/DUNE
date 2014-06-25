$(document).ready(function(){

	var stage;
	
	letsDoThis(stage);
	

	
});

function letsDoThis(){
		
		stage = new createjs.Stage("board");

		/*DEFINING THE BALL*/
		var ball = new createjs.Shape();
		ball.graphics.beginFill("#000000").drawCircle(0, 0, 50);
		ball.x = 50;
		ball.y = 200;
		ball.addEventListener("click", animateBall);
		/*DEFINING THE BALL*/


		/*DEFINING THE TICKER*/
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", updateStage);
		console.log("FPS: "+createjs.Ticker.getFPS());

		stage.addChild(ball);
		
		function animateBall(event){
		console.log("Clicked the ball");
		createjs.Tween.get(ball, {loop:false}).to({x:450}, 3000).to({x:50}, 3000);
	}

	}

	function updateStage(event){
		stage.update();	
	}

	