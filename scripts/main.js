import { Vehiculo} from './vehiculo.js';
import { AutomovilDeportivo } from './automovilDeportivo.js';

const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje) {
resultadoContainer.innerHTML+=`<p>${mensaje}</p>`;
}

//Objetos Vehiculo
const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('Vehiculo');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

//Creamos LocalStorage
localStorage.setItem('vehiculo', JSON.stringify(vehiculo1));
console.log(localStorage.getItem(vehiculo1));

//Objeto AutomovilDeportivo
const deportivo1 = new AutomovilDeportivo('Ferrari', 'Spider', 'amarillo', 2020, '4000', '500cv');
mostrarResultado('Deportivo');
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();
