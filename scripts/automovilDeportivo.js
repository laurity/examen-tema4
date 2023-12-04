import {Vehiculo} from './vehiculo.js';
import {mostrarResultado} from './main.js';

//Heredamos de la clase vehiculo la clase hija
export class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor
    constructor(modelo,marca,color, anioFabricacion, cilindrada, potenciaMotor){
        super(modelo,marca,color,anioFabricacion,cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }
    //Funcion propia de la clase hija
    activarModoDeportivo(){
        let mensaje = `<p>El modo deportivo ha sido activado</p>`;
        mostrarResultado(mensaje);
    }

    get potenciaMotor() {
        return this.#potenciaMotor;
    }
    
    set potenciaMotor(value) {
        this.#potenciaMotor = value;
    }


}