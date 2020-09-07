"use strict";
var rocketGroup = new RocketGroup();
function init() {
    var rocket1 = new Rocket("32WESSDS", [10, 30, 80], [0, 0, 0]);
    var rocket2 = new Rocket("LDSFJA32", [30, 40, 50, 50, 30, 10], [0, 0, 0, 0, 0, 0]);
    rocketGroup.addRocket(rocket1);
    rocketGroup.addRocket(rocket2);
}
function showRockets() {
    var view = document.getElementById('viewRockets');
    var rocketHTML = "";
    rocketGroup.getAllRockets().forEach(function (rocket) {
        rocketHTML += "<div class='col-6 bg-success text-center' id='" + rocket.codigo + "'>";
        rocketHTML += "<p>El cohete " + rocket.codigo + " tiene " + rocket.totalTurbinas() + " propulsores, con una potencia maxima de " + rocket.potenciamax + ".</p>";
        rocketHTML += "<br/>";
        rocketHTML += "<p>La velocidad actual es: <span class='velocidad'>" + rocket.velocidad + "</span> y el total <span class='suma'>" + rocket.totalSpeed() + "</span></p>";
        rocketHTML += "<input type='button' value='Acelerar' class='m-4 bg-success' onclick='acelerarRocket(\"" + rocket.codigo + "\")'>";
        rocketHTML += "<input type='button' value='Frenar' class='m-4 bg-success' onclick='frenarRocket(\"" + rocket.codigo + "\")'>";
        rocketHTML += "</div>";
    });
    view.innerHTML = rocketHTML;
}
function acelerarRocket(codigo) {
    var rocket = rocketGroup.getRocket(codigo);
    for (var i = 0; i < rocket.potenciamax.length; i++) {
        if (rocket.velocidad[i] <= rocket.potenciamax[i] - 10) {
            rocket.velocidad[i] += 10;
        }
    }
    refreshSpeed(rocket);
}
function frenarRocket(codigo) {
    var rocket = rocketGroup.getRocket(codigo);
    for (var i = 0; i < rocket.potenciamax.length; i++) {
        if (rocket.velocidad[i] - 10 < 0) {
            rocket.velocidad[i] = 0;
        }
        else {
            rocket.velocidad[i] -= 10;
        }
    }
    refreshSpeed(rocket);
}
function refreshSpeed(rocket) {
    var rocketToRefresh = document.getElementById(rocket.codigo);
    var rocketSpeed = rocketToRefresh.querySelector('.velocidad');
    rocketSpeed.innerHTML = rocket.velocidad.toString();
    var rocketSum = rocketToRefresh.querySelector('.suma');
    rocketSum.innerHTML = rocket.totalSpeed().toString();
}
