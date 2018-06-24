var regionsMap = {};
var regionsMapNames = [
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
    "windPass", "habbanyaErg", "habanyaRidgeSietch",                                        //12 //NOTE: ecrit habanya Ridge sietch sur la carte, un seul n?
    "theGreaterFlat",                                                                       //13
    "theGreatFlat", "funeralPlain", "bightOfTheCliff",                                      //14
    "plasticBasin", "sietchTabr", "rockOutcroppings",                                       //15
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

for (var i = 0; i < regionsMapNames.length; i++) {
    regionsMap[regionsMapNames[i]] = new Region(regionsMapName[i]);
};

//Add neighbours

//Broken Land
regionsMap['brokenLand'].addZone(new Zone(), 1)
                        .addZone(new Zone(), 18);
regionsMap['brokenLand'].getZone(1).addNeighbour(regionsMap['brokenLand'].name, 18);
regionsMap['brokenLand'].getZone(1).addNeighbour(regionsMap['tsimpo'].name, 1);
regionsMap['brokenLand'].getZone(1).addNeighbour(regionsMap['ohGap'].name, 1);
regionsMap['brokenLand'].getZone(18).addNeighbour(regionsMap['brokenLand'].name, 1);
regionsMap['brokenLand'].getZone(18).addNeighbour(regionsMap['rockOutcroppings'].name, 17);
regionsMap['brokenLand'].getZone(18).addNeighbour(regionsMap['plasticBasin'].name, 18);
regionsMap['brokenLand'].getZone(18).addNeighbour(regionsMap['tsimpo'].name, 18);

console.log(regionsMap);
//"Oh Gap"
regionsMap['ohGap'].addZone(new Zone(), 1)
    .addZone(new Zone(), 2)
    .addZone(new Zone(), 3);
regionsMap['ohGap'].getZone(1).addNeighbour(regionsMap['ohGap'].name, 2);
regionsMap['ohGap'].getZone(1).addNeighbour(regionsMap['tsimpo'].name, 1);
regionsMap['ohGap'].getZone(1).addNeighbour(regionsMap['brokenLand'].name, 1);
regionsMap['ohGap'].getZone(2).addNeighbour(regionsMap['ohGap'].name, 1);
regionsMap['ohGap'].getZone(2).addNeighbour(regionsMap['ohGap'].name, 3);
regionsMap['ohGap'].getZone(2).addNeighbour(regionsMap['arrakeen'].name, 2);
regionsMap['ohGap'].getZone(2).addNeighbour(regionsMap['imperialBasin'].name, 2);
regionsMap['ohGap'].getZone(3).addNeighbour(regionsMap['ohGap'].name, 2);
regionsMap['ohGap'].getZone(3).addNeighbour(regionsMap['basin.name'], 3);
regionsMap['ohGap'].getZone(3).addNeighbour(regionsMap['rimWallWest'].name, 3);

//"regionsMap['tsimpo']"
regionsMap['tsimpo'].addZone(new Zone(), 1)
    .addZone(new Zone(), 18)
    .addZone(new Zone(), 17);
regionsMap['tsimpo'].getZone(1).addNeighbour(regionsMap['tsimpo'].name, 18);
regionsMap['tsimpo'].getZone(1).addNeighbour(regionsMap['brokenLand'].name, 1);
regionsMap['tsimpo'].getZone(1).addNeighbour(regionsMap['ohGap'].name, 1);
regionsMap['tsimpo'].getZone(1).addNeighbour(regionsMap['imperialBasin'].name, 1);
regionsMap['tsimpo'].getZone(1).addNeighbour(regionsMap['carthag'].name, 1);
regionsMap['tsimpo'].getZone(18).addNeighbour(regionsMap['tsimpo'], 1);
regionsMap['tsimpo'].getZone(18).addNeighbour(regionsMap['tsimpo'], 17);
regionsMap['tsimpo'].getZone(18).addNeighbour(regionsMap['haggaBasin'].name, 18);
regionsMap['tsimpo'].getZone(18).addNeighbour(regionsMap['brokenLand'].name, 18);
regionsMap['tsimpo'].getZone(18).addNeighbour(regionsMap['carthag'].name, 18);
regionsMap['tsimpo'].getZone(18).addNeighbour(regionsMap['plasticBasin'].name, 18);
regionsMap['tsimpo'].getZone(17).addNeighbour(regionsMap['tsimpo'].name, 18);
regionsMap['tsimpo'].getZone(17).addNeighbour(regionsMap['plasticBasin'].name, 17);
regionsMap['tsimpo'].getZone(17).addNeighbour(regionsMap['haggaBasin'].name, 17);

//"Carthag"
regionsMap['carthag'].addZone(new Zone(), 1);
regionsMap['carthag'].getZone(1).addNeighbour(regionsMap['tsimpo'].name, 1);
regionsMap['carthag'].getZone(1).addNeighbour(regionsMap['tsimpo'].name, 18);
regionsMap['carthag'].getZone(1).addNeighbour(regionsMap['imperialBasin'].name, 1);
regionsMap['carthag'].getZone(1).addNeighbour(regionsMap['arsunt'].name, 1);
regionsMap['carthag'].getZone(1).addNeighbour(regionsMap['haggaBasin'].name, 18);
regionsMap['carthag'].getZone(1).addNeighbour(regionsMap['haggaBasin'].name, 18);

//"Arsunt"
regionsMap['arsunt'].addZone(new Zone(), 1)
    .addZone(new Zone(), 18);
regionsMap['arsunt'].getZone(1).addNeighbour(regionsMap['arsunt'].name, 18);
regionsMap['arsunt'].getZone(1).addNeighbour(regionsMap['carthag'].name, 1);
regionsMap['arsunt'].getZone(1).addNeighbour(regionsMap['imperialBasin'].name, 1);
regionsMap['arsunt'].getZone(1).addNeighbour(regionsMap['haggaBasin'].name, 18);
regionsMap['arsunt'].getZone(1).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['arsunt'].getZone(18).addNeighbour(regionsMap['arsunt'].name, 1);
regionsMap['arsunt'].getZone(18).addNeighbour(regionsMap['haggaBasin'].name, 18);
regionsMap['arsunt'].getZone(18).addNeighbour(regionsMap['polarSink'].name, 0);

//"Imperial Basin"
regionsMap['imperialBasin'].addZone(new Zone(), 1)
    .addZone(new Zone(), 2)
    .addZone(new Zone(), 3);
regionsMap['imperialBasin'].getZone(1).addNeighbour(regionsMap['imperialBasin'].name, 2);
regionsMap['imperialBasin'].getZone(1).addNeighbour(regionsMap['tsimpo'].name, 1);
regionsMap['imperialBasin'].getZone(1).addNeighbour(regionsMap['carthag'].name, 1);
regionsMap['imperialBasin'].getZone(1).addNeighbour(regionsMap['arsunt'].name, 1);
regionsMap['imperialBasin'].getZone(2).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['imperialBasin'].getZone(2).addNeighbour(regionsMap['imperialBasin'].name, 1);
regionsMap['imperialBasin'].getZone(2).addNeighbour(regionsMap['imperialBasin'].name, 3);
regionsMap['imperialBasin'].getZone(2).addNeighbour(regionsMap['ohGap'].name, 2);
regionsMap['imperialBasin'].getZone(2).addNeighbour(regionsMap['arrakeen'].name, 2);
regionsMap['imperialBasin'].getZone(2).addNeighbour(regionsMap['rimWallWest'].name, 3);
regionsMap['imperialBasin'].getZone(3).addNeighbour(regionsMap['rimWallWest'].name, 3);
regionsMap['imperialBasin'].getZone(3).addNeighbour(regionsMap['holeInTheRock'].name, 3);
regionsMap['imperialBasin'].getZone(3).addNeighbour(regionsMap['shieldWall'].name, 3);
regionsMap['imperialBasin'].getZone(3).addNeighbour(regionsMap['falseWallWest'].name, 3);
regionsMap['imperialBasin'].getZone(3).addNeighbour(regionsMap['polarSink'].name, 0);

//"Arrakeen"
regionsMap['arrakeen'].addZone(new Zone(), 2);
regionsMap['arrakeen'].getZone(2).addNeighbour(regionsMap['ohGap'].name, 2);
regionsMap['arrakeen'].getZone(2).addNeighbour(regionsMap['imperialBasin'].name, 2);
regionsMap['arrakeen'].getZone(2).addNeighbour(regionsMap['rimWallWest'].name, 3);

//"Basin"
regionsMap['basin'].addZone(new Zone(), 3);
regionsMap['basin'].getZone(3).addNeighbour(regionsMap['ohGap'].name, 3);
regionsMap['basin'].getZone(3).addNeighbour(regionsMap['rimWallWest'].name, 3);
regionsMap['basin'].getZone(3).addNeighbour(regionsMap['sihayaRidge'].name, 3);
regionsMap['basin'].getZone(3).addNeighbour(regionsMap['holeInTheRock'].name, 3);

//"Rim Wall West"
regionsMap['rimWallWest'].addZone(new Zone(), 3);
regionsMap['rimWallWest'].getZone(3).addNeighbour(regionsMap['ohGap'].name, 3);
regionsMap['rimWallWest'].getZone(3).addNeighbour(regionsMap['imperialBasin'].name, 3);
regionsMap['rimWallWest'].getZone(3).addNeighbour(regionsMap['imperialBasin'].name, 2);
regionsMap['rimWallWest'].getZone(3).addNeighbour(regionsMap['arrakeen'].name, 2);
regionsMap['rimWallWest'].getZone(3).addNeighbour(regionsMap['basin'].name, 3);
regionsMap['rimWallWest'].getZone(3).addNeighbour(regionsMap['holeInTheRock'].name, 3);

//"Hole In The Rock"
regionsMap['holeInTheRock'].addZone(new Zone(), 3);
regionsMap['holeInTheRock'].getZone(3).addNeighbour(regionsMap['rimWallWest'].name, 3);
regionsMap['holeInTheRock'].getZone(3).addNeighbour(regionsMap['basin'].name, 3);
regionsMap['holeInTheRock'].getZone(3).addNeighbour(regionsMap['sihayaRidge'].name, 3);
regionsMap['holeInTheRock'].getZone(3).addNeighbour(regionsMap['shieldWall'].name, 3);
regionsMap['holeInTheRock'].getZone(3).addNeighbour(regionsMap['imperialBasin'].name, 3);

//"Sihaya Ridge"
regionsMap['sihayaRidge'].addZone(new Zone(), 3);
regionsMap['sihayaRidge'].getZone(3).addNeighbour(regionsMap['basin'].name, 3);
regionsMap['sihayaRidge'].getZone(3).addNeighbour(regionsMap['holeInTheRock'].name, 3);
regionsMap['sihayaRidge'].getZone(3).addNeighbour(regionsMap['shieldWall'].name, 2);
regionsMap['sihayaRidge'].getZone(3).addNeighbour(regionsMap['garaKulon'].name, 4);

//"Shield Wall"
regionsMap['shieldWall'].addZone(new Zone(), 3)
    .addZone(new Zone(), 4);
regionsMap['shieldWall'].getZone(3).addNeighbour(regionsMap['shieldWall'].name, 4);
regionsMap['shieldWall'].getZone(3).addNeighbour(regionsMap['imperialBasin'].name, 3);
regionsMap['shieldWall'].getZone(3).addNeighbour(regionsMap['holeInTheRock'].name, 3);
regionsMap['shieldWall'].getZone(3).addNeighbour(regionsMap['sihayaRidge'].name, 3);
regionsMap['shieldWall'].getZone(3).addNeighbour(regionsMap['falseWallWest'].name, 3);
regionsMap['shieldWall'].getZone(4).addNeighbour(regionsMap['shieldWall'].name, 3);
regionsMap['shieldWall'].getZone(4).addNeighbour(regionsMap['garaKulon'].name, 4);
regionsMap['shieldWall'].getZone(4).addNeighbour(regionsMap['pastyMesa'].name, 4);
regionsMap['shieldWall'].getZone(4).addNeighbour(regionsMap['theMinorErg'].name, 4);
regionsMap['shieldWall'].getZone(4).addNeighbour(regionsMap['falseWallWest'].name, 4);

//"False Wall East"
regionsMap['falseWallEast'].addZone(new Zone(), 3)
    .addZone(new Zone(), 4)
    .addZone(new Zone(), 5)
    .addZone(new Zone(), 6)
    .addZone(new Zone(), 7);
regionsMap['falseWallEast'].getZone(3).addNeighbour(regionsMap['falseWallEast'].name, 4);
regionsMap['falseWallEast'].getZone(3).addNeighbour(regionsMap['imperialBasin'].name, 3);
regionsMap['falseWallEast'].getZone(3).addNeighbour(regionsMap['shieldWall'].name, 3);
regionsMap['falseWallEast'].getZone(3).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['falseWallEast'].getZone(4).addNeighbour(regionsMap['falseWallEast'].name, 3);
regionsMap['falseWallEast'].getZone(4).addNeighbour(regionsMap['falseWallEast'].name, 5);
regionsMap['falseWallEast'].getZone(4).addNeighbour(regionsMap['shieldWall'].name, 4);
regionsMap['falseWallEast'].getZone(4).addNeighbour(regionsMap['theMinorErg'].name, 4);
regionsMap['falseWallEast'].getZone(4).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['falseWallEast'].getZone(5).addNeighbour(regionsMap['falseWallWest'].name, 4);
regionsMap['falseWallEast'].getZone(5).addNeighbour(regionsMap['falseWallWest'].name, 6);
regionsMap['falseWallEast'].getZone(5).addNeighbour(regionsMap['theMinorErg'].name, 5);
regionsMap['falseWallEast'].getZone(5).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['falseWallEast'].getZone(6).addNeighbour(regionsMap['falseWallWest'].name, 5);
regionsMap['falseWallEast'].getZone(6).addNeighbour(regionsMap['falseWallWest'].name, 6);
regionsMap['falseWallEast'].getZone(6).addNeighbour(regionsMap['theMinorErg'].name, 6);
regionsMap['falseWallEast'].getZone(6).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['falseWallEast'].getZone(7).addNeighbour(regionsMap['falseWallWest'].name, 6);
regionsMap['falseWallEast'].getZone(7).addNeighbour(regionsMap['hargPass'].name, 7);
regionsMap['falseWallEast'].getZone(7).addNeighbour(regionsMap['hargPass'].name, 8);
regionsMap['falseWallEast'].getZone(7).addNeighbour(regionsMap['theMinorErg'].name, 7);
regionsMap['falseWallEast'].getZone(7).addNeighbour(regionsMap['polarSink'].name, 0);

//"Gara Kulon"
regionsMap['garaKulon'].addZone(new Zone(), 4);
regionsMap['garaKulon'].getZone(4).addNeighbour(regionsMap['sihayaRidge'].name, 3);
regionsMap['garaKulon'].getZone(4).addNeighbour(regionsMap['shieldWall'].name, 4);
regionsMap['garaKulon'].getZone(4).addNeighbour(regionsMap['pastyMesa'].name, 4);

//"Pasty Mesa"
regionsMap['pastyMesa'].addZone(new Zone(), 4)
    .addZone(new Zone(), 5)
    .addZone(new Zone(), 6)
    .addZone(new Zone(), 7);
regionsMap['pastyMesa'].getZone(4).addNeighbour(regionsMap['pastyMesa'].name, 5);
regionsMap['pastyMesa'].getZone(4).addNeighbour(regionsMap['garaKulon'].name, 4);
regionsMap['pastyMesa'].getZone(4).addNeighbour(regionsMap['shieldWall'].name, 4);
regionsMap['pastyMesa'].getZone(4).addNeighbour(regionsMap['theMinorErg'].name, 4);
regionsMap['pastyMesa'].getZone(5).addNeighbour(regionsMap['pastyMesa'].name, 4);
regionsMap['pastyMesa'].getZone(5).addNeighbour(regionsMap['pastyMesa'].name, 6);
regionsMap['pastyMesa'].getZone(5).addNeighbour(regionsMap['redChasm'].name, 5);
regionsMap['pastyMesa'].getZone(5).addNeighbour(regionsMap['theMinorErg'].name, 5);
regionsMap['pastyMesa'].getZone(6).addNeighbour(regionsMap['pastyMesa'].name, 5);
regionsMap['pastyMesa'].getZone(6).addNeighbour(regionsMap['pastyMesa'].name, 7);
regionsMap['pastyMesa'].getZone(6).addNeighbour(regionsMap['southMesa'].name, 6);
regionsMap['pastyMesa'].getZone(6).addNeighbour(regionsMap['theMinorErg'].name, 6);
regionsMap['pastyMesa'].getZone(7).addNeighbour(regionsMap['pastyMesa'].name, 6);
regionsMap['pastyMesa'].getZone(7).addNeighbour(regionsMap['southMesa'].name, 7);
regionsMap['pastyMesa'].getZone(7).addNeighbour(regionsMap['theMinorErg'].name, 7);
regionsMap['pastyMesa'].getZone(7).addNeighbour(regionsMap['falseWallSouth'].name, 7);
regionsMap['pastyMesa'].getZone(7).addNeighbour(regionsMap['tueksSietch'].name, 7);//NOTE:?

//"The Minor Erg"
regionsMap['theMinorErg'].addZone(new Zone(), 4)
    .addZone(new Zone(), 5)
    .addZone(new Zone(), 6)
    .addZone(new Zone(), 7);
regionsMap['theMinorErg'].getZone(4).addNeighbour(regionsMap['theMinorErg'].name, 5);
regionsMap['theMinorErg'].getZone(4).addNeighbour(regionsMap['falseWallEast'].name, 4);
regionsMap['theMinorErg'].getZone(4).addNeighbour(regionsMap['shieldWall'].name, 4);
regionsMap['theMinorErg'].getZone(4).addNeighbour(regionsMap['pastyMesa'].name, 4);
regionsMap['theMinorErg'].getZone(5).addNeighbour(regionsMap['theMinorErg'].name, 4);
regionsMap['theMinorErg'].getZone(5).addNeighbour(regionsMap['theMinorErg'].name, 6);
regionsMap['theMinorErg'].getZone(5).addNeighbour(regionsMap['falseWallEast'].name, 5);
regionsMap['theMinorErg'].getZone(5).addNeighbour(regionsMap['pastyMesa'].name, 5);
regionsMap['theMinorErg'].getZone(6).addNeighbour(regionsMap['theMinorErg'].name, 5);
regionsMap['theMinorErg'].getZone(6).addNeighbour(regionsMap['theMinorErg'].name, 7);
regionsMap['theMinorErg'].getZone(6).addNeighbour(regionsMap['falseWallEast'].name, 6);
regionsMap['theMinorErg'].getZone(6).addNeighbour(regionsMap['pastyMesa'].name, 6);
regionsMap['theMinorErg'].getZone(7).addNeighbour(regionsMap['theMinorErg'].name, 6);
regionsMap['theMinorErg'].getZone(7).addNeighbour(regionsMap['falseWallEast'].name, 7);
regionsMap['theMinorErg'].getZone(7).addNeighbour(regionsMap['pastyMesa'].name, 7);
regionsMap['theMinorErg'].getZone(7).addNeighbour(regionsMap['falseWallSouth'].name, 7);
regionsMap['theMinorErg'].getZone(7).addNeighbour(regionsMap['hargPass'].name, 7);

// "Red Chasm"
regionsMap['redChasm'].addZone(new Zone(), 5);
regionsMap['redChasm'].getZone(5).addNeighbour(regionsMap['pastyMesa'].name, 5);
regionsMap['redChasm'].getZone(5).addNeighbour(regionsMap['southMesa'].name, 6);

//"South Mesa"
regionsMap['southMesa'].addZone(new Zone(), 6)
    .addZone(new Zone(), 7)
    .addZone(new Zone(), 8);
regionsMap['southMesa'].getZone(6).addNeighbour(regionsMap['southMesa'].name, 7);
regionsMap['southMesa'].getZone(6).addNeighbour(regionsMap['pastyMesa'].name, 6);
regionsMap['southMesa'].getZone(6).addNeighbour(regionsMap['redChasm'].name, 5);
regionsMap['southMesa'].getZone(7).addNeighbour(regionsMap['southMesa'].name, 6);
regionsMap['southMesa'].getZone(7).addNeighbour(regionsMap['southMesa'].name, 8);
regionsMap['southMesa'].getZone(7).addNeighbour(regionsMap['pastyMesa'].name, 7);
regionsMap['southMesa'].getZone(7).addNeighbour(regionsMap['falseWallSouth'].name, 7);
regionsMap['southMesa'].getZone(7).addNeighbour(regionsMap['tueksSietch'].name, 7);
regionsMap['southMesa'].getZone(8).addNeighbour(regionsMap['southMesa'].name, 7);
regionsMap['southMesa'].getZone(8).addNeighbour(regionsMap['cielagoEast'].name, 8);
regionsMap['southMesa'].getZone(8).addNeighbour(regionsMap['falseWallSouth'].name, 8);

//"Tueks Sietch"
regionsMap['tueksSietch'].addZone(new Zone(), 7);
regionsMap['tueksSietch'].getZone(7).addNeighbour(regionsMap['southMesa'].name, 7);
regionsMap['tueksSietch'].getZone(7).addNeighbour(regionsMap['falseWallSouth'].name, 7);
regionsMap['tueksSietch'].getZone(7).addNeighbour(regionsMap['pastyMesa'].name, 7);

//"False Wall South"
regionsMap['falseWallSouth'].addZone(new Zone(), 7)
    .addZone(new Zone(), 8);
regionsMap['falseWallSouth'].getZone(7).addNeighbour(regionsMap['falseWallSouth'].name, 8);
regionsMap['falseWallSouth'].getZone(7).addNeighbour(regionsMap['tueksSietch'].name, 7);
regionsMap['falseWallSouth'].getZone(7).addNeighbour(regionsMap['southMesa'].name, 7);
regionsMap['falseWallSouth'].getZone(7).addNeighbour(regionsMap['hargPass'].name, 7);
regionsMap['falseWallSouth'].getZone(7).addNeighbour(regionsMap['pastyMesa'].name, 7);
regionsMap['falseWallSouth'].getZone(7).addNeighbour(regionsMap['theMinorErg'].name, 7);
regionsMap['falseWallSouth'].getZone(8).addNeighbour(regionsMap['falseWallSouth'].name, 7);
regionsMap['falseWallSouth'].getZone(8).addNeighbour(regionsMap['southMesa'].name, 8);
regionsMap['falseWallSouth'].getZone(8).addNeighbour(regionsMap['cielagoEast'].name, 8);
regionsMap['falseWallSouth'].getZone(8).addNeighbour(regionsMap['cielagoEast'].name, 9);
regionsMap['falseWallSouth'].getZone(8).addNeighbour(regionsMap['cielagoNorth'].name, 9);
regionsMap['falseWallSouth'].getZone(8).addNeighbour(regionsMap['hargPass'].name, 8);

//"Harg Pass"
regionsMap['hargPass'].addZone(new Zone(), 7)
    .addZone(new Zone(), 8);
regionsMap['hargPass'].getZone(7).addNeighbour(regionsMap['hargPass'].name, 8);
regionsMap['hargPass'].getZone(7).addNeighbour(regionsMap['falseWallEast'].name, 7);
regionsMap['hargPass'].getZone(7).addNeighbour(regionsMap['theMinorErg'].name, 7);
regionsMap['hargPass'].getZone(7).addNeighbour(regionsMap['falseWallSouth'].name, 7);
regionsMap['hargPass'].getZone(8).addNeighbour(regionsMap['hargPass'].name, 7);
regionsMap['hargPass'].getZone(8).addNeighbour(regionsMap['falseWallEast'].name, 7);
regionsMap['hargPass'].getZone(8).addNeighbour(regionsMap['falseWallSouth'].name, 8);
regionsMap['hargPass'].getZone(8).addNeighbour(regionsMap['cielagoNorth'].name, 9);
regionsMap['hargPass'].getZone(8).addNeighbour(regionsMap['polarSink'].name, 0);

//"Cielago East"
regionsMap['cielagoEast'].addZone(new Zone(), 8)
    .addZone(new Zone(), 9)
regionsMap['cielagoEast'].getZone(8).addNeighbour(regionsMap['cielagoEast'].name, 9);
regionsMap['cielagoEast'].getZone(8).addNeighbour(regionsMap['southMesa'].name, 8);
regionsMap['cielagoEast'].getZone(8).addNeighbour(regionsMap['falseWallSouth'].name, 8);
regionsMap['cielagoEast'].getZone(9).addNeighbour(regionsMap['cielagoEast'].name, 8);
regionsMap['cielagoEast'].getZone(9).addNeighbour(regionsMap['falseWallSouth'].name, 8);
regionsMap['cielagoEast'].getZone(9).addNeighbour(regionsMap['cielagoNorth'].name, 9);
regionsMap['cielagoEast'].getZone(9).addNeighbour(regionsMap['cielagoDepression'].name, 9);
regionsMap['cielagoEast'].getZone(9).addNeighbour(regionsMap['cielagoSouth'].name, 9);

//"Cielago North"
regionsMap['cielagoNorth'].addZone(new Zone(), 9)
    .addZone(new Zone(), 10)
    .addZone(new Zone(), 11);
regionsMap['cielagoNorth'].getZone(9).addNeighbour(regionsMap['cielagoNorth'].name, 10);
regionsMap['cielagoNorth'].getZone(9).addNeighbour(regionsMap['hargPass'].name, 8);
regionsMap['cielagoNorth'].getZone(9).addNeighbour(regionsMap['falseWallSouth'].name, 8);
regionsMap['cielagoNorth'].getZone(9).addNeighbour(regionsMap['cielagoEast'].name, 9);
regionsMap['cielagoNorth'].getZone(9).addNeighbour(regionsMap['cielagoDepression'].name, 9);
regionsMap['cielagoNorth'].getZone(9).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['cielagoNorth'].getZone(10).addNeighbour(regionsMap['cielagoNorth'].name, 9);
regionsMap['cielagoNorth'].getZone(10).addNeighbour(regionsMap['cielagoNorth'].name, 11);
regionsMap['cielagoNorth'].getZone(10).addNeighbour(regionsMap['cielagoDepression'].name, 10);
regionsMap['cielagoNorth'].getZone(10).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['cielagoNorth'].getZone(11).addNeighbour(regionsMap['cielagoNorth'].name, 10);
regionsMap['cielagoNorth'].getZone(11).addNeighbour(regionsMap['windPassNorth'].name, 12);
regionsMap['cielagoNorth'].getZone(11).addNeighbour(regionsMap['cielagoWest'].name, 11);
regionsMap['cielagoNorth'].getZone(11).addNeighbour(regionsMap['cielagoWest'].name, 12);
regionsMap['cielagoNorth'].getZone(11).addNeighbour(regionsMap['cielagoDepression'].name, 10);
regionsMap['cielagoNorth'].getZone(11).addNeighbour(regionsMap['polarSink'].name, 0);

//"Cielago Depression"
regionsMap['cielagoDepression'].addZone(new Zone(), 9)
    .addZone(new Zone(), 10)
    .addZone(new Zone(), 11);
regionsMap['cielagoDepression'].getZone(9).addNeighbour(regionsMap['cielagoDepression'].name, 10);
regionsMap['cielagoDepression'].getZone(9).addNeighbour(regionsMap['cielagoNorth'].name, 9);
regionsMap['cielagoDepression'].getZone(9).addNeighbour(regionsMap['cielagoEast'].name, 9);
regionsMap['cielagoDepression'].getZone(9).addNeighbour(regionsMap['cielagoSouth'].name, 9);
regionsMap['cielagoDepression'].getZone(10).addNeighbour(regionsMap['cielagoDepression'].name, 9);
regionsMap['cielagoDepression'].getZone(10).addNeighbour(regionsMap['cielagoDepression'].name, 11);
regionsMap['cielagoDepression'].getZone(10).addNeighbour(regionsMap['cielagoNorth'].name, 10);
regionsMap['cielagoDepression'].getZone(10).addNeighbour(regionsMap['cielagoSouth'].name, 10);
regionsMap['cielagoDepression'].getZone(10).addNeighbour(regionsMap['meridian'].name, 10);
regionsMap['cielagoDepression'].getZone(11).addNeighbour(regionsMap['cielagoDepression'].name, 10);
regionsMap['cielagoDepression'].getZone(11).addNeighbour(regionsMap['cielagoNorth'].name, 11);
regionsMap['cielagoDepression'].getZone(11).addNeighbour(regionsMap['cielagoWest'].name, 11);
regionsMap['cielagoDepression'].getZone(11).addNeighbour(regionsMap['meridian'].name, 11);

//"Cielago South"
regionsMap['cielagoSouth'].addZone(new Zone(), 9)
    .addZone(new Zone(), 10);
regionsMap['cielagoSouth'].getZone(9).addNeighbour(regionsMap['cielagoSouth'].name, 10);
regionsMap['cielagoSouth'].getZone(9).addNeighbour(regionsMap['cielagoDepression'].name, 9);
regionsMap['cielagoSouth'].getZone(9).addNeighbour(regionsMap['cielagoEast'].name, 9);
regionsMap['cielagoSouth'].getZone(10).addNeighbour(regionsMap['cielagoSouth'].name, 9);
regionsMap['cielagoSouth'].getZone(10).addNeighbour(regionsMap['cielagoDepression'].name, 10);
regionsMap['cielagoSouth'].getZone(10).addNeighbour(regionsMap['meridian'].name, 10);

//"Cielago West"
regionsMap['cielagoWest'].addZone(new Zone(), 11)
    .addZone(new Zone(), 12);
regionsMap['cielagoWest'].getZone(11).addNeighbour(regionsMap['cielagoWest'].name, 12);
regionsMap['cielagoWest'].getZone(11).addNeighbour(regionsMap['cielagoNorth'].name, 11);
regionsMap['cielagoWest'].getZone(11).addNeighbour(regionsMap['cielagoDepression'].name, 11);
regionsMap['cielagoWest'].getZone(11).addNeighbour(regionsMap['meridian'].name, 11);
regionsMap['cielagoWest'].getZone(12).addNeighbour(regionsMap['cielagoWest'].name, 11);
regionsMap['cielagoWest'].getZone(12).addNeighbour(regionsMap['windPassNorth'].name, 12);
regionsMap['cielagoWest'].getZone(12).addNeighbour(regionsMap['windPass'].name, 14);
regionsMap['cielagoWest'].getZone(12).addNeighbour(regionsMap['falseWallWest'].name, 12);
regionsMap['cielagoWest'].getZone(12).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 12);

