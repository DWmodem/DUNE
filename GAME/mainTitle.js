var mainTitle = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function mainTitle ()
    {
        Phaser.Scene.call(this, { key: 'Main Title' });
    },

    preload: function ()
    {
        this.load.image('backMain', 'ART/images/main.jpg');
    },

    create: function ()
    {
       var mainBackground =  this.add.sprite(0, 0, 'backMain');
	mainBackground.setOrigin(0, 0);
	var cTC = this.add.text(config.width/2, config.height/2, "Press to continue", { fontSize: "40px", fill: "#fff"}).setInteractive();
	cTC.on('pointerdown', function () {

            console.log('Main title to main menu');

            this.scene.start('Main Menu');
        }, this);
    }

});

var mainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function mainMenu ()
    {
        Phaser.Scene.call(this, { key: 'Main Menu' });
    },

    preload: function ()
    {
        
    },

    create: function ()
    {
	var newGame = this.add.text(config.width/2, 100, "New Game", { fontSize: "40px", fill: "#fff"}).setInteractive();
	newGame.setOrigin(0.5, 0.5);
	newGame.on('pointerdown', function () {

            console.log('Main menu to new game');

            this.scene.start('newGame');
        }, this);
	
	var contGame = this.add.text(config.width/2, 200, "Continue", { fontSize: "40px", fill: "#fff"}).setInteractive();
	contGame.setOrigin(0.5, 0.5);
	contGame.on('pointerdown', function () {
	    
            console.log('Main menu to continue Game');
	    
            this.scene.start('continueGame');
        }, this);

	var options = this.add.text(config.width/2, 300, "Options", { fontSize: "40px", fill: "#fff"}).setInteractive();
	options.setOrigin(0.5, 0.5);
	options.on('pointerdown', function () {
	    
            console.log('Main menu to options');
	    
            this.scene.start('options');
        }, this);
    },

    update: function ()
    {
  
    }

});

var template = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneC ()
    {
        Phaser.Scene.call(this, { key: 'template' });
    },

    preload: function ()
    {

    },

    create: function ()
    {

    },

    update: function ()
    {
	
    },

});

let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
    backgroundColor: '#000000',
    scene: [ mainTitle, mainMenu]
};

let game = new Phaser.Game(config);

