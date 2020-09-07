"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(codigo, potenciamax, velocidad) {
        this.codigo = codigo;
        this.potenciamax = potenciamax;
        this.velocidad = velocidad;
    }
    Rocket.prototype.totalTurbinas = function () {
        return this.potenciamax.length;
    };
    Rocket.prototype.totalSpeed = function () {
        return this.velocidad.reduce(function (a, b) { return a + b; }, 0);
    };
    return Rocket;
}());
