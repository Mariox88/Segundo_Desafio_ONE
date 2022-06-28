//Imports
import { jugarAhorcado, cerrarMensaje, cancelar, iniciarJuego } from './juegoAhorcadoFunciones.js';
//Elementos
const botonNuevoJuego = document.querySelector('#nuevo');
const botonRendirse = document.querySelector('#rendirse');
const botonCerrarPopup = document.querySelector('#cerrar-popup');
//Eventos
jugarAhorcado();
botonRendirse.addEventListener('click', cancelar);
botonCerrarPopup.addEventListener('click', cerrarMensaje);
botonNuevoJuego.addEventListener('click', iniciarJuego);
