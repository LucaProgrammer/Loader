const print = (duration, iteration) => {
  let start = Date.now();
	
	process.stdout.write("Loading");
	
	var interval = setInterval(() => {
		process.stdout.write(".");
		loader(start, duration, interval);
	}, iteration);

};

const loader = (now, time, interval) => {
  if (Date.now() - now > time) {
    clearInterval(interval);
  }
}

module.exports = print;