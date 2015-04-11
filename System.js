var System = (function () {
    'use strict';
    
    var exports = {},
        api = (function () {
            var exports = {};
            exports.startApp = function (app) { };
            exports.closeApp = function (app) { };
            exports.enableApp = function (app) { };
            exports.disableApp = function (app) { };
            return exports;
        }()),
        application = (function (element) {
            var exports = {};
            exports.callApp = function (app) { };
            exports.onCallback = function (func) {
                func();
            };
            exports.onStart = function (func) {
                func();
            };
            exports.onStop = function (func) {
                func();
            };
            exports.stop = function () {};
            exports.element = element;
            
            return exports;
        }());
    
    exports.API = api;
    exports.Application = application;
    
    return exports;
}());