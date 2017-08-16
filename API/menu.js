//Menu
(function () {
  
    var w = 1280, h = 720;
     
var Menu = function (game) {}


Menu.prototype.preload = function () {
    game.load.image('Menu', 'art/subMenu.png', 426, 240);
}

Menu.prototype.create = function () {
 

 // Create a label to use as a button
    pause_label = game.add.text(w - 100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the pause button is pressed, we pause the game
        game.paused = true;

        // Then add the menu
        menu = game.add.sprite(w/2, h/2, 'Menu');
        menu.anchor.setTo(0.5, 0.5);

        // And a label to illustrate which menu item was chosen. (This is not necessary)
        choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
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
                // The choicemap is an array that will help us see which item was clicked
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice 
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);

                // Display the choice
                choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
            }
            else{
                // Remove the menu and the label
                menu.destroy();
                choiseLabel.destroy();

                // Unpause the game
                game.paused = false;
            }
        }
    };
}



Menu.prototype.render = function () {
 
}

Menu.prototype.update = function () {
    
}
 
 window.Menu = Menu;

})()