//"Meridian"
regionsMap['meridian'].addZone(new Zone(), 10)
    .addZone(new Zone(), 11);
regionsMap['meridian'].getZone(10).addNeighbour(regionsMap['meridian'].name, 11);
regionsMap['meridian'].getZone(10).addNeighbour(regionsMap['cielagoDepression'].name, 10);
regionsMap['meridian'].getZone(10).addNeighbour(regionsMap['cielagoSouth'].name, 10);
regionsMap['meridian'].getZone(11).addNeighbour(regionsMap['meridian'].name, 10);
regionsMap['meridian'].getZone(11).addNeighbour(regionsMap['cielagoDepression'].name, 11);
regionsMap['meridian'].getZone(11).addNeighbour(regionsMap['cielagoWest'].name, 11);
regionsMap['meridian'].getZone(11).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 12);

//"Wind Pass North"
regionsMap['windPassNorth'].addZone(new Zone(), 12)
    .addZone(new Zone(), 13);
regionsMap['windPassNorth'].getZone(12).addNeighbour(regionsMap['windPassNorth'].name, 13);
regionsMap['windPassNorth'].getZone(12).addNeighbour(regionsMap['cielagoNorth'].name, 11);
regionsMap['windPassNorth'].getZone(12).addNeighbour(regionsMap['cielagoWest'].name, 12);
regionsMap['windPassNorth'].getZone(12).addNeighbour(regionsMap['windPassNorth'].name, 13);
regionsMap['windPassNorth'].getZone(12).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['windPassNorth'].getZone(13).addNeighbour(regionsMap['windPassNorth'].name, 12);
regionsMap['windPassNorth'].getZone(13).addNeighbour(regionsMap['windPass'].name, 13);
regionsMap['windPassNorth'].getZone(13).addNeighbour(regionsMap['windPass'].name, 14);//NOTE: ?
regionsMap['windPassNorth'].getZone(13).addNeighbour(regionsMap['polarSink'].name, 0);

