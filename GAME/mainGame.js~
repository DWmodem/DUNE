console.log("map gen ok")

var map={


};

var test;

var mapGen = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function mapGen ()
    {
        Phaser.Scene.call(this, { key: 'Generate Map' });
    },

    preload: function ()
    {
	this.load.image("Map", "ART/map/duneMapStretch.png");
	this.load.image("Troop Tokens", "ART/map/troopTokens.png");

    },
    
    create: function ()
    {

	config.width = 1000;
	config.height = 1000;

	//variables

	var sizeTokensTroops = 30;

	//Place background map
	var milieuX = 1000 / 2;
	var milieuY = 1000 / 2;

	map.background = this.add.sprite(milieuX, milieuY, "Map");
	map.background.displayWidth = 1000;
	map.background.displayHeight = 1000;
	map.background.setTint(0xffffe6);

	//Tokens regions

	//X/Y positions tokens

	regionsMap["polarSink"].getZone(0).setXYtroopTokens(500, 500);

	regionsMap["brokenLand"].getZone(1).setXYtroopTokens(495, 97);
	regionsMap["ohGap"].getZone(1).setXYtroopTokens(559, 99);
	regionsMap["tsimpo"].getZone(1).setXYtroopTokens(502, 156);
	regionsMap["carthag"].getZone(1).setXYtroopTokens(492, 236);
	regionsMap["arsunt"].getZone(1).setXYtroopTokens(485, 310);
	regionsMap["imperialBasin"].getZone(1).setXYtroopTokens(527, 296);

	regionsMap["ohGap"].getZone(2).setXYtroopTokens(643, 125);
	regionsMap["arrakeen"].getZone(2).setXYtroopTokens(647, 207);
	regionsMap["imperialBasin"].getZone(2).setXYtroopTokens(575, 259);

	regionsMap["ohGap"].getZone(3).setXYtroopTokens(728, 162);
	regionsMap["basin"].getZone(3).setXYtroopTokens(759, 195);
	regionsMap["sihayaRidge"].getZone(3).setXYtroopTokens(792, 229);
	regionsMap["holeInTheRock"].getZone(3).setXYtroopTokens(708, 270);
	regionsMap["shieldWall"].getZone(3).setXYtroopTokens(634, 370);
	regionsMap["imperialBasin"].getZone(3).setXYtroopTokens(585, 382);
	regionsMap["rimWallWest"].getZone(3).setXYtroopTokens(678, 241);
	regionsMap["falseWallEast"].getZone(3).setXYtroopTokens(568, 440);
	
	regionsMap["garaKulon"].getZone(4).setXYtroopTokens(855, 270);
	regionsMap["pastyMesa"].getZone(4).setXYtroopTokens(787, 380);
	regionsMap["shieldWall"].getZone(4).setXYtroopTokens(689, 375);
	regionsMap["theMinorErg"].getZone(4).setXYtroopTokens(648, 427);
	regionsMap["falseWallEast"].getZone(4).setXYtroopTokens(589, 461);

	regionsMap["redChasm"].getZone(5).setXYtroopTokens(910, 441);
	regionsMap["pastyMesa"].getZone(5).setXYtroopTokens(827, 430);
	regionsMap["theMinorErg"].getZone(5).setXYtroopTokens(668, 474);
	regionsMap["falseWallEast"].getZone(5).setXYtroopTokens(592, 490);

	regionsMap["southMesa"].getZone(6).setXYtroopTokens(934, 539);
	regionsMap["pastyMesa"].getZone(6).setXYtroopTokens(832, 549);
	regionsMap["theMinorErg"].getZone(6).setXYtroopTokens(667, 529);
	regionsMap["falseWallEast"].getZone(6).setXYtroopTokens(588, 514);

	regionsMap["southMesa"].getZone(7).setXYtroopTokens(848, 736);
	regionsMap["pastyMesa"].getZone(7).setXYtroopTokens(745, 600);
	regionsMap["theMinorErg"].getZone(7).setXYtroopTokens(665, 581);
	regionsMap["falseWallSouth"].getZone(7).setXYtroopTokens(722, 637);
	regionsMap["falseWallEast"].getZone(7).setXYtroopTokens(573, 537);
	regionsMap["tueksSietch"].getZone(7).setXYtroopTokens(830, 682);
	regionsMap["hargPass"].getZone(7).setXYtroopTokens(600, 561);

	regionsMap["southMesa"].getZone(8).setXYtroopTokens(803, 787);
	regionsMap["falseWallSouth"].getZone(8).setXYtroopTokens(722, 717);
	regionsMap["cielagoEast"].getZone(8).setXYtroopTokens(734, 826);
	regionsMap["hargPass"].getZone(8).setXYtroopTokens(568, 576);

	regionsMap["cielagoEast"].getZone(9).setXYtroopTokens(667, 861);
	regionsMap["cielagoSouth"].getZone(9).setXYtroopTokens(598, 836);
	regionsMap["cielagoDepression"].getZone(9).setXYtroopTokens(579, 761);
	regionsMap["cielagoNorth"].getZone(9).setXYtroopTokens(552, 682);

	regionsMap["meridian"].getZone(10).setXYtroopTokens(444, 867);
	regionsMap["cielagoSouth"].getZone(10).setXYtroopTokens(513, 859);
	regionsMap["cielagoDepression"].getZone(10).setXYtroopTokens(494, 746);
	regionsMap["cielagoNorth"].getZone(10).setXYtroopTokens(499, 677);

	regionsMap["meridian"].getZone(11).setXYtroopTokens(375, 827);
	regionsMap["cielagoWest"].getZone(11).setXYtroopTokens(347, 770);
	regionsMap["cielagoDepression"].getZone(11).setXYtroopTokens(407, 755);
	regionsMap["cielagoNorth"].getZone(11).setXYtroopTokens(427, 676);

	regionsMap["habbanyaRidgeFlat"].getZone(12).setXYtroopTokens(227, 782);
	regionsMap["cielagoWest"].getZone(12).setXYtroopTokens(354, 670);
	regionsMap["falseWallWest"].getZone(12).setXYtroopTokens(278, 694);
	regionsMap["windPassNorth"].getZone(12).setXYtroopTokens(398, 625);

	regionsMap["habbanyaRidgeFlat"].getZone(13).setXYtroopTokens(107, 667);
	regionsMap["habanyaRidgeSietch"].getZone(13).setXYtroopTokens(192, 694);	
	regionsMap["windPass"].getZone(13).setXYtroopTokens(360, 579);
	regionsMap["falseWallWest"].getZone(13).setXYtroopTokens(300, 610);
	regionsMap["windPassNorth"].getZone(13).setXYtroopTokens(400, 545);
	regionsMap["habbanyaErg"].getZone(13).setXYtroopTokens(238, 614);
	
	regionsMap["habbanyaErg"].getZone(14).setXYtroopTokens(130, 596);	
	regionsMap["theGreaterFlat"].getZone(14).setXYtroopTokens(137, 546);
	regionsMap["falseWallWest"].getZone(14).setXYtroopTokens(327, 544);
	regionsMap["windPass"].getZone(14).setXYtroopTokens(383, 522);

	regionsMap["theGreatFlat"].getZone(15).setXYtroopTokens(125, 472);	
	regionsMap["funeralPlain"].getZone(15).setXYtroopTokens(127, 422);
	regionsMap["bightOfTheCliff"].getZone(15).setXYtroopTokens(82, 379);
	regionsMap["windPass"].getZone(15).setXYtroopTokens(398, 485);

	regionsMap["sietchTabr"].getZone(16).setXYtroopTokens(175, 329);	
	regionsMap["rockOutcroppings"].getZone(16).setXYtroopTokens(125, 271);
	regionsMap["bightOfTheCliff"].getZone(16).setXYtroopTokens(95, 331);
	regionsMap["plasticBasin"].getZone(16).setXYtroopTokens(260, 374);
	regionsMap["windPass"].getZone(16).setXYtroopTokens(418, 459);

	regionsMap["tsimpo"].getZone(17).setXYtroopTokens(330, 265);	
	regionsMap["rockOutcroppings"].getZone(17).setXYtroopTokens(194, 226);
	regionsMap["haggaBasin"].getZone(17).setXYtroopTokens(334, 335);
	regionsMap["plasticBasin"].getZone(17).setXYtroopTokens(268, 221);

	regionsMap["tsimpo"].getZone(18).setXYtroopTokens(413, 202);	
	regionsMap["brokenLand"].getZone(18).setXYtroopTokens(362, 117);
	regionsMap["haggaBasin"].getZone(18).setXYtroopTokens(433, 292);
	regionsMap["plasticBasin"].getZone(18).setXYtroopTokens(337, 187);
	regionsMap["arsunt"].getZone(18).setXYtroopTokens(463, 379);
	
	//creates tokens for each zones for each regions
	for(var i=0;i<regionsMapNames.length;i++){
	    for(var j=0;j<regionsMap[regionsMapNames[i]].zones.length;j++){
		//because zones are in a Array, and only the specified zones exists
		if( regionsMap[regionsMapNames[i]].getZone(j) != undefined){
		  
		    regionsMap[regionsMapNames[i]].getZone(j).troopTokensZone = this.add.sprite(0, 0, "Troop Tokens").setInteractive();
		    regionsMap[regionsMapNames[i]].getZone(j).troopTokensZone.displayWidth = sizeTokensTroops;
		    regionsMap[regionsMapNames[i]].getZone(j).troopTokensZone.displayHeight = sizeTokensTroops;

		    //set the text on the tokens zones
		    regionsMap[regionsMapNames[i]].getZone(j).troopTokensText = this.add.text(0, 0, regionsMap[regionsMapNames[i]].getZone(j).troopTokens, {fontSize: "20px", fill:'#fff'});
		    regionsMap[regionsMapNames[i]].getZone(j).troopTokensText.setOrigin(0.5,0.5);
		    
		    regionsMap[regionsMapNames[i]].getZone(j).troopTokensZone.on('pointerdown', function() {
			
			//Actions pour les tokens
			
		    });
		    //check for spice zones
		    if(regionsMap[regionsMapNames[i]].getZone(j).hasSpice == true){
			regionsMap[regionsMapNames[i]].getZone(j).spiceTokensZone = this.add.sprite(0,0,"Troop Tokens");
			regionsMap[regionsMapNames[i]].getZone(j).spiceTokensZone.displayWidth = sizeTokensTroops;
			regionsMap[regionsMapNames[i]].getZone(j).spiceTokensZone.displayHeight = sizeTokensTroops;
			regionsMap[regionsMapNames[i]].getZone(j).spiceTokensZone.setTint(0x00FF00);
			
			regionsMap[regionsMapNames[i]].getZone(j).spiceTokensText = this.add.text(0, 0, regionsMap[regionsMapNames[i]].getZone(j).spiceTokens, {fontSize: "20px", fill:'#fff'});

			regionsMap[regionsMapNames[i]].getZone(j).spiceTokensText.setOrigin(0.5,0.5);
			
			setSpiceTokens(regionsMapNames[i], j);
		    }

		    //set tokens   
		    setTroopTokens(regionsMapNames[i], j);
		}	
	    };
	};

	function setTroopTokens(region, zone){
	    
	    regionsMap[region].getZone(zone).troopTokensZone.x = regionsMap[region].getZone(zone).x;
	    regionsMap[region].getZone(zone).troopTokensZone.y = regionsMap[region].getZone(zone).y;
	    
	    regionsMap[region].getZone(zone).troopTokensText.x = regionsMap[region].getZone(zone).x;
	    regionsMap[region].getZone(zone).troopTokensText.y = regionsMap[region].getZone(zone).y;
	    
	};

	function setSpiceTokens(region, zone){
	    
	    regionsMap[region].getZone(zone).spiceTokensZone.x = regionsMap[region].getZone(zone).x + sizeTokensTroops;
	    regionsMap[region].getZone(zone).spiceTokensZone.y = regionsMap[region].getZone(zone).y;
	    
	    regionsMap[region].getZone(zone).spiceTokensText.x = regionsMap[region].getZone(zone).x + sizeTokensTroops;
	    regionsMap[region].getZone(zone).spiceTokensText.y = regionsMap[region].getZone(zone).y;
	    
	};

	test = this.add.sprite(500,500, "Troop Tokens");
	test.setTint(0xFFFFFF);
	test.visible = false;

	//this.scene.start("Storm");	

    },

    update: function ()
    {
	
    },

});

