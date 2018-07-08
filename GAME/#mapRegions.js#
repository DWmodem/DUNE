var regionsMap = [
                  "brokenLand", "ohGap", "tsimpo", "carthag", "arsunt", "imperialBasin",                  //Zone 0 //NOTE: on garde Oh Gap ou ont met Old Gap?
		  "arrakeen",                                                                             //1  
		  "basin", "rimWallWest", "holeInTheRock", "sihayaRidge", "shieldWall", "falseWallEast",  //2
		  "garaKulon", "pastyMesa", "theMinorErg",                                                //3
		  "redChasm",                                                                             //4
		  "southMesa",                                                                            //5
                  "tueksSietch", "falseWallSouth", "hargPass",                                            //6
                  "cielagoEast",                                                                          //7
                  "cielagoNorth", "cielagoDepression", "cielagoSouth",                                    //8
		                                                                                          //9
                  "cielagoWest", "meridian",                                                              //10
                  "windPassNorth", "falseWallWest", "habbanyaRidgeFlat",                                  //11
    "windPass", "habbanyaErg", "habanyaRidgeSietch",                                 //12 //NOTE: ecrit habanya Ridge sietch sur la carte, un seul n?
                  "theGreaterFlat",                                                                       //13
                  "theGreatFlat", "funeralPlain", "bightofTheCliff",                                      //14
                  "plasticBasin", "sietchTabr", "rockOutcroppings",                                        //15
		  "haggaBasin",                                                                           //16
		                                                                                          //17
		                                                                                          //18
                  "polarSink"                                                                             //polarSink
];

var regionsMapName = [
                  "Broken Land", "Oh Gap", "Tsimpo", "Carthag", "Arsunt", "Imperial Basin",                        //Zone 0 //NOTE: on garde Oh Gap ou ont met Old Gap?
		  "Arrakeen",                                                                                      //1  
		  "Basin", "Rim Wall West", "Hole In The Rock", "Sihaya Ridge", "Shield Wall", "False Wall East",  //2
		  "Gara Kulon", "Pasty Mesa", "The Minor Erg",                                                     //3
		  "Red Chasm",                                                                                     //4
		  "South Mesa",                                                                                    //5
                  "Tueks Sietch", "False Wall South", "Harg Pass",                                                 //6
                  "Cielago East",                                                                                  //7
                  "Cielago North", "Cielago Depression", "Cielago South",                                          //8
		                                                                                                   //9
                  "Cielago West", "Meridian",                                                                      //10
                  "Wind Pass North", "False Wall West", "Habbanya Ridge Flat",                                     //11
                  "Wind Pass", "Habbanya Erg", "Habanya Ridge Sietch",                                             //12 //NOTE: ecrit habanya Ridge sur la carte, un seul n?
                  "The Greater Flat",                                                                              //13
                  "The Great Flat", "Funeral Plain", "Bight of the Cliff",                                         //14
                  "Plastic Basin", "Sietch Tabr", "Rock Outcroppings",                                              //15
		  "Hagga Basin",                                                                                   //16
		                                                                                                   //17
		                                                                                                   //18
                  "Polar Sink"                                                                                     //polarSink
];

//Add regions

for(var i=0;i < regionsMap.length;i++){
    regionsMap[i] = new Region(regionsMapName[i]);
};

//Add neighbours

//Broken Land
brokenLand.addZone(new Zone(), 0)
    .addZone(new Zone(), 17);
brokenLand.getZone(0).addNeighbour(brokenLand.name, 18);
brokenLand.getZone(0).addNeighbour(tsimpo.name, 0);
brokenLand.getZone(0).addNeighbour(ohGap.name, 0);
brokenLand.getZone(18).addNeighbour(brokenLand.name, 0);
brokenLand.getZone(18).addNeighbour(rockOutcropings.name, 17);
brokenLand.getZone(18).addNeighbour(plasticBasin.name, 18);
brokenLand.getZone(18).addNeighbour(tsimpo.name, 18);

//"Oh Gap"
ohGap.addZone(new Zone(), 0)
    .addZone(new Zone(), 1)
    .addZone(new Zone(), 2);
ohGap.getZone(0).addNeighbour(ohGap.name, 1);
ohGap.getZone(0).addNeighbour(tsimpo.name, 0);
ohGap.getZone(0).addNeighbour(ohGap.name, 0);
ohGap.getZone(1).addNeighbour(ohGap.name, 0);
ohGap.getZone(1).addNeighbour(ohGap.name, 2);
ohGap.getZone(1).addNeighbour(arrakeen.name, 1);
ohGap.getZone(1).addNeighbour(imperialBasin.name, 1);
ohGap.getZone(2).addNeighbour(ohGap.name, 1);
ohGap.getZone(2).addNeighbour(basin.name, 2);
ohGap.getZone(2).addNeighbour(rimWallWest.name, 2);

//"Tsimpo"
tsimpo.addZone(new Zone(), 0)
    .addZone(new Zone(), 17)
    .addZone(new Zone(), 16);