//"False Wall West"//------------------
regionsMap['falseWallWest'].addZone(new Zone(), 12)
    .addZone(new Zone(), 13)
    .addZone(new Zone(), 14);
regionsMap['falseWallWest'].getZone(12).addNeighbour(regionsMap['falseWallWest'].name, 13);
regionsMap['falseWallWest'].getZone(12).addNeighbour(regionsMap['cielagoWest'].name, 12);
regionsMap['falseWallWest'].getZone(12).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 12);
regionsMap['falseWallWest'].getZone(13).addNeighbour(regionsMap['falseWallWest'].name, 12);
regionsMap['falseWallWest'].getZone(13).addNeighbour(regionsMap['falseWallWest'].name, 14);
regionsMap['falseWallWest'].getZone(13).addNeighbour(regionsMap['windPass'].name, 13);
regionsMap['falseWallWest'].getZone(13).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 13);
regionsMap['falseWallWest'].getZone(13).addNeighbour(regionsMap['habbanyaErg'].name, 13);
regionsMap['falseWallWest'].getZone(14).addNeighbour(regionsMap['falseWallWest'].name, 13);
regionsMap['falseWallWest'].getZone(14).addNeighbour(regionsMap['windPass'].name, 14);
regionsMap['falseWallWest'].getZone(14).addNeighbour(regionsMap['habbanyaErg'].name, 14);
regionsMap['falseWallWest'].getZone(14).addNeighbour(regionsMap['theGreaterFlat'].name, 14);

