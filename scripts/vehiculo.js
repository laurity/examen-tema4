import {mostrarResultado} from './main.js'

export class Vehiculo {
    #marca;
    #modelo;
    #color;
    #anioFabricacion;
    #cilindrada;

    constructor(marca, modelo, color, anioFabricacion,cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#anioFabricacion = anioFabricacion;
        this.cilindrada = cilindrada;
    }

    mostrarDatos(){
        const datos = [
            `
            <p>La marca del vehiculo es: ${this.#marca}</p>
            <p>El modelo del vehiculo es: ${this.#modelo}</p>
            <p>El color del vehiculo es: ${this.#color}</p>
            <p>EL año de fabricacion es: ${this.#anioFabricacion}</p>
            <p>La cilindrada del vehiculo es: ${this.#cilindrada}</p>
            `
     
        ]
    }

    acelerar(velocidad){
        let mesaje = `<p>El vehiculo ha acelerado hasta ${velocidad}</p>`;
    }
    arrancar(){
        let mensaje= `<p>El vehiculo ha acelerado</p>`;
    }
    frenar(){
        let mensaje = `<p>EL vehiculo ha frenado</p>`;
    }

    get marca() {
        return this.#marca;
    }
    
    set marca(value) {
        this.#marca = value;
    }

    get modelo() {
        return this.#modelo;
    }
    
    set modelo(value) {
        this.#modelo = value;
    }

    get color() {
        return this.#color;
    }
    
    set color(value) {
        this.#color = value;
    }

    get anioFabricacion() {
        return this.#anioFabricacion;
    }
    
    set anioFabricacion(value) {
        this.#anioFabricacion = value;
    }

    get cilindrada() {
        return this.#cilindrada;
    }
    
    set cilindrada(value) {
        this.#cilindrada = value;
    }

}