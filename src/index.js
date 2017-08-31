"use strict";

const fs = require("fs");
const platform = require("os").platform();

var modulePath = __dirname + "/platforms/" + platform;

if (fs.existsSync(modulePath + '.js')) {
    module.exports = require(modulePath);
} else {
    module.exports = {
        sleep: () => {},
        wake: () => {},
        supported: () => {
            return false;
        }
    };
}
