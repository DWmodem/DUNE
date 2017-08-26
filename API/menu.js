//Menu
(function () {
  
    var game_elements = {};
    var w = 1280, h = 720;

    var Menu = function (game, dames) {
        this.dames = dames;
    }

    Menu.prototype.preload = function () {
        game.load.image('Menu', 'art/subMenu.png', 426, 240);
        game.load.image('Freemen', 'art/freemen.png');
        game.load.image('Atreides', 'art/Atreides.png');
        game.load.image('Emperor', 'art/Emperor.png');
        game.load.image('Guild', 'art/Guild.png');
        game.load.image('Harkonnen', 'art/Harkonnen.png');
        game.load.image('Bene_Guesserit', 'art/beneguesserit.png');
        game.load.image('badgeFreemen', 'art/freemen_badge.png');
        game.load.image('badgeAtreides', 'art/atreides_badge.png');
        game.load.image('badgeHarkonnen', 'art/harkonnen_badge.png');
        game.load.image('badgeGuild', 'art/guild_badge.png');
        game.load.image('badgeEmperor', 'art/emperor_badge.png');
        game.load.image('badgeBene_Guesserit', 'art/beneguesserit_badge.png');
    }

    Menu.prototype.create = function () {

        createHeader(1);
        createHeader(2);    
        // This functi on calls a clickable option in the menu, and decide wich sprites to put depending on the player and the house 
        // Set the choices

        // For player 1
        choice(w/6, h/2, 1, "Atreides");
        choice(w/6, h/2 + 50, 1, 'Freemen');
        choice(w/6, h/2 + 100, 1, 'Guild');
        choice(w/6, h/2 + 150, 1, 'Bene_Guesserit');
        choice(w/6, h/2 + 200, 1, 'Emperor');
        choice(w/6, h/2 + 250, 1, 'Harkonnen');

        //For player 2
        choice(w-w/6, h/2, 2, "Atreides");
        choice(w-w/6, h/2+ 50, 2, 'Freemen');
        choice(w-w/6, h/2 + 100, 2, 'Guild');
        choice(w-w/6, h/2 + 150, 2, 'Bene_Guesserit');
        choice(w-w/6, h/2 + 200, 2, 'Emperor');
        choice(w-w/6, h/2 + 250, 2, 'Harkonnen');    
    }



    Menu.prototype.render = function () {
     
    }

    Menu.prototype.update = function () {
        
    }
 
    window.Menu = Menu;
 
    function createHeader(playerNumb){

        if (!game_elements['game_elements' + playerNumb]){
           game_elements['game_elements' + playerNumb] = {};    
        }
        
        if (playerNumb === 1){
           x= w/6; y = h/2 -50;
         } else {
           x =w-w/6; y = h/2 -50; 
         }
        game_elements['game_elements' + playerNumb]['header' + playerNumb] = game.add.text(x, y, 'Player' + playerNumb + ', choose your House!');
        game_elements['game_elements' + playerNumb]['header' + playerNumb].anchor.setTo(0.5, 0.5);
    }

    function choice(x, y, playerNumb, house) {

        if (!game_elements['game_elements' + playerNumb]) {
           game_elements['game_elements' + playerNumb] = {};
        }

        //var playersElements = game_elements['game_elements' + playerNumb];
        game_elements['game_elements' + playerNumb][house]  = game.add.text(x, y, house,{ font: '30px Arial', fill: '#fff' });
        game_elements['game_elements' + playerNumb][house].anchor.setTo(0.5, 0.5);
        game_elements['game_elements' + playerNumb][house].inputEnabled = true;
        game_elements['game_elements' + playerNumb][house].events.onInputDown.add(function() {        
            if (playerNumb === 1){
                console.log('player 1 ok');
                bx = 57; by = 59; sx = (w/3)/2;sy =  h/2 + 50; tx = 250; ty = 15; fx = 0; fy = 0;
            }

            if (playerNumb === 2) {
                console.log("player 2 ok");
                bx = w-57; by = 59; sx = w-(w/6); sy = h/2 +50; tx = w - 250; ty = 15; fx = w -w/3; fy = 0;
             } 
            
            var badge = game.add.sprite(bx, by, 'badge' + house);
            badge.anchor.setTo(0.5, 0.5);
            
            var houseSprite = game.add.sprite(sx, sy, house);
            houseSprite.anchor.setTo(0.5, 0.5);
            
            var frame = game.add.sprite(fx, fy, 'frame' + playerNumb);
            frame.anchor.setTo(0.0, 0.0);

            nameHouse = game.add.text(tx, ty, house);
            console.log(playerNumb + 'ok');
            nameHouse.anchor.setTo(0.5, 0.5);

            console.log(game_elements['game_elements' + playerNumb]);
            for (var key in game_elements['game_elements' + playerNumb]) {
                game_elements['game_elements' + playerNumb][key].destroy();    
            }

            console.log(this.dames);
            this.dames.displayPlayer(playerNumb);
        }) 
    };

})()