tsimpo.getZone(0).addNeighbour(tsimpo.name, 17);
tsimpo.getZone(0).addNeighbour(brokenLand.name, 0);
tsimpo.getZone(0).addNeighbour(ohGap.name, 0);
tsimpo.getZone(0).addNeighbour(imperialBasin.name, 0);
tsimpo.getZone(0).addNeighbour(carthag.name, 0);
tsimpo.getZone(17).addNeighbour(tsimpo, 0);
tsimpo.getZone(17).addNeighbour(tsimpo, 16);
tsimpo.getZone(17).addNeighbour(haggaBasin.name, 17);
tsimpo.getZone(17).addNeighbour(brokenLand.name, 17);
tsimpo.getZone(17).addNeighbour(carthag.name, 17);
tsimpo.getZone(17).addNeighbour(plasticBasin.name, 17);
tsimpo.getZone(16).addNeighbour(tsimpo.name, 17);
tsimpo.getZone(16).addNeighbour(plasticBasin.name, 16);
tsimpo.getZone(16).addNeighbour(haggaBasin.name, 16);

//"Carthag"
carthag.addZone(new Zone(), 0);
carthag.getZone(0).addNeighbour(tsimpo.name, 0);
carthag.getZone(0).addNeighbour(tsimpo.name, 17);
carthag.getZone(0).addNeighbour(imperialBasin.name, 0);
carthag.getZone(0).addNeighbour(arsunt.name, 0);
carthag.getZone(0).addNeighbour(haggaBasin.name, 17);
carthag.getZone(0).addNeighbour(haggaBasin.name, 17);

//"Arsunt"
arsunt.addZone(new Zone(), 0)
    .addZone(new Zone(), 17);
arsunt.getZone(0).addNeighbour(arsunt.name, 17);
arsunt.getZone(0).addNeighbour(carthag.name, 0);
arsunt.getZone(0).addNeighbour(imperialBasin.name, 0);
arsunt.getZone(0).addNeighbour(haggaBasin.name, 17);
arsunt.getZone(0).addNeighbour(polarSink.name, 18);
arsunt.getZone(17).addNeighbour(arsunt.name, 0);
arsunt.getZone(17).addNeighbour(haggaBasin.name, 17);
arsunt.getZone(17).addNeighbour(polarSink.name, 18);

//"Imperial Basin"
imperialBasin.addZone(new Zone(), 0)
    .addZone(new Zone(), 1)
    .addZone(new Zone(), 2);
imperialBasin.getZone(0).addNeighbour(imperialBasin.name, 1);
imperialBasin.getZone(0).addNeighbour(tsimpo.name, 0);
imperialBasin.getZone(0).addNeighbour(carthag.name, 0);
imperialBasin.getZone(0).addNeighbour(arsunt.name, 0);
imperialBasin.getZone(1).addNeighbour(polarSink.name, 18);
imperialBasin.getZone(1).addNeighbour(imperialBasin.name, 0);
imperialBasin.getZone(1).addNeighbour(imperialBasin.name, 2);
imperialBasin.getZone(1).addNeighbour(ohGap.name, 1);
imperialBasin.getZone(1).addNeighbour(arrakeen.name, 1);
imperialBasin.getZone(1).addNeighbour(rimWallWest.name, 2);
imperialBasin.getZone(2).addNeighbour(rimWallWest.name, 2);
imperialBasin.getZone(2).addNeighbour(holeInTheRock.name, 2);
imperialBasin.getZone(2).addNeighbour(shieldWall.name, 2);
imperialBasin.getZone(2).addNeighbour(falseWallWest.name, 2);
imperialBasin.getZone(2).addNeighbour(polarSink.name, 18);

//"Arrakeen"  
arrakeen.addZone(new Zone(), 1)
arrakeen.getZone(1).addNeighbour(ohGap.name, 1);
arrakeen.getZone(1).addNeighbour(imperialBasin.name, 1);
arrakeen.getZone(1).addNeighbour(rimWallWest.name, 2);

//"Basin"
basin.addZone(new Zone(), 2)
basin.getZone(2).addNeighbour(ohGap.name, 2);
basin.getZone(2).addNeighbour(rimWallWest.name, 2);
basin.getZone(2).addNeighbour(sihayaRidge.name, 2);
basin.getZone(2).addNeighbour(holeInTheRock.name, 2);

//"Rim Wall West"
rimWallWest.addZone(new Zone(), 2)
rimWallWest.getZone(2).addNeighbour(ohGap.name, 2);
rimWallWest.getZone(2).addNeighbour(imperialBasin.name, 2);
rimWallWest.getZone(2).addNeighbour(imperialBasin.name, 1);
rimWallWest.getZone(2).addNeighbour(arrakeen.name, 1);
rimWallWest.getZone(2).addNeighbour(basin.name, 2);
rimWallWest.getZone(2).addNeighbour(holeInTheRock.name, 2);

