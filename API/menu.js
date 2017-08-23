//Menu


(function () {
  
var game_elements = {};

    var w = 1280, h = 720;
     
var Menu = function (game) {}


Menu.prototype.preload = function () {
    game.load.image('Menu', 'art/subMenu.png', 426, 240);
    game.load.image('Freemen', 'art/freemen.png');
    game.load.image('Atreides', 'art/Atreides.png');
    game.load.image('badgeFreemen', 'art/freemen_badge.png');
    game.load.image('badgeAtreides', 'art/atreides_badge.png');
}

Menu.prototype.create = function () {
 

// This function calls a clickable option in the menu, and decide wich sprites to put depending on the player and the house 
 
     function choice(var1, x, y, playerNumb, house){

        game_elements[house]  = game.add.text(x, y, house,{ font: '30px Arial', fill: '#fff' });

                  
        if (playerNumb =1){
        
            bx = 57; by = 59; sx = (w/3)/2;sy =  h/2 + 50;
        } else {

            bx = w-57; by = 59; sx = w-(w/6); sy = h/2 +50;

        }
                   
        game_elements[house].anchor.setTo(0.5, 0.5);
        game_elements[house].inputEnabled = true;
        game_elements[house].events.onInputDown.add(function(){
            
            badge = game.add.sprite(bx, by, 'badge' + house);
            badge.anchor.setTo(0.5, 0.5);
            houseSprite = game.add.sprite(sx, sy, house);
            houseSprite.anchor.setTo(0.5, 0.5);
            frameG = game.add.sprite(0, 0, 'frameG');
            frameG.anchor.setTo(0.0, 0.0);
            game.add.text(130, 5, house);
            frameD = game.add.sprite(w - w/3, 0, 'frameD');
            frameD.anchor.setTo(0.0, 0.0);

            for (var key in game_elements) {
                console.log(key)
                game_elements[key].destroy();
            };



        });

    }

// Set the game


    choice("atreidesChoice", w/2, h/2, 1, "Atreides");
    choice('freemenChoice', w/2, h/2 + 100, 1, 'Freemen');
    }

Menu.prototype.render = function () {
 
}

Menu.prototype.update = function () {
    
}
 
 window.Menu = Menu;

})()
