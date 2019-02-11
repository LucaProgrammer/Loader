# Loader
Easy loader for node.js console

Usage : 

```JavaScript
const Loader = require("loader-in-console")

Loader.startNameLoader(...params);

Loader.stop();
```
>Iteration is time to wait for new iteration in milliseconds.

Examples :

```JavaScript
//LOader with line of dots
const Loader = require("loader-in-console")

Loader.startDotsLine(1000, "Loading");
// Something (time 10 second)

Loader.stop();

// Return
// Loading..........
```

DOCS:
```JavaScript
Loader.startDotsLine(time, text);
//paramas: Time to wait between each point, Text before points
//return: text...........
Loader.startSpinner(time);
//params: Time to wait between each step
//return: spinner(/)
Aphorism.start(time);
//params: Time to wait between each step
//return: one aforism after each time
```