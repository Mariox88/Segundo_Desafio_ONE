//Imports
import { agregarNuevaPalabra, iniciarJuego } from "./indexFunciones.js";
//Elementos
const botonIniciarJuego = document.querySelector('#iniciar-juego');
const botonAgregarNuevaPalabra = document.querySelector('#agregar-nueva-palabra');
//Eventos
botonIniciarJuego.addEventListener('click', iniciarJuego);
botonAgregarNuevaPalabra.addEventListener('click', agregarNuevaPalabra);