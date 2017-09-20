"use strict";

const ffi = require("ffi");
const ref = require('ref');
const struct = require('ref-struct');
const os = require("os");

const HWND_BROADCAST = 0xffff;
const WM_SYSCOMMAND = 0x0112;
const SC_MONITORPOWER = 0xf170;
const POWER_OFF = 0x0002;
const POWER_ON = -0x0001;

const win32 = {};

win32.sleep = () => {
    var user32 = ffi.Library("user32", {
        SendMessageW: ["int", ["ulong", "uint", "long", "long"]]
    });
    user32.SendMessageW(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, POWER_OFF);
}

win32.wake = () => {
    var sendMessageW = ffi.Library("user32", {
        SendMessageW: ["int", ["ulong", "uint", "long", "long"]]
    });
    var MouseInput = struct({
        'type': 'int',
        'dx': 'long',
        'dy': 'long',
        'mouseData': 'int',
        'dwFlags': 'int',
        'time': 'int',
        'dwExtraInfo': 'int'
    })
    var MouseInputPtr = ref.refType(MouseInput);
    var mouseInput = new MouseInput();
    mouseInput.type = 0;
    mouseInput.dx = 0;
    mouseInput.dy = 0;
    mouseInput.dwFlags = 0x0002;
    mouseInput.mouseData = 0;
    mouseInput.time = 0;
    mouseInput.dwExtraInfo = 0;

    var sendInput = ffi.Library('user32', {
        'SendInput': ['int', ['uint', MouseInputPtr, 'int']]
    });

    sendInput.SendInput(1, mouseInput.ref(), (os.arch() == 'x64' ? 40 : 28));
    sendMessageW.SendMessageW(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, POWER_ON);
}

win32.supported = () => {
    return os.platform == 'win32';
}

module.exports = win32;