//"Habbanya Ridge Flat"
regionsMap['habbanyaRidgeFlat'].addZone(new Zone(), 12)
    .addZone(new Zone(), 13);
regionsMap['habbanyaRidgeFlat'].getZone(12).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 13);
regionsMap['habbanyaRidgeFlat'].getZone(12).addNeighbour(regionsMap['meridian'].name, 11);
regionsMap['habbanyaRidgeFlat'].getZone(12).addNeighbour(regionsMap['falseWallWest'].name, 12);
regionsMap['habbanyaRidgeFlat'].getZone(12).addNeighbour(regionsMap['cielagoWest'].name, 12);
regionsMap['habbanyaRidgeFlat'].getZone(12).addNeighbour(regionsMap['cielagoWest'].name, 11);//NOTE: ?
regionsMap['habbanyaRidgeFlat'].getZone(13).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 12);
regionsMap['habbanyaRidgeFlat'].getZone(13).addNeighbour(regionsMap['habbanyaErg'].name, 13);
regionsMap['habbanyaRidgeFlat'].getZone(13).addNeighbour(regionsMap['habbanyaErg'].name, 15);
regionsMap['habbanyaRidgeFlat'].getZone(13).addNeighbour(regionsMap['falseWallWest'].name, 13);
regionsMap['habbanyaRidgeFlat'].getZone(13).addNeighbour(regionsMap['habanyaRidgeSietch'].name, 18);

