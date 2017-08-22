//Menu


(function () {
  
    var w = 1280, h = 720;
     
var Menu = function (game) {}


Menu.prototype.preload = function () {
    game.load.image('Menu', 'art/subMenu.png', 426, 240);
    game.load.image('freemen', 'art/freemen.png');
    game.load.image('atreides', 'art/Atreides.png');
    game.load.image('badgeF', 'art/freemen_badge.png');
    game.load.image('badgeA', 'art/atreides_badge.png');
}

Menu.prototype.create = function () {
 

 // Create a label to use as a button
   
    pause_label = game.add.text(w - 100, h - 30, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the pause button is pressed, we pause the game
        game.paused = true;

        // Then add the menu
        menu = game.add.sprite(w/2, h/2, 'Menu');
        menu.anchor.setTo(0.5, 0.5);
        
      //-------------------------------------------------------//  
        //trying to put this in the menu
    //----------------------------------------------------------// 
        /* player_1 = game.add.text(w/2, h/2, 'Choose your House',{font: '24px Arial', fill: '#fff'});
        player_1.anchor.setTo(0.5, 0.5);
        player_1.inputEnabled = true;
         player_1.events.onInputOver.add(function () {
                show(100, 100, 'badgeF');
                badgeF = game.add.sprite(w/2, h/2, 'badgeF');
                badgeF.anchor.setTo(0.5, 0.5);
                  });
        */

       /* function createButton(game, string, x, y, w, h, callback){
        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

         button1.anchor.setTo(0.5, 0.5);
         button1.width = w;
         btton1.height = h;

         var txt = game.add.text(button1.x, button1.y, string, {
        font : "14px Arial",
        fill : "#fff",
         align: "center"
   });



txt.anchor.setTo(0.5, 0.5);

    }
 

 createButton(game, "Play" w/2, h/2, 300, 100, 
    function(){
               game.add.sprite(100,100, 'Menu');
 });
*/
//---------------------------------------------------------------**

        //add hint how to continue
       
        choiseLabel = game.add.text(w/2, h-100, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
      
    
    });
   
      var bx1 =  57 ,
          by =  59 ,
          bx2 =  w-57 ;
      var sx1 = (w/3)/2  ,
          sx2 = w-(w/6)  ,
          sy =  h/12 ,
          
        

     //Choose your house (programming the hard and long way)
        
       /* freemen = game.add.sprite((w/3)/2, h/12, 'freemen');
        freemen.anchor.setTo(0.5, 0.0);

        atreides = game.add.sprite((w-(w/6)), h/12, 'atreides');
        atreides.anchor.setTo(0.5, 0.0);*/


         player_1 = game.add.text(w/2, h -150, 'Choose your House',{font: '24px Arial', fill: '#fff'});
        player_1.anchor.setTo(0.5, 0.5);
        player_1.inputEnabled = true;
         player_1.events.onInputDown.add(function () {
               

                freemenChoice = game.add.text(w/2, h -125, 'Freemen',{ font: '30px Arial', fill: '#fff' });
               freemenChoice.anchor.setTo(0.5, 0.5);
               freemenChoice.inputEnabled = true;
               freemenChoice.events.onInputDown.add(function(){
                
                 badgeF = game.add.sprite(bx1, by, 'badgeF');
                badgeF.anchor.setTo(0.5, 0.5);
                
                 badgeA = game.add.sprite(bx2, by , 'badgeA');
                 badgeA.anchor.setTo(0.5, 0.5);

                freemen = game.add.sprite(sx1, sy, 'freemen');
                freemen.anchor.setTo(0.5, 0.0);

                atreides = game.add.sprite(sx2, sy, 'atreides');
                atreides.anchor.setTo(0.5, 0.0);
                
                frameG = game.add.sprite(0, 0, 'frameG');
                frameG.anchor.setTo(0.0, 0.0);

                frameD = game.add.sprite(w - w/3, 0, 'frameD');
                frameD.anchor.setTo(0.0, 0.0);
                
                game.add.text(110, 4, 'Player 1',{font: '24px Arial', fill: '#fff'});
                game.add.text(w-200, 4, 'Player 2',{font: '24px Arial', fill: '#fff'});
                
                player_1.destroy();
                freemenChoice.destroy();
                AtreidesChoice.destroy();

                });
              
               AtreidesChoice = game.add.text(w/2, h -100, 'Atreides',{ font: '30px Arial', fill: '#fff' });
               AtreidesChoice.anchor.setTo(0.5, 0.5);
               AtreidesChoice.inputEnabled = true;
               AtreidesChoice.events.onInputDown.add(function(){
                 
                badgeA = game.add.sprite(bx1, by, 'badgeA');
                 badgeA.anchor.setTo(0.5, 0.5);

                 badgeF = game.add.sprite(bx2, by, 'badgeF');
                badgeF.anchor.setTo(0.5, 0.5);

                 freemen = game.add.sprite(sx2, sy, 'freemen');
                freemen.anchor.setTo(0.5, 0.0);

                atreides = game.add.sprite(sx1, sy, 'atreides');
                atreides.anchor.setTo(0.5, 0.0);

                frameD = game.add.sprite(w - w/3, 0, 'frameD');
                frameD.anchor.setTo(0.0, 0.0);
                
                frameG = game.add.sprite(0, 0, 'frameG');
                 frameG.anchor.setTo(0.0, 0.0);
                
                player_1.destroy();
                freemenChoice.destroy();
                AtreidesChoice.destroy();
               
               game.add.text(110, 4, 'Player 1',{font: '24px Arial', fill: '#fff'});
                game.add.text(w-200, 4, 'Player 2',{font: '24px Arial', fill: '#fff'});
              
                });
                
                });   


 // Add a input listener that can help us return from being paused
    game.input.onDown.add(unpause, self);

    // And finally the method that handels the pause menu
    function unpause(event){
        // Only act if paused
         
            if(game.paused){
           
              // Calculate the corners of the menu
            var x1 = w/3 , x2 = w - w/3,
                y1 = h/3 , y2 = h - h/3;
            

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
            

            }
            else{
                // Remove the menu and the label
                menu.destroy();
                choiseLabel.destroy();
                //player_1.destroy();
                
                // Unpause the game
                game.paused = false;
            }
        
    
    };


};

}

Menu.prototype.render = function () {
 
}

Menu.prototype.update = function () {
    
}
 
 window.Menu = Menu;

})()