//"Hole In The Rock"
holeInTheRock.addZone(new Zone(), 2)
holeInTheRock.getZone(2).addNeighbour(rimWallWest.name, 2);
holeInTheRock.getZone(2).addNeighbour(basin.name, 2);
holeInTheRock.getZone(2).addNeighbour(sihayaRidge.name, 2);
holeInTheRock.getZone(2).addNeighbour(shieldWall.name, 2);
holeInTheRock.getZone(2).addNeighbour(imperialBasin.name, 2);

//"Sihaya Ridge"
sihayaRidge.addZone(new Zone(), 2)
sihayaRidge.getZone(2).addNeighbour(basin.name, 2);
sihayaRidge.getZone(2).addNeighbour(holeInTheRock.name, 2);
sihayaRidge.getZone(2).addNeighbour(shieldWall.name, 1);
sihayaRidge.getZone(2).addNeighbour(garaKulon.name, 3);

//"Shield Wall"
shieldWall.addZone(new Zone(), 2)
    .addZone(new Zone(), 3) 
shieldWall.getZone(2).addNeighbour(shieldWall.name, 3);
shieldWall.getZone(2).addNeighbour(imperialBasin.name, 2);
shieldWall.getZone(2).addNeighbour(holeInTheRock.name, 2);
shieldWall.getZone(2).addNeighbour(sihayaRidge.name, 2);
shieldWall.getZone(2).addNeighbour(falseWallWest.name, 2);
shieldWall.getZone(3).addNeighbour(shieldWall.name, 2);
shieldWall.getZone(3).addNeighbour(garaKulon.name, 3);
shieldWall.getZone(3).addNeighbour(pastyMesa.name, 3);
shieldWall.getZone(3).addNeighbour(theMinorErg.name, 3);
shieldWall.getZone(3).addNeighbour(falseWallWest.name, 3);

//"False Wall East"
falseWallEast.addZone(new Zone(), 2)
    .addZone(new Zone(), 2)
    .addZone(new Zone(), 3)
    .addZone(new Zone(), 4)
    .addZone(new Zone(), 5)
falseWallEast.getZone(2).addNeighbour(falseWallEast.name, 3);
falseWallEast.getZone(2).addNeighbour(imperialBasin.name, 2);
falseWallEast.getZone(2).addNeighbour(shieldWall.name, 2);
falseWallEast.getZone(2).addNeighbour(polarSink.name, 18);
falseWallEast.getZone(3).addNeighbour(falseWallEast.name, 2);
falseWallEast.getZone(3).addNeighbour(falseWallEast.name, 4);
falseWallEast.getZone(3).addNeighbour(shieldWall.name, 3);
falseWallEast.getZone(3).addNeighbour(theMinorErg.name, 3);
falseWallEast.getZone(3).addNeighbour(polarSink.name, 18);
falseWallEast.getZone(4).addNeighbour(falseWallWest.name, 3);
falseWallEast.getZone(4).addNeighbour(falseWallWest.name, 5);
falseWallEast.getZone(4).addNeighbour(theMinorErg.name, 4);
falseWallEast.getZone(4).addNeighbour(polarSink.name, 18);
falseWallEast.getZone(5).addNeighbour(falseWallWest.name, 4);
falseWallEast.getZone(5).addNeighbour(falseWallWest.name, 6);
falseWallEast.getZone(5).addNeighbour(theMinorErg.name, 5);
falseWallEast.getZone(5).addNeighbour(polarSink.name, 18);
falseWallEast.getZone(6).addNeighbour(falseWallWest.name, 5);
falseWallEast.getZone(6).addNeighbour(hargPass.name, 6);
falseWallEast.getZone(6).addNeighbour(hargPass.name, 7);
falseWallEast.getZone(6).addNeighbour(theMinorErg.name, 6);
falseWallEast.getZone(6).addNeighbour(polarSink.name, 18);

//"Gara Kulon"
garaKulon.addZone(new Zone(), 3)
garaKulon.getZone(0).addNeighbour(sihayaRidge.name, 2);
garaKulon.getZone(0).addNeighbour(shieldWall.name, 3);
garaKulon.getZone(0).addNeighbour(pastyMesa.name, 3);

//"Pasty Mesa"
pastyMesa.addZone(new Zone(), 3)
    .addZone(new Zone(), 4)
    .addZone(new Zone(), 5)
    .addZone(new Zone(), 6);
pastyMesa.getZone(3).addNeighbour(pastyMesa.name, 4);
pastyMesa.getZone(3).addNeighbour(garaKulon.name, 3);
pastyMesa.getZone(3).addNeighbour(shieldWall.name, 3);
pastyMesa.getZone(3).addNeighbour(theMinorErg.name, 3);
pastyMesa.getZone(4).addNeighbour(pastyMesa.name, 3);
pastyMesa.getZone(4).addNeighbour(pastyMesa.name, 5);
pastyMesa.getZone(4).addNeighbour(redChasm.name, 4);
pastyMesa.getZone(4).addNeighbour(theMinorErg.name, 4);
pastyMesa.getZone(5).addNeighbour(pastyMesa.name, 4);
pastyMesa.getZone(5).addNeighbour(pastyMesa.name, 6);
pastyMesa.getZone(5).addNeighbour(southMesa.name, 5);
pastyMesa.getZone(5).addNeighbour(theMinorErg.name, 5);
pastyMesa.getZone(6).addNeighbour(pastyMesa.name, 5);
pastyMesa.getZone(6).addNeighbour(southMesa.name, 6);
pastyMesa.getZone(6).addNeighbour(theMinorErg.name, 6);
pastyMesa.getZone(6).addNeighbour(falseWallSouth.name, 6);
pastyMesa.getZone(6).addNeighbour(tueksSietch.name, 6);//NOTE:?