//"Wind Pass"
regionsMap['windPass'].addZone(new Zone(), 13)
    .addZone(new Zone(), 14)
    .addZone(new Zone(), 15)
    .addZone(new Zone(), 16);
regionsMap['windPass'].getZone(13).addNeighbour(regionsMap['windPass'].name, 14);
regionsMap['windPass'].getZone(13).addNeighbour(regionsMap['windPassNorth'].name, 13);
regionsMap['windPass'].getZone(13).addNeighbour(regionsMap['cielagoWest'].name, 12);
regionsMap['windPass'].getZone(13).addNeighbour(regionsMap['falseWallWest'].name, 13);
regionsMap['windPass'].getZone(14).addNeighbour(regionsMap['windPass'].name, 13);
regionsMap['windPass'].getZone(14).addNeighbour(regionsMap['windPass'].name, 15);
regionsMap['windPass'].getZone(14).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['windPass'].getZone(14).addNeighbour(regionsMap['falseWallWest'].name, 14);
regionsMap['windPass'].getZone(14).addNeighbour(regionsMap['theGreaterFlat'].name, 14);
regionsMap['windPass'].getZone(15).addNeighbour(regionsMap['windPass'].name, 16);
regionsMap['windPass'].getZone(15).addNeighbour(regionsMap['windPass'].name, 14);
regionsMap['windPass'].getZone(15).addNeighbour(regionsMap['theGreatFlat'].name, 15);
regionsMap['windPass'].getZone(15).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['windPass'].getZone(16).addNeighbour(regionsMap['windPass'].name, 15);
regionsMap['windPass'].getZone(16).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['windPass'].getZone(16).addNeighbour(regionsMap['haggaBasin'].name, 17);
regionsMap['windPass'].getZone(16).addNeighbour(regionsMap['polarSink'].name, 0);

