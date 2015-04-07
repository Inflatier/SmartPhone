var System = (function () {
    'use strict';
    
    var exports = {},
        api = (function () {
            var exports = {};
            exports.startApp = function () { };
            exports.closeApp = function () { };
            exports.enableApp = function () { };
            exports.disableApp = function () { };
            return exports;
        }()),
        application = function (element) {
            this.callApp = function () { };
            this.onCallback = function () { };
            
            this.element = element;
            
            /*
            this.onTouchStart = function () { };
            this.onTouchMove = function () { };
            this.onTouchEnd = function () { };
            this.onTouch = function () { };
            */
        };
    
    exports.api = api;
    exports.Application = application;
    
    return exports;
}());