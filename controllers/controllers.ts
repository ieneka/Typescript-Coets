let rocketGroup: RocketGroup = new RocketGroup();

function init(){
    let rocket1 = new Rocket("32WESSDS", [10,30,80], [0,0,0]);
    let rocket2 = new Rocket("LDSFJA32", [30,40,50,50,30,10], [0,0,0,0,0,0]);
    

    rocketGroup.addRocket(rocket1);
    rocketGroup.addRocket(rocket2);
}

function showRockets():void{
    const view: HTMLElement = document.getElementById('viewRockets') as HTMLElement;
    let rocketHTML = "";

    rocketGroup.getAllRockets().forEach(rocket => {

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

function acelerarRocket(codigo:string){
    let rocket = rocketGroup.getRocket(codigo);

    for (let i = 0; i < rocket.potenciamax.length; i++){
        if (rocket.velocidad[i] <= rocket.potenciamax[i] - 10){
            rocket.velocidad[i] += 10;
        }
    }

    refreshSpeed(rocket);
}

function frenarRocket(codigo:string){
    let rocket = rocketGroup.getRocket(codigo);

    for (let i = 0; i < rocket.potenciamax.length; i++)
    {
        if (rocket.velocidad[i] - 10 < 0) {
            rocket.velocidad[i] = 0;
        } else {
            rocket.velocidad[i] -= 10;
        }
    }

    refreshSpeed(rocket);
} 


function refreshSpeed(rocket:Rocket)
{
    const rocketToRefresh: HTMLElement = document.getElementById(rocket.codigo) as HTMLElement;

    const rocketSpeed: HTMLInputElement = rocketToRefresh.querySelector('.velocidad') as HTMLInputElement;
    rocketSpeed.innerHTML = rocket.velocidad.toString();

    const rocketSum: HTMLInputElement = rocketToRefresh.querySelector('.suma') as HTMLInputElement;
    rocketSum.innerHTML = rocket.totalSpeed().toString();
}
