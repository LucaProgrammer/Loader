const Loader = require("./lib/loader");

Loader.print(2000);

setTimeout(()=>{Loader.stopPrint();}, 11000);

