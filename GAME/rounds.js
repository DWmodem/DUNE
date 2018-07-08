console.log("rounds ok");

var storm = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function storm ()
    {
        Phaser.Scene.call(this, { key: 'Storm' });
    },

    preload: function ()
    {
	this.load.image("Storm", "ART/images/storm.png");
	this.load.image("Troop Tokens", "ART/map/troopTokens.png");
    },

    create: function ()
    {
	//1:Reveal storm marker
	//2:Play weather control? * player Not first turn 
	//3:Play family atomic? * player Not first turn
	//4:Move storm
	var stormSprite = this.add.sprite(250,950, "Storm");

	test.visible = true;
	console.log(test);
    },

    update: function ()
    {
	
    },

});

var spiceBlow = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function spiceBlow ()
    {
        Phaser.Scene.call(this, { key: 'Spice Blow' });
    },

    preload: function ()
    {
	//1:Draw first card
	//2:resolve first card
	//3:2nd card
	//4: resolve 2nd card
    },

    create: function ()
    {

    },

    update: function ()
    {
	
    },

});

var bidding = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function bidding ()
    {
        Phaser.Scene.call(this, { key: 'Bidding Round' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
	//1:Place Cards
	//Next: * number cards
	//2:Bidding * player 
	//3:recieve card//if harkonnen + cards
	//4:atreides notes cards
    },

    update: function ()
    {
	
    },

});

var movement = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function movement ()
    {
        Phaser.Scene.call(this, { key: 'Movement' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
	//1:Revival * player
	//2:Bene Gesseri declares coexistence * number places
	//3:Player movement * player
	
    },

    update: function ()
    {
	
    },

});

var battles = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function battles ()
    {
        Phaser.Scene.call(this, { key: 'Battles' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
	//1:check for battles
	//if yes
	//2: issue voice command?
	//3: play karama to cancel the voice?
	//5: issue prescience question?
	//6: play karama to cancel prescience??
	//6: set game to be able to answer question
	//7: play karame to see entire game?
	//or to cancel Kwisaz Haderach
	//or cancel Sardaukar or Fedaykin bonus
	//commit battle Plan
	//Reveal battle plans
	//resolve the battle
    },

    update: function ()
    {
	
    },

});

var spiceCollection = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function spiceCollection ()
    {
        Phaser.Scene.call(this, { key: 'Spice Collection' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
	//1:collect spice * player
    },

    update: function ()
    {
	
    },

});

var bribery = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function bribery ()
    {
        Phaser.Scene.call(this, { key: 'Bribery' });
    },

    preload: function ()
    {

    },

    create: function ()
    {
	//1: collect spice * player
    },

    update: function ()
    {
	
    },

});

var misc = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function misc ()
    {
        Phaser.Scene.call(this, { key: 'Misc' });
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

