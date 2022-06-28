//Elementos
const listaDePalabras = JSON.parse(localStorage.getItem('Lista'))||["ALURA", "JAVASCRIPT", "CSS", "HTML", "FRONTEND", "CHALLENGE", "AHORCADO"];
//Funciones
export const onInput = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-ZñÑ]/g, '');
};
export const guardarPalabra = () => {
    if(campoNuevaPalabra.value == '')
        alert('El campo no puede estar vacío');
    else {
        actualizarLista(campoNuevaPalabra.value.toUpperCase());
        campoNuevaPalabra.value = '';                   
    }
};
export const verLista = () => {
    crearLista(listaDePalabras);
    popup.classList.add('active');
    overlay.classList.add('active');
};
export const cerrarLista = () => {
    const palabras = document.querySelector('#palabras')
    palabras.innerHTML = '';
    popup.classList.remove('active');
    overlay.classList.remove('active');
};
export const cancelar = () => {
    window.location.href='./index.html';
};
function  actualizarLista(palabra) {
    if(!listaDePalabras.includes(palabra)) {
        listaDePalabras.push(palabra);
        localStorage.setItem('Palabra', JSON.stringify(palabra));
        localStorage.setItem('Lista', JSON.stringify(listaDePalabras));
        alert('Palabra guardada exitosamente');
        window.location.href='../juegoAhorcado.html';               
    }
    else {
        alert('Palabra ya registrada intenta de nuevo');        
    }
};
function crearLista(lista) {
    const palabras = document.querySelector('#palabras')
    lista.forEach(palabra => {
        const span = document.createElement('span')
        span.innerText = palabra;
        palabras.appendChild(span)
    });
};