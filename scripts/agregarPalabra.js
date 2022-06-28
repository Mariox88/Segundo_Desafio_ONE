//Imports
import { onInput, cancelar, guardarPalabra, cerrarLista, verLista } from "../scripts/agregarPalabraFunciones.js";
//Elementos
const popup = document.querySelector('#popup');
const overlay = document.querySelector('#overlay');
const botonGuardar = document.querySelector('#guardar');
const botonCancelar = document.querySelector('#cancelar');
const botonVerLista = document.querySelector('#lista');
const botonCerrarLista = document.querySelector('#cerrar-popup');
const campoNuevaPalabra = document.querySelector('#campo-palabra');
//Eventos
campoNuevaPalabra.addEventListener('input', onInput);
botonGuardar.addEventListener('click', guardarPalabra);
botonVerLista.addEventListener('click', verLista);
botonCerrarLista.addEventListener('click', cerrarLista);
botonCancelar.addEventListener('click', cancelar);