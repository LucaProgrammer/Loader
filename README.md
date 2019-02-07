# Loader
Easy loader for node.js console

Usage : 

```JavaScript
const Loader = require("loader-in-console")

Loader.start(iteration);

Loader.stop();
```
>Iteration is time to wait for new iteration in milliseconds.

Examples :

```JavaScript
const Loader = require("loader-in-console)

Loader.start(1000);

// Something (time 10 second)

Loader.stop();

// Return
// Loading..........
```