//"The Minor Erg"
theMinorErg.addZone(new Zone(), 3)
    .addZone(new Zone(), 4)
    .addZone(new Zone(), 5)
    .addZone(new Zone(), 6)
theMinorErg.getZone(3).addNeighbour(theMinorErg.name, 4);
theMinorErg.getZone(3).addNeighbour(falseWallEast.name, 3);
theMinorErg.getZone(3).addNeighbour(shieldWall.name, 3);
theMinorErg.getZone(3).addNeighbour(pastyMesa.name, 3);
theMinorErg.getZone(4).addNeighbour(theMinorErg.name, 3);
theMinorErg.getZone(4).addNeighbour(theMinorErg.name, 5);
theMinorErg.getZone(4).addNeighbour(falseWallEst.name, 4);
theMinorErg.getZone(4).addNeighbour(pastyMesa.name, 4);
theMinorErg.getZone(5).addNeighbour(theMinorErg.name, 4);
theMinorErg.getZone(5).addNeighbour(theMinorErg.name, 6);
theMinorErg.getZone(5).addNeighbour(falseWallEst.name, 5);
theMinorErg.getZone(5).addNeighbour(pastyMesa.name, 5);
theMinorErg.getZone(6).addNeighbour(theMinorErg.name, 5);
theMinorErg.getZone(6).addNeighbour(falseWallEst.name, 6);
theMinorErg.getZone(6).addNeighbour(pastyMesa.name, 6);
theMinorErg.getZone(6).addNeighbour(falseWallSouth.name, 6);
theMinorErg.getZone(6).addNeighbour(hargPass.name, 6);

// "Red Chasm"
redChasm.addZone(new Zone(), 4);
redChasm.getZone(0).addNeighbour(pastyMesa.name, 4);
redChasm.getZone(0).addNeighbour(southMesa.name, 5);

//"South Mesa"
southMesa.addZone(new Zone(), 5)
    .addZone(new Zone(), 6)
    .addZone(new Zone(), 7);
southMesa.getZone(5).addNeighbour(southMesa.name, 6);
southMesa.getZone(5).addNeighbour(pastyMesa.name, 5);
southMesa.getZone(5).addNeighbour(redChasm.name, 4);
southMesa.getZone(6).addNeighbour(southMesa.name, 5);
southMesa.getZone(6).addNeighbour(southMesa.name, 7);
southMesa.getZone(6).addNeighbour(pastyMesa.name, 6);
southMesa.getZone(6).addNeighbour(falseWallSouth.name, 6);
southMesa.getZone(6).addNeighbour(tueksSietch.name, 6);
southMesa.getZone(7).addNeighbour(southMesa.name, 6);
southMesa.getZone(7).addNeighbour(cielagoEast.name, 7);
southMesa.getZone(7).addNeighbour(falseWallSouth.name, 7);

//"Tueks Sietch"
tueksSietch.addZone(new Zone(), 6);
tueksSietch.getZone(6).addNeighbour(southMesa.name, 6);
tueksSietch.getZone(6).addNeighbour(falseWallSouth.name, 6);
tueksSietch.getZone(6).addNeighbour(pastyMesa.name, 6);

//"False Wall South"
falseWallSouth.addZone(new Zone(), 6)
    .addZone(new Zone(), 7);
falseWallSouth.getZone(6).addNeighbour(falseWallSouth.name, 7);
falseWallSouth.getZone(6).addNeighbour(tueksSietch.name, 6);
falseWallSouth.getZone(6).addNeighbour(southMesa.name, 6);
falseWallSouth.getZone(6).addNeighbour(hargPass.name, 6);
falseWallSouth.getZone(6).addNeighbour(pastyMesa.name, 6);
falseWallSouth.getZone(6).addNeighbour(theMinorErg.name, 6);
falseWallSouth.getZone(7).addNeighbour(falseWallSouth.name, 6);
falseWallSouth.getZone(7).addNeighbour(southMesa.name, 7);
falseWallSouth.getZone(7).addNeighbour(cielagoEast.name, 7);
falseWallSouth.getZone(7).addNeighbour(cielagoEast.name, 8);
falseWallSouth.getZone(7).addNeighbour(cielagoNorth.name, 8);
falseWallSouth.getZone(7).addNeighbour(hargPass.name, 7);				       
				       
//"Harg Pass"
hargPass.addZone(new Zone(), 6)
    .addZone(new Zone(), 7);
