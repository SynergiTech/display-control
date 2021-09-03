# display-control

A node module that supports sleeping and waking the display. Supports Windows, Mac and Linux.

## Installation
```
$ npm install display-control
```

## How to use
```js
const displaycontrol = require("display-control");

displaycontrol.sleep();
setTimeout(() => {
  displaycontrol.wake();
}, 100);
```
