"use strict";
var RocketGroup = /** @class */ (function () {
    function RocketGroup() {
        this.rockets = new Array();
    }
    RocketGroup.prototype.getAllRockets = function () {
        return this.rockets;
    };
    RocketGroup.prototype.addRocket = function (rocket) {
        this.rockets.push(rocket);
    };
    RocketGroup.prototype.getRocket = function (codigo) {
        var result = {};
        this.rockets.forEach(function (rocket) {
            if (rocket.codigo == codigo) {
                result = rocket;
            }
        });
        return result;
    };
    return RocketGroup;
}());