//"Habanya Ridge Sietch"
regionsMap['habanyaRidgeSietch'].addZone(new Zone(), 13);
regionsMap['habanyaRidgeSietch'].getZone(13).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 13);

//"Habbanya Erg"
regionsMap['habbanyaErg'].addZone(new Zone(), 13)
    .addZone(new Zone(), 14);
regionsMap['habbanyaErg'].getZone(13).addNeighbour(regionsMap['habbanyaErg'].name, 14);
regionsMap['habbanyaErg'].getZone(13).addNeighbour(regionsMap['falseWallWest'].name, 13);
regionsMap['habbanyaErg'].getZone(13).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 13);
regionsMap['habbanyaErg'].getZone(14).addNeighbour(regionsMap['habbanyaErg'].name, 13);
regionsMap['habbanyaErg'].getZone(14).addNeighbour(regionsMap['habbanyaRidgeFlat'].name, 13);
regionsMap['habbanyaErg'].getZone(14).addNeighbour(regionsMap['falseWallWest'].name, 14);//NOTE: ?
regionsMap['habbanyaErg'].getZone(14).addNeighbour(regionsMap['theGreaterFlat'].name, 14);

//"The Greater Flat"
regionsMap['theGreaterFlat'].addZone(new Zone(), 14);
regionsMap['theGreaterFlat'].getZone(14).addNeighbour(regionsMap['falseWallWest'].name, 14);
regionsMap['theGreaterFlat'].getZone(14).addNeighbour(regionsMap['windPass'].name, 14);
regionsMap['theGreaterFlat'].getZone(14).addNeighbour(regionsMap['habbanyaErg'].name, 14);
regionsMap['theGreaterFlat'].getZone(14).addNeighbour(regionsMap['theGreatFlat'].name, 15);

