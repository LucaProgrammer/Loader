const Loader = require("./lib/loader");

Loader.start(2000);

setTimeout(()=>{Loader.stop();}, 11000);

