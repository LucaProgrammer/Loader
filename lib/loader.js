let interval = 0;

const start = iteration => {
  process.stdout.write("Loading");

  interval = setInterval(() => {
    process.stdout.write(".");
  }, iteration);
};

const stop = () => {
  clearInterval(interval);
};

module.exports = {start, stop};
