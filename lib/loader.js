const aphorism = require("./loaders.json");
var interval = 0;
var index = 0;

const startDotLine = (iteration, message) => {
  let isPrintedMessage = false;
  interval = setInterval(() => {
    isPrintedMessage
      ? process.stdout.write(".")
      : process.stdout.write(message);
    isPrintedMessage = true;
  }, iteration);
};


const spinner = array => {
  if (index < array.length) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(array[index]);
    index++;
  } else {
    index = 0;
  }
};

const startSpinner = (iteration) => {
  interval = setInterval(() => {spinner(aphorism.spinner)}, iteration);
};

const stop = () => {
  clearInterval(interval);
};
module.exports = { startDotLine, stop, startSpinner };