hargPass.getZone(6).addNeighbour(hargPass.name, 7);
hargPass.getZone(6).addNeighbour(falseWallEst.name, 6);
hargPass.getZone(6).addNeighbour(theMinorErg.name, 6);
hargPass.getZone(6).addNeighbour(falseWallSouth.name, 6);
hargPass.getZone(7).addNeighbour(hargPass.name, 6);
hargPass.getZone(7).addNeighbour(falseWallEst.name, 6);
hargPass.getZone(7).addNeighbour(falseWallSouth.name, 7);
hargPass.getZone(7).addNeighbour(cielagoNorth.name, 8);
hargPass.getZone(7).addNeighbour(polarSink.name, 18);

//"Cielago East"
cielagoEast.addZone(new Zone(), 7)
    .addZone(new Zone(), 8)
cielagoEast.getZone(7).addNeighbour(cielagoEast.name, 8);
cielagoEast.getZone(7).addNeighbour(southMesa.name, 7);
cielagoEast.getZone(7).addNeighbour(falseWallSouth.name, 7);
cielagoEast.getZone(8).addNeighbour(cielagoEast.name, 7);
cielagoEast.getZone(8).addNeighbour(falseWallSouth.name, 7);
cielagoEast.getZone(8).addNeighbour(cielagoNorth.name, 8);
cielagoEast.getZone(8).addNeighbour(cielagoDepression.name, 8);
cielagoEast.getZone(8).addNeighbour(cielagoSouth.name, 8);

//"Cielago North"
cielagoNorth.addZone(new Zone(), 8)
    .addZone(new Zone(), 9)
    .addZone(new Zone(), 10);
cielagoNorth.getZone(8).addNeighbour(cielagoNorth.name, 9);
cielagoNorth.getZone(8).addNeighbour(hargPass.name, 7);
cielagoNorth.getZone(8).addNeighbour(falseWallSouth.name, 7);
cielagoNorth.getZone(8).addNeighbour(cielagoEast.name, 8);
cielagoNorth.getZone(8).addNeighbour(cielagoDepression.name, 8);
cielagoNorth.getZone(8).addNeighbour(polarSink.name, 18);
cielagoNorth.getZone(9).addNeighbour(cielagoNorth.name, 8);
cielagoNorth.getZone(9).addNeighbour(cielagoNorth.name, 10);
cielagoNorth.getZone(9).addNeighbour(cielagoDepression.name, 9);
cielagoNorth.getZone(9).addNeighbour(polarSink.name, 18);
cielagoNorth.getZone(10).addNeighbour(cielagoNorth.name, 9);
cielagoNorth.getZone(10).addNeighbour(windPassNorth.name, 11);
cielagoNorth.getZone(10).addNeighbour(cielagoWest.name, 10);
cielagoNorth.getZone(10).addNeighbour(cielagoWest.name, 11);
cielagoNorth.getZone(10).addNeighbour(cielagoDepression.name, 9);
cielagoNorth.getZone(10).addNeighbour(polarSink.name, 18);

//"Cielago Depression"
cielagoDepression.addZone(new Zone(), 8)
    .addZone(new Zone(), 9)
    .addZone(new Zone(), 10)
cielagoDepression.getZone(8).addNeighbour(cielagoDepression.name, 9);
cielagoDepression.getZone(8).addNeighbour(cielagoNorth.name, 8);
cielagoDepression.getZone(8).addNeighbour(cielagoEast.name, 8);
cielagoDepression.getZone(8).addNeighbour(cielagoSouth.name, 8);
cielagoDepression.getZone(9).addNeighbour(cielagoDepression.name, 8);
cielagoDepression.getZone(9).addNeighbour(cielagoDepression.name, 10);
cielagoDepression.getZone(9).addNeighbour(cielagoNorth.name, 9);
cielagoDepression.getZone(9).addNeighbour(cielagoSouth.name, 9);
cielagoDepression.getZone(9).addNeighbour(meridian.name, 9);
cielagoDepression.getZone(10).addNeighbour(cielagoDepression.name, 9);
cielagoDepression.getZone(10).addNeighbour(cielagoNorth.name, 10);
cielagoDepression.getZone(10).addNeighbour(cielagoWest.name, 10);
cielagoDepression.getZone(10).addNeighbour(meridian.name, 10);

//"Cielago South"
cielagoSouth.addZone(new Zone(), 8)
    .addZone(new Zone(), 9);
cielagoSouth.getZone(8).addNeighbour(cielagoSouth.name, 9);
cielagoSouth.getZone(8).addNeighbour(cielagoDepression.name, 8);
cielagoSouth.getZone(8).addNeighbour(cielagoEast.name, 8);
cielagoSouth.getZone(9).addNeighbour(cielagoSouth.name, 8);
cielagoSouth.getZone(9).addNeighbour(cielagoDepression.name, 9);
cielagoSouth.getZone(9).addNeighbour(meridian.name, 9);

//"Cielago West"
cielagoWest.addZone(new Zone(), 10)
    .addZone(new Zone(), 11);
