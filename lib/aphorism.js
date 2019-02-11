const aphorism = require("./loaders.json");

var interval = 0;

const start = (iteration) => {
 interval = setInterval(() => {
	 var random = Math.floor(Math.random() * 50);
	console.log(aphorism.aphorism[random]);
 }, iteration);
};

const stop = () => {
 clearInterval(interval);
};


module.exports = { start, stop };