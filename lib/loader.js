var interval = 0;

const start = (iteration, message) => {
 let isPrintedMessage = false;
 interval = setInterval(() => {
   isPrintedMessage ? process.stdout.write(".") : process.stdout.write(message);
   isPrintedMessage = true;
 }, iteration);
};

const stop = () => {
 clearInterval(interval);
};

module.exports = { start, stop };