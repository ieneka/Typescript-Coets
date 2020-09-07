class Rocket {

    public codigo:string;
    public potenciamax:number[];
    public velocidad:number[];

    constructor(codigo:string, potenciamax:number[] ,velocidad:number[])
    {
        this.codigo = codigo;
        this.potenciamax = potenciamax;
        this.velocidad = velocidad;
    }
    totalTurbinas():number
    {
        return this.potenciamax.length;
    }

    totalSpeed():number
    {
        return this.velocidad.reduce((a, b) => a + b, 0);
    }
    
}
