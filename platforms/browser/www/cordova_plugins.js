cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-spinner/www/spinner-plugin.js",
        "id": "cordova-plugin-spinner.SpinnerPlugin",
        "pluginId": "cordova-plugin-spinner",
        "clobbers": [
            "SpinnerPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-call-number/www/CallNumber.js",
        "id": "cordova-plugin-call-number.CallNumber",
        "pluginId": "cordova-plugin-call-number",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "id": "cordova-plugin-flashlight.Flashlight",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "file": "plugins/cordova-plugin-headsetdetection/www/HeadsetDetection.js",
        "id": "cordova-plugin-headsetdetection.HeadsetDetection",
        "pluginId": "cordova-plugin-headsetdetection",
        "clobbers": [
            "window.HeadsetDetection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-spinner": "1.1.0",
    "cordova-plugin-x-toast": "2.7.0",
    "cordova-plugin-call-number": "1.0.1",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-headsetdetection": "3.0.0",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-statusbar": "2.4.2"
}
// BOTTOM OF METADATA
});