cielagoWest.getZone(10).addNeighbour(cielagoWest.name, 11);
cielagoWest.getZone(10).addNeighbour(cielagoNorth.name, 10);
cielagoWest.getZone(10).addNeighbour(cielagoDepression.name, 10);
cielagoWest.getZone(10).addNeighbour(meridian.name, 10);
cielagoWest.getZone(11).addNeighbour(cielagoWest.name, 10);
cielagoWest.getZone(11).addNeighbour(windPassNorth.name, 11);
cielagoWest.getZone(11).addNeighbour(windPass.name, 12);
cielagoWest.getZone(11).addNeighbour(falseWallWest.name, 11);
cielagoWest.getZone(11).addNeighbour(habbanyaRidgeFlat.name, 11);

//"Meridian"
meridian.addZone(new Zone(), 9)
    .addZone(new Zone(), 10); 
meridian.getZone(9).addNeighbour(meridian.name, 10);
meridian.getZone(9).addNeighbour(cielagoDepression.name, 9);
meridian.getZone(9).addNeighbour(cielagoSouth.name, 9);
meridian.getZone(10).addNeighbour(meridian.name, 9);
meridian.getZone(10).addNeighbour(cielagoDepression.name, 10);
meridian.getZone(10).addNeighbour(cielagoWest.name, 10);
meridian.getZone(10).addNeighbour(habbanyaRidgeFlat.name, 11);

//"Wind Pass North"
windPassNorth.addZone(new Zone(), 11)
    .addZone(new Zone(), 12);
windPassNorth.getZone(11).addNeighbour(windPassNorth.name, 12);
windPassNorth.getZone(11).addNeighbour(cielagoNorth.name, 10);
windPassNorth.getZone(11).addNeighbour(cielagoWest.name, 11);
windPassNorth.getZone(11).addNeighbour(windPassNorth.name, 0);
windPassNorth.getZone(11).addNeighbour(polarSink.name, 18);
windPassNorth.getZone(12).addNeighbour(windPassNorth.name, 11);
windPassNorth.getZone(12).addNeighbour(windPass.name, 12);
windPassNorth.getZone(12).addNeighbour(windPass.name, 13);//NOTE: ?
windPassNorth.getZone(12).addNeighbour(polarSink.name, 18);

//"False Wall West"//------------------
falseWallWest.addZone(new Zone(), 11)
    .addZone(new Zone(), 12)
    .addZone(new Zone(), 13);
falseWallWest.getZone(11).addNeighbour(falseWallWest.name, 12);
falseWallWest.getZone(11).addNeighbour(cielagoWest.name, 11);
falseWallWest.getZone(11).addNeighbour(habbanyaRidgeFlat.name, 11);
falseWallWest.getZone(12).addNeighbour(falseWallWest.name, 11);
falseWallWest.getZone(12).addNeighbour(falseWallWest.name, 13);
falseWallWest.getZone(12).addNeighbour(windPass.name, 12);
falseWallWest.getZone(12).addNeighbour(habbanyaRidgeFlat.name, 12);
falseWallWest.getZone(12).addNeighbour(habbanyaErg.name, 12);
falseWallWest.getZone(13).addNeighbour(falseWallWest.name, 12);
falseWallWest.getZone(13).addNeighbour(windPass.name, 13);
falseWallWest.getZone(13).addNeighbour(habbanyaErg.name, 13);
falseWallWest.getZone(13).addNeighbour(theGreaterFlat.name, 13);

//"Habbanya Ridge Flat"
habbanyaRidgeFlat.addZone(new Zone(), 11)
    .addZone(new Zone(), 12);
habbanyaRidgeFlat.getZone(11).addNeighbour(habbanyaRidgeFlat.name, 12);
habbanyaRidgeFlat.getZone(11).addNeighbour(meridian.name, 10);
habbanyaRidgeFlat.getZone(11).addNeighbour(falseWallWest.name, 11);
habbanyaRidgeFlat.getZone(11).addNeighbour(cielagoWest.name, 11);
habbanyaRidgeFlat.getZone(11).addNeighbour(cielagoWest.name, 10);//NOTE: ?
habbanyaRidgeFlat.getZone(12).addNeighbour(habbanyaRidgeFlat.name, 11);
habbanyaRidgeFlat.getZone(12).addNeighbour(habbanyaErg.name, 12);
habbanyaRidgeFlat.getZone(12).addNeighbour(habbanyaErg.name, 13);
habbanyaRidgeFlat.getZone(12).addNeighbour(falseWallWest.name, 12);
habbanyaRidgeFlat.getZone(12).addNeighbour(habanyaRidgeSietch.name, 17);

//"Wind Pass"
windPass.addZone(new Zone(), 12)
    .addZone(new Zone(), 13)
    .addZone(new Zone(), 14)
    .addZone(new Zone(), 15);
