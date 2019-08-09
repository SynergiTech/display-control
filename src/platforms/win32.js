'use strict';
const ffi = require('ffi');
const os = require('os');
const HWND_BROADCAST = 0xffff;
const WM_SYSCOMMAND = 0x0112;
const SC_MONITORPOWER = 0xf170;
const POWER_OFF = 0x0002;
const POWER_ON = -0x0001;
const win32 = {};
const user32 = ffi.Library('user32', {
    SendMessageW: ['int', ['ulong', 'uint', 'long', 'long']]
});
win32.sleep = () => {
    user32.SendMessageW(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, POWER_OFF);
};
win32.wake = () => {
    user32.mouse_event(1, 40, 0, 0, 0);
    user32.SendMessageW(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, POWER_ON);
};
win32.supported = () => {
    return os.platform == 'win32';
};
module.exports = win32;