

// The rules check to see if a user has the right to do a certain action.
// It checks the adjacency of Zones, Moves the Storm, spawns Spice, etc

function Rules(map) {
    this.map = map;
}

Rules.prototype.checkAdjacency = function(zone1, zone2) {
    //...
}

// The map holds a reference to all the regions.
// In the map are all the zones indexed by their name.
// The map will also hold the index for the timezone the storm location
function Map() {
    this.regions      = [];
    this.stormIndex   = 0;
    this.numTimezones = 18;
}

// We can add some error handling in here to make sure we dont add the same region twice
Map.prototype.addRegion = function(region) {
    this.regions[region.name] = region;
    return this;
}

// The rules are responsible for incrementing the storm
// So the rules would say by how much to move the storm.
// But the MAP knows that only 18 timezones are allowed,
// since the numTimezones are a description of the state of the map
Map.prototype.incrementStorm = function(num) {
    this.stormIndex  = (num + this.stormIndex) % this.numTimezones;
    return this;
}

// Regions are the greater areas with names, and a reference to their zones.
// Each Region has a name, and zones. 
// Each Region is split by the radial cuts of the timezones.
// Each zone of a region is in a single timezone.
// Each zone is indexed by the timezone it's in.
function Region(name) {
    this.name  = name;
    this.zones = [];
}

Region.prototype.addZone = function(zone, timezone) {
    this.zones[timezone] = zone;
    return this;
}

Region.prototype.setName = function(name) {
    this.name = name;
    return this;
}

Region.prototype.getZone = function(timezone) {
    return this.zones[timezone];
}

// Zones take care of the granular knowledge.
// Whether the zone is a city, or if it has spice, or if it has other qualities that may be relevant to the rules
function Zone() {
    
    this.neighbours = [];
    this.hasSpice   = false;
    this.isCity     = false;
    this.hasCopter  = false;

    this.troopTokens = 0;
    this.troopTokensText = "";
    this.troopTokensZone = "";

    this.spiceTokens = 0;
    this.spiceTokensZone = "";
    this.spiceTokensText = "";

    this.x = 0;
    this.y = 0;
}

// Zones are not necessarily neighbours with all the zones in their region. They need to know about it.
// Zones neighbours are just a list of the region name, and the timezone of that region.
Zone.prototype.addNeighbour = function(name, timezone) {
    this.neighbours.push([name, timezone]);
    return this;
}

Zone.prototype.addTroopTokens = function(amount) {
    this.troopTokens += amount;
    return this;
}

Zone.prototype.removeTroopTokens = function(amount) {
    this.troopTokens -= amount;
    return this;
}

Zone.prototype.setXYtroopTokens = function(newX, newY){
    this.x = newX;
    this.y = newY;
    return this;
}
// Didier
// function Player(data) {
//     this.spice = data.spice;
//     this.soldiers = data.soldiers;
//     this.cards = data.cards;
// }

// Player.prototype.getSpice  = function () {
//     return this.spice;
// };

// Player.prototype.getSpiceFromDeals  = function () {
//     // for () .
//     // there is actual code here
//     return 39;
// };

// Player.prototype.getSpiceForTurn = function () {
//     return this.getSpiceFromDeals() + this.getSpice();
// }

// var players = {};

// players['harkonnen'] = new Player('harkonnen', {"spice": 5, "soldiers": 20});
// players['atreides'] = new Player('atreides', {"spice": 5, "soldiers": 20});

// var spice = players['harkonnen'].spice;
// var spice = players['harkonnen'].getSpice();

// if (spice > 20) {
//     console.log("This person is very rich!!");
// }

// var dictionnary = {"key1": "poop", "key2": "LOL"};
// players['harkonnen'].addCard(dictionnary.pop('key1'));

// //"poop";
// console.log(dictionnary);
// // {"key2": "LOL"};