windPass.getZone(12).addNeighbour(windPass.name, 13);
windPass.getZone(12).addNeighbour(windPassNorth.name, 12);
windPass.getZone(12).addNeighbour(cielagoWest.name, 11);
windPass.getZone(12).addNeighbour(falseWallWest.name, 12);
windPass.getZone(13).addNeighbour(windPass.name, 12);
windPass.getZone(13).addNeighbour(windPass.name, 14);
windPass.getZone(13).addNeighbour(polarSink.name, 18);
windPass.getZone(13).addNeighbour(falseWallWest.name, 13);
windPass.getZone(13).addNeighbour(theGreaterFlat.name, 13);
windPass.getZone(14).addNeighbour(windPass.name, 15);
windPass.getZone(14).addNeighbour(windPass.name, 13);
windPass.getZone(14).addNeighbour(theGreatFlat.name, 14);
windPass.getZone(14).addNeighbour(polarSink.name, 18);
windPass.getZone(15).addNeighbour(windPass.name, 14);
windPass.getZone(15).addNeighbour(plasticBasin.name, 15);
windPass.getZone(15).addNeighbour(haggaBasin.name, 16);
windPass.getZone(15).addNeighbour(polarSink.name, 18);

//"Habanya Ridge Sietch"
habanyaRidgeSietch.addZone(new Zone(), 12);
habanyaRidgeSietch.getZone(0).addNeighbour(habbanyaRidgeFlat.name, 12);

//"Habbanya Erg"
habbanyaErg.addZone(new Zone(), 12)
    .addZone(new Zone(), 13);
habbanyaErg.getZone(12).addNeighbour(habbanyaErg.name, 13);
habbanyaErg.getZone(12).addNeighbour(falseWallWest.name, 12);
habbanyaErg.getZone(12).addNeighbour(habbanyaRidgeFlat.name, 12);
habbanyaErg.getZone(13).addNeighbour(habbanyaErg.name, 12);
habbanyaErg.getZone(13).addNeighbour(habbanyaRidgeFlat.name, 12);
habbanyaErg.getZone(13).addNeighbour(falseWallWest.name, 13);//NOTE: ?
habbanyaErg.getZone(13).addNeighbour(theGreaterFlat.name, 13);

//"The Greater Flat"
theGreaterFlat.addZone(new Zone(), 13);
theGreaterFlat.getZone(13).addNeighbour(falseWallWest.name, 13);
theGreaterFlat.getZone(13).addNeighbour(windPass.name, 13);
theGreaterFlat.getZone(13).addNeighbour(habbanyaErg.name, 13);
theGreaterFlat.getZone(13).addNeighbour(theGreatFlat.name, 14);

//"The Great Flat
theGreatFlat.addZone(new Zone(), 14);
theGreatFlat.getZone(14).addNeighbour(theGreaterFlat.name, 13);
theGreatFlat.getZone(14).addNeighbour(windPass, 14);
theGreatFlat.getZone(14).addNeighbour(funeralPlain.name, 14);
theGreatFlat.getZone(14).addNeighbour(plasticBasin.name, 15);

//"Funeral Plain"
funeralPlain.addZone(new Zone(), 14);
funeralPlain.getZone(14).addNeighbour(theGreatFlat.name, 14);
funeralPlain.getZone(14).addNeighbour(plasticBasin.name, 15);
funeralPlain.getZone(14).addNeighbour(bightofTheCliff.name, 14);

//"Bight of the Cliff"
blightOfTheCliff.addZone(new Zone(), 14)
    .addZone(new Zone(), 15);
blightOfTheCliff.getZone(14).addNeighbour(blightOfTheCliff.name, 15);
blightOfTheCliff.getZone(14).addNeighbour(funeralPlain.name, 14);
blightOfTheCliff.getZone(15).addNeighbour(blightOfTheCliff.name, 14);
blightOfTheCliff.getZone(15).addNeighbour(plasticBasin.name, 15);
blightOfTheCliff.getZone(15).addNeighbour(rockOutcroppings.name, 15);
blightOfTheCliff.getZone(15).addNeighbour(sietchTabr.name, 15);

//"Plastic Basin"
plasticBasin.addZone(new Zone(), 15)
    .addZone(new Zone(), 16)
    .addZone(new Zone(), 17);
plasticBasin.getZone(15).addNeighbour(plasticBasin.name, 16);
plasticBasin.getZone(15).addNeighbour(windPass.name, 15);
plasticBasin.getZone(15).addNeighbour(theGreatFlat.name, 14);
plasticBasin.getZone(15).addNeighbour(funeralPlain.name, 14);
plasticBasin.getZone(15).addNeighbour(blightOfTheCliff.name, 15);
plasticBasin.getZone(15).addNeighbour(sietchTabr.name, 15);
plasticBasin.getZone(15).addNeighbour(rockOutcroppings.name, 15);
plasticBasin.getZone(15).addNeighbour(haggaBasin.name, 16);
plasticBasin.getZone(16).addNeighbour(plasticBasin.name, 15);
plasticBasin.getZone(16).addNeighbour(plasticBasin.name, 17);
plasticBasin.getZone(16).addNeighbour(rockOutcroppings.name, 16);
plasticBasin.getZone(16).addNeighbour(haggaBasin.name, 16);
plasticBasin.getZone(16).addNeighbour(tsimpo.name, 16);
plasticBasin.getZone(17).addNeighbour(plasticBasin.name, 16);
plasticBasin.getZone(17).addNeighbour(tsimpo.name, 17);
plasticBasin.getZone(17).addNeighbour(brokenLand.name, 17);

