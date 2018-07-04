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
	this.load.audio("Main Title", [
	    "SOUND/musics/DuneMainTheme.mp3",
	    "SOUND/musics/DuneMainTheme.ogg",
	]);
    },

    create: function ()
    {
	var mainTheme = this.sound.add("Main Title");

	mainTheme.play({
	    loop: true
	});


	var mainBackground =  this.add.sprite(0, 0, 'backMain');
	mainBackground.setOrigin(0, 0);
	mainBackground.displayWidth = (window.innerWidth * window.devicePixelRatio);
	mainBackground.displayHeight = (window.innerHeight * window.devicePixelRatio);
	var cTC = this.add.text(config.width/2, config.height/2, "Press to continue", { fontSize: "40px", fill: "#fff"}).setInteractive();
	cTC.on('pointerdown', function () {

            console.log('Main title to main menu');
	    mainTheme.stop();
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
	var newG = this.add.text(config.width/2, 100, "New Game", { fontSize: "40px", fill: "#fff"}).setInteractive();
	newG.setOrigin(0.5, 0.5);
	newG.on('pointerdown', function () {

            console.log('Main menu to new game');

            this.scene.start('New Game');
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

var newGame = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function newGame ()
    {
        Phaser.Scene.call(this, { key: 'New Game' });
    },

    preload: function ()
    {
	
    },

    create: function ()
    {
	console.log("newGame");
	var chooseP = this.add.text(500, 500, "Choose Player", { fontSize: "40px", fill: "#fff"}).setInteractive();
	chooseP.setOrigin(0.5, 0.5);
	chooseP.on('pointerdown', function () {

	    console.log('New game to Choose Player');

	    this.scene.start('Choose player');
        }, this);
    },

    update: function ()
    {
	
    },

});

var choosePlayer = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function choosePlayer ()
    {
        Phaser.Scene.call(this, { key: 'Choose player' });
    },

    preload: function ()
    {
	this.load.image('Atreides', 'ART/images/houses/Atreides.png');
	this.load.image('Bene Guesserit', 'ART/images/houses/BeneGuesserit.png');
	this.load.image('Emperor', 'ART/images/houses/Emperor.png');
	this.load.image('Fremen', 'ART/images/houses/fremen.png');
	this.load.image('Guild', 'ART/images/houses/Guild.png');
	this.load.image('Harkonnen', 'ART/images/houses/Harkonnen.png');

	this.load.image('badge Atreides', 'ART/images/houses/atreides_badge.png');
	this.load.image('badge Bene Guesserit', 'ART/images/houses/beneguesserit_badge.png');
	this.load.image('badge Emperor', 'ART/images/houses/emperor_badge.png');
	this.load.image('badge Fremen', 'ART/images/houses/fremen_badge.png');
	this.load.image('badge Guild', 'ART/images/houses/guild_badge.png');
	this.load.image('badge Harkonnen', 'ART/images/houses/harkonnen_badge.png');
	
	this.load.image('cadre', 'ART/images/houses/cadre.png');
	this.load.image('description', 'ART/images/houses/description.png');
    },

    create: function ()
    {
	
	var houses = ["Atreides","Bene Guesserit", "Emperor", "Fremen", "Guild", "Harkonnen"];
	var housesImg =  ["Atreides","Bene Guesserit", "Emperor", "Fremen", "Guild", "Harkonnen"];
	var houseBadge = ["Atreides","Bene Guesserit", "Emperor", "Fremen", "Guild", "Harkonnen"];
	var houseid = 0;
	var positionX = 0;
	var positionY = 0;
	var choixHouse = "vide";
	
	houseBadge[0].description = "Description";
	houseBadge[1].description = "Description";
	houseBadge[2].description = "Description";
	houseBadge[3].description = "Description";
	houseBadge[4].description = "Description";
	houseBadge[5].description = "Description";
	

	for(var i=0;i<2;i++){
	    for(var j=0;j<3; j++){
		housesImg[houseid] = this.add.sprite(positionX, positionY, houses[houseid]).setInteractive();
		housesImg[houseid].setOrigin(0, 0);
		housesImg[houseid].displayWidth = ((window.innerWidth * window.devicePixelRatio)/3);
		housesImg[houseid].displayHeight = ((window.innerHeight * window.devicePixelRatio)/2);
		housesImg[houseid].house = houses[houseid];
		
		housesImg[houseid].on('pointerdown', function () {
		    
		    for(var k=0;k<6;k++){
			housesImg[k].setTint(0xFFFFFF);
		    };
		    this.setTint(0xff0000);
		    choixHouse = this.house;
		    console.log(choixHouse);
		});
		
		houseBadge[houseid] = this.add.sprite(positionX, positionY, "badge " + houses[houseid]).setInteractive();
		houseBadge[houseid].setOrigin(0, 0);
		houseBadge[houseid].displayWidth = 135;
		houseBadge[houseid].displayHeight = 80;

		houseBadge[houseid].on('pointerdown', function () {

		    var descriptionBack = this.add.sprite( 0, 0, 'description');//Arrive pas faire apparaitre un sprite comme actions.
		    descriptionBack.setOrigin(0, 0);

		});

		var cadre = this.add.sprite(positionX, positionY, "cadre");
		cadre.setOrigin(0, 0);
		cadre.displayWidth = ((window.innerWidth * window.devicePixelRatio)/3);
		cadre.displayHeight = ((window.innerHeight * window.devicePixelRatio)/2);
	
		positionX += (window.innerWidth * window.devicePixelRatio)/3;
		houseid++;
	    }
	    positionY += (window.innerHeight * window.devicePixelRatio)/2;
	    positionX = 0;
	};
	var continu = this.add.text(window.innerWidth * window.devicePixelRatio - 200, window.innerHeight * window.devicePixelRatio /2, "Continue", { fontSize: "40px", fill: "#fff"}).setInteractive();
	continu.setOrigin(0.5, 0.5);
	continu.on("pointerdown", function () {
	    this.scene.start('Generate Map');
	},this);
    },

    update: function ()
    {
	
    },

});

/*
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
*/

