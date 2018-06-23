

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

}

// Zones are not necessarily neighbours with all the zones in their region. They need to know about it.
// Zones neighbours are just a list of the region name, and the timezone of that region.
Zone.prototype.addNeighbour = function(name, timezone) {
    this.neighbours.push([name, timezone]);
    return this;
}

// EXAMPLE USAGE
// I want to create a Region with four zones.
// Lets call it "The Minor Erg". It starts at the timezone index 5 and finishes at 8
var theMinorErg = new Region("The Minor Erg");
zone5 = new Zone();
zone6 = new Zone();
zone7 = new Zone();
zone8 = new Zone();
theMinorErg.addZone(zone5, 5)
            .addZone(zone6, 6)
            .addZone(zone7, 7)
            .addZone(zone8, 8);

// Each of these zones are neighbours with their immediate friendos.
theMinorErg.getZone(5).addNeighbour(theMinorErg.name, 6);
theMinorErg.getZone(6).addNeighbour(theMinorErg.name, 5);
theMinorErg.getZone(6).addNeighbour(theMinorErg.name, 7);
theMinorErg.getZone(7).addNeighbour(theMinorErg.name, 6);
theMinorErg.getZone(7).addNeighbour(theMinorErg.name, 8);
theMinorErg.getZone(8).addNeighbour(theMinorErg.name, 7);

// And with this we have exactly one region and its zones! But there are more to come.
// These need to be neighbours with the zones of other regions as well. Swell.
// And Finally, we can add the minor erg to the Map.

var myMap = new Map();
myMap.addRegion(theMinorErg);


// Now to do the same with all other regions.
// it might be wise to make 5-6 regions and test the adjacency algorithms (which have yet to be written..)
// 
var theRules = new Rules(myMap);
