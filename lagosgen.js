var fs = require("fs");
var map = 15000;
var lagoCount = 3;
var llocations = [];

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function getRandomLago() {
    var x = Math.floor(getRandom((-1*map)/2, map/2));
    var y = Math.floor(getRandom((-1*map)/2, map/2));
    var scale = getRandom(0.5, 5);//fila en 5
    return { x: x, y: y, scale };
}

for(var i = 0; i < lagoCount; i++) {
    llocations.push(getRandomLago());
}

var json = {llocations};
json = JSON.stringify(json);


fs.writeFileSync("src/lagos.json", json);