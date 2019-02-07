const Loader = require("./lib/loader");

Loader.start(2000, "Loading");

setTimeout(()=>{Loader.stop();}, 11000);

