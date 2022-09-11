class Parlante{

    public encendido: boolean;
    public conectado: boolean;
    public volumen: number;
    public potencia: number;
    public marca: string;


    constructor(paramPrendido:boolean, paramVolumen:number, paramConectado:boolean){
        this.encendido = paramPrendido;
        this.volumen = paramVolumen;
        this.conectado = paramConectado;
    }

    encendidoApagado ():void{
        if(this.encendido ===tue){
            this.encendido = false;
        }else{
            this.encendido = true;
        }
    }

    obtenerVolumen():number{
        return this.volumen;
    }
    subirVolumen():void{
        this.volumen = this.volumen++;
    }

}

let nuevaConexion = new Parlante(true,45,true);
let desconectado = new Parlante(false,17,false);

console.log("Parlante bluetooth esta",paramConectado,"activado");