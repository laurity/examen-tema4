import { Vehiculo} from './vehiculo.js';
import { AutomovilDeportivo } from './automovilDeportivo.js';

//Creamos el elemento div
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);
resultadoContainer.className = 'automovil';

export function mostrarResultado(mensaje) {
resultadoContainer.innerHTML+=`<p class="title">${mensaje}</p>`;
}

//Objetos Vehiculo
const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('---Vehiculo---');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

//Creamos LocalStorage

const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    anioFabricacion: vehiculo1.anioFabricacion,
    cilindrada: vehiculo1.cilindrada
}
localStorage.setItem('vehiculo', JSON.stringify(vehiculoObject));
console.log(localStorage.getItem('vehiculo'));

//Objeto AutomovilDeportivo
const deportivo1 = new AutomovilDeportivo('Ferrari', 'Spider', 'amarillo', 2020, '4000', '500cv');
mostrarResultado('<br><br><br>---Deportivo---');
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();
deportivo1.activarModoDeportivo();

//Creamos el objeto Object Deportivo
const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    anioFabricacion: deportivo1.anioFabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor
}
//Recorro el bucle para iterar en cada atributo del objeto
for (const key in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key)) {
     localStorage.setItem(key, JSON.stringify(deportivoObject[key]));
    }
    
}
//Eliminar uno a uno
localStorage.removeItem("color");
localStorage.removeItem("cilindrada");
//Eliminar todos
//localStorage.clear()