//"The Great Flat
regionsMap['theGreatFlat'].addZone(new Zone(), 15);
regionsMap['theGreatFlat'].getZone(15).addNeighbour(regionsMap['theGreaterFlat'].name, 14);
regionsMap['theGreatFlat'].getZone(15).addNeighbour(regionsMap['windPass'], 15);
regionsMap['theGreatFlat'].getZone(15).addNeighbour(regionsMap['funeralPlain'].name, 15);
regionsMap['theGreatFlat'].getZone(15).addNeighbour(regionsMap['plasticBasin'].name, 16);

//"Funeral Plain"
regionsMap['funeralPlain'].addZone(new Zone(), 15);
regionsMap['funeralPlain'].getZone(15).addNeighbour(regionsMap['theGreatFlat'].name, 15);
regionsMap['funeralPlain'].getZone(15).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['funeralPlain'].getZone(15).addNeighbour(regionsMap['bightOfTheCliff'].name, 15);

//"Bight of the Cliff"
regionsMap['bightOfTheCliff'].addZone(new Zone(), 15)
    .addZone(new Zone(), 16);
regionsMap['bightOfTheCliff'].getZone(15).addNeighbour(regionsMap['bightOfTheCliff'].name, 16);
regionsMap['bightOfTheCliff'].getZone(15).addNeighbour(regionsMap['funeralPlain'].name, 15);
regionsMap['bightOfTheCliff'].getZone(16).addNeighbour(regionsMap['bightOfTheCliff'].name, 15);
regionsMap['bightOfTheCliff'].getZone(16).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['bightOfTheCliff'].getZone(16).addNeighbour(regionsMap['rockOutcroppings'].name, 16);
regionsMap['bightOfTheCliff'].getZone(16).addNeighbour(regionsMap['sietchTabr'].name, 16);

//"Plastic Basin"
regionsMap['plasticBasin'].addZone(new Zone(), 16)
    .addZone(new Zone(), 17)
    .addZone(new Zone(), 18);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['plasticBasin'].name, 17);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['windPass'].name, 16);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['theGreatFlat'].name, 15);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['funeralPlain'].name, 15);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['bightOfTheCliff'].name, 16);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['sietchTabr'].name, 16);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['rockOutcroppings'].name, 16);
regionsMap['plasticBasin'].getZone(16).addNeighbour(regionsMap['haggaBasin'].name, 17);
regionsMap['plasticBasin'].getZone(17).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['plasticBasin'].getZone(17).addNeighbour(regionsMap['plasticBasin'].name, 18);
regionsMap['plasticBasin'].getZone(17).addNeighbour(regionsMap['rockOutcroppings'].name, 17);
regionsMap['plasticBasin'].getZone(17).addNeighbour(regionsMap['haggaBasin'].name, 17);
regionsMap['plasticBasin'].getZone(17).addNeighbour(regionsMap['tsimpo'].name, 17);
regionsMap['plasticBasin'].getZone(18).addNeighbour(regionsMap['plasticBasin'].name, 17);
regionsMap['plasticBasin'].getZone(18).addNeighbour(regionsMap['tsimpo'].name, 18);
regionsMap['plasticBasin'].getZone(18).addNeighbour(regionsMap['brokenLand'].name, 18);

//"Sietch Tabr"
regionsMap['sietchTabr'].addZone(new Zone(), 16);
regionsMap['sietchTabr'].getZone(16).addNeighbour(regionsMap['bightOfTheCliff'].name, 16);
regionsMap['sietchTabr'].getZone(16).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['sietchTabr'].getZone(16).addNeighbour(regionsMap['rockOutcroppings'].name, 16);

//"Rock Outcroppings"
regionsMap['rockOutcroppings'].addZone(new Zone(), 16)
    .addZone(new Zone(), 17);
regionsMap['rockOutcroppings'].getZone(16).addNeighbour(regionsMap['rockOutcroppings'].name, 17);
regionsMap['rockOutcroppings'].getZone(16).addNeighbour(regionsMap['bightOfTheCliff'].name, 16);
regionsMap['rockOutcroppings'].getZone(16).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['rockOutcroppings'].getZone(16).addNeighbour(regionsMap['sietchTabr'].name, 16);
regionsMap['rockOutcroppings'].getZone(17).addNeighbour(regionsMap['rockOutcroppings'].name, 16);
regionsMap['rockOutcroppings'].getZone(17).addNeighbour(regionsMap['plasticBasin'].name, 17);
regionsMap['rockOutcroppings'].getZone(17).addNeighbour(regionsMap['brokenLand'].name, 18);

//"Hagga Basin"
regionsMap['haggaBasin'].addZone(new Zone(), 17)
    .addZone(new Zone(), 18);
regionsMap['haggaBasin'].getZone(17).addNeighbour(regionsMap['haggaBasin'].name, 18);
regionsMap['haggaBasin'].getZone(17).addNeighbour(regionsMap['windPass'].name, 16);
regionsMap['haggaBasin'].getZone(17).addNeighbour(regionsMap['plasticBasin'].name, 16);
regionsMap['haggaBasin'].getZone(17).addNeighbour(regionsMap['plasticBasin'].name, 17);
regionsMap['haggaBasin'].getZone(17).addNeighbour(regionsMap['arsunt'].name, 18);
regionsMap['haggaBasin'].getZone(17).addNeighbour(regionsMap['polarSink'].name, 0);
regionsMap['haggaBasin'].getZone(18).addNeighbour(regionsMap['haggaBasin'].name, 17);
regionsMap['haggaBasin'].getZone(18).addNeighbour(regionsMap['carthag'].name, 0);
regionsMap['haggaBasin'].getZone(18).addNeighbour(regionsMap['arsunt'].name, 18);
regionsMap['haggaBasin'].getZone(18).addNeighbour(regionsMap['arsunt'].name, 1);
regionsMap['haggaBasin'].getZone(18).addNeighbour(regionsMap['polarSink'].name, 0);

//"Polar Sink"
regionsMap['polarSink'].addZone(new Zone(), 0);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['arsunt'].name, 18);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['arsunt'].name, 1);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['imperialBasin'].name, 2);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['imperialBasin'].name, 3);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['falseWallEast'].name, 3);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['falseWallEast'].name, 4);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['falseWallEast'].name, 5);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['falseWallEast'].name, 6);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['falseWallEast'].name, 7);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['hargPass'].name, 8);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['cielagoNorth'].name, 9);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['cielagoNorth'].name, 10);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['cielagoNorth'].name, 11);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['windPassNorth'].name, 12);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['windPassNorth'].name, 13);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['windPass'].name, 14);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['windPass'].name, 15);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['windPass'].name, 16);
regionsMap['polarSink'].getZone(0).addNeighbour(regionsMap['haggaBasin'].name, 17);

//Spice

regionsMap['ohGap'].getZone(2).haveSpice = true;
regionsMap['sihayaRidge'].getZone(3).haveSpice = true;
regionsMap['theMinorErg'].getZone(4).haveSpice = true;
regionsMap['redChasm'].getZone(5).haveSpice = true;
regionsMap['southMesa'].getZone(6).haveSpice = true;
regionsMap['cielagoNorth'].getZone(9).haveSpice = true;
regionsMap['cielagoSouth'].getZone(10).haveSpice = true;
regionsMap['habbanyaRidgeFlat'].getZone(12).haveSpice = true;
regionsMap['windPassNorth'].getZone(13).haveSpice = true;
regionsMap['habbanyaErg'].getZone(14).haveSpice = true;
regionsMap['theGreatFlat'].getZone(15).haveSpice = true;
regionsMap['funeralPlain'].getZone(15).haveSpice = true;
regionsMap['rockOutcroppings'].getZone(16).haveSpice = true;
regionsMap['haggaBasin'].getZone(17).haveSpice = true;
regionsMap['brokenLand'].getZone(18).haveSpice = true;

//Cities

regionsMap['carthag'].getZone(1).isCity = true;
regionsMap['arrakeen'].getZone(2).isCity = true;
regionsMap['tueksSietch'].getZone(7).isCity = true;
regionsMap['habanyaRidgeSietch'].getZone(13).isCity = true;
regionsMap['sietchTabr'].getZone(16).isCity = true;

//Copters

regionsMap['carthag'].getZone(1).hasCopter = true;
regionsMap['arrakeen'].getZone(2).hasCopter = true;

//Add to the map

for (var i = 0; i < regionsMap.length; i++) {
    var myMap = new Map();
    myMap.addRegion(regionsMap[i]);

};
