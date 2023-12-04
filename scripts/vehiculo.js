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
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        const datos = 
            `
            <p>La marca del vehiculo es: ${this.#marca}</p>
            <br>
            <p>El modelo del vehiculo es: ${this.#modelo}</p>
            <br>
            <p>El color del vehiculo es: ${this.#color}</p>
            <br>
            <p>EL año de fabricacion es: ${this.#anioFabricacion}</p>
            br>
            <p>La cilindrada del vehiculo es: ${this.#cilindrada}</p>
            `;
            
        }
        mostrarResultado(mensaje) {
            let mensaje = `<p>${datos}</p>`;}

    acelerar(velocidad){
        let mensaje = `<p>El vehiculo ha acelerado hasta ${velocidad}</p>`;
        mostrarResultado(mensaje)
    }
    arrancar(){
        let mensaje= `<p>El vehiculo ha acelerado</p>`;
        mostrarResultado(mensaje)
    }
    frenar(){
        let mensaje = `<p>EL vehiculo ha frenado</p>`;
        mostrarResultado(mensaje)
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