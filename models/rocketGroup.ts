class RocketGroup {

    private rockets:Rocket[] = new Array();

    getAllRockets():Array<Rocket> {
        return this.rockets;
    }
    
    addRocket(rocket:Rocket):void {
        this.rockets.push(rocket);
    }

    getRocket(codigo:string):Rocket {

        let result:Rocket = <Rocket>{};
        
        this.rockets.forEach(rocket => {
            if (rocket.codigo == codigo) {
                result = rocket;
            }
        });

        return result;
    }

}
