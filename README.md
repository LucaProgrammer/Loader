# Loader
Easy loader for node.js console

Usage : 

```JavaScript
const Loader = require(path)

Loader(duration, iteration);
```
>Duration is the duration of Full loader in milliseconds.

>Iteration is the duration on each iteration in loader in milliseconds.

Examples :

```JavaScript
const Loader = require(path)

Loader(10000, 1000);

// Return
Loading..........
```
```JavaScript
const Loader = require(path)

Loader(10000, 2000);

// Return
Loading.....
```
