import {Vehiculo} from './vehiculo.js';

export class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor
    constructor(modelo,marca,color, anioFabricacion, cilindrada, potenciaMotor){
        super(modelo,marca,color,anioFabricacion,cilindrada);
        this.#potenciaMotor;
    }
}