//"Sietch Tabr"
sietchTabr.addZone(new Zone(), 15);
sietchTabr.getZone(15).addNeighbour(bightofTheCliff.name, 15);
sietchTabr.getZone(15).addNeighbour(plasticBasin.name, 15);
sietchTabr.getZone(15).addNeighbour(rockOutcroppings.name, 15);

//"Rock Outcroppings"
rockOutcroppings.addZone(new Zone(), 15)
    .addZone(new Zone(), 16);
rockOutcroppings.getZone(15).addNeighbour(rockOutcroppings.name, 16);
rockOutcroppings.getZone(15).addNeighbour(bightofTheCliff.name, 15);
rockOutcroppings.getZone(15).addNeighbour(plasticBasin.name, 15);
rockOutcroppings.getZone(15).addNeighbour(sietchTabr.name, 15);
rockOutcroppings.getZone(16).addNeighbour(rockOutcroppings.name, 15);
rockOutcroppings.getZone(16).addNeighbour(plasticBasin.name, 16);
rockOutcroppings.getZone(16).addNeighbour(brokenLand.name, 17);

//"Hagga Basin"
haggaBasin.addZone(new Zone(), 16)
    .addZone(new Zone(), 17);
haggaBasin.getZone(16).addNeighbour(haggaBasin.name, 17);
haggaBasin.getZone(16).addNeighbour(windPass.name, 15);
haggaBasin.getZone(16).addNeighbour(plasticBasin.name, 15);
haggaBasin.getZone(16).addNeighbour(plasticBasin.name, 16);
haggaBasin.getZone(16).addNeighbour(arsunt.name, 17);
haggaBasin.getZone(16).addNeighbour(polarSink.name, 18);
haggaBasin.getZone(17).addNeighbour(haggaBasin.name, 16);
haggaBasin.getZone(17).addNeighbour(carthag.name, 0);
haggaBasin.getZone(17).addNeighbour(arsunt.name, 17);
haggaBasin.getZone(17).addNeighbour(arsunt.name, 0);
haggaBasin.getZone(17).addNeighbour(polarSink.name, 18);

//"Polar Sink"                                 
polarSink.addZone(new Zone(), 18)
polarSink.getZone(0).addNeighbour(arsunt.name, 17);
polarSink.getZone(0).addNeighbour(arsunt.name, 0);
polarSink.getZone(0).addNeighbour(imperialBasin.name, 1);
polarSink.getZone(1).addNeighbour(imperialBasin.name, 2);
polarSink.getZone(1).addNeighbour(falseWallEst.name, 2);
polarSink.getZone(1).addNeighbour(falseWallEst.name, 3);
polarSink.getZone(1).addNeighbour(falseWallEst.name, 4);
polarSink.getZone(1).addNeighbour(falseWallEst.name, 5);
polarSink.getZone(1).addNeighbour(falseWallEst.name, 6);
polarSink.getZone(1).addNeighbour(hargPass.name, 7);
polarSink.getZone(1).addNeighbour(cielagoNorth.name, 8);
polarSink.getZone(1).addNeighbour(cielagoNorth.name, 9);
polarSink.getZone(1).addNeighbour(cielagoNorth.name, 10);
polarSink.getZone(1).addNeighbour(windPassNorth.name, 11);
polarSink.getZone(1).addNeighbour(windPassNorth.name, 12);
polarSink.getZone(1).addNeighbour(windPass.name, 13);
polarSink.getZone(1).addNeighbour(windPass.name, 14);
polarSink.getZone(1).addNeighbour(windPass.name, 15);
polarSink.getZone(1).addNeighbour(haggaBasin.name, 16);

//Spice

ohGap.getZone(1).haveSpice = true;
sihayaRidge.getZone(2).haveSpice = true;
theMinorErg.getZone(3).haveSpice = true;
redChasm.getZone(4).haveSpice = true;
southMesa.getZone(6).haveSpice = true;
cielagoNorth.getZone(8).haveSpice = true;
cielagoSouth.getZone(9).haveSpice = true;
habbanyaRidgeFlat.getZone(11).haveSpice = true;
windPassNorth.getZone(12).haveSpice = true;
habbanyaErg.getZone(13).haveSpice = true;
theGreatFlat.getZone(14).haveSpice = true;
funeralPlain.getZone(14).haveSpice = true;
rockOutcroppings.getZone(15).haveSpice = true;
haggaBasin.getZone(16).haveSpice = true;
brokenLand.getZone(17).haveSpice = true;

//Cities

carthag.getZone(0).isCity = true;
Arrakeen.getZone(1).isCity = true;
tueksSietch.getZone(6).isCity = true;
habanyaRidgeSietch.getZone(12).isCity = true;
sietchTabr.getZone(15).isCity = true;

//Copters

carthag.getZone(0).hasCopter = true;
Arrakeen.getZone(1).hasCopter = true;

//Add to the map

for(var i=0; i<regionsMap.length;i++){
    var myMap = new Map();
    myMap.addRegion(regionsMap[i]);

};




