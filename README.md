# Loader
Easy loader for node.js console

<span style="color:#d73a49">Usage</span> : 

```
const Loader = require(path)

Loader(duration, iteration);
```
>Duration is the duration of Full loader in milliseconds.

>Iteration is the duration on each iteration in loader in milleconds.

<span style="color:#d73a49">Examples</span> :

```
const Loader = require(path)

Loader(10000, 1000);

// Return
Loading..........
```
```
const Loader = require(path)

Loader(10000, 2000);

// Return
Loading.....
```
