const displaycontrol = require(__dirname + "/index.js");

console.log("Supported: " + displaycontrol.supported());

console.log('Turning off');
displaycontrol.sleep();

setTimeout(function () {
    console.log('Turning on');
    displaycontrol.wake();
}, 10000)
