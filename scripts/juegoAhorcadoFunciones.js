//Elementos
var listaErrores = '';
var cuentaErrores = 10;
const listaDePalabras = JSON.parse(localStorage.getItem('Lista'))||["ALURA", "JAVASCRIPT", "CSS", "HTML", "FRONTEND", "CHALLENGE", "AHORCADO"];
const palabraSecreta = sortearPalabra();
//Funciones
export const jugarAhorcado = () => {
    dibujarLineas(palabraSecreta);
    document.addEventListener('keydown', anotarLetras);
};
export const cerrarMensaje = () => {    
    const verPopup = document.querySelector('#popup');
    overlay.classList.remove('active');
    verPopup.classList.remove('active');
};
export const iniciarJuego = () => {
    localStorage.setItem('Palabra', JSON.stringify(''));
    window.location.href='./juegoAhorcado.html';    
};
export const cancelar = () => {
    window.location.href='./index.html';
};
function sortearPalabra() {
    var palabraSeleccionada = JSON.parse(localStorage.getItem('Palabra'));
    if(palabraSeleccionada == '') {
        const lista = listaDePalabras;
        palabraSeleccionada = lista[Math.floor(Math.random()*lista.length)];        
    }
    return palabraSeleccionada;
}
function dibujarLineas() {
    const letrasCorrectas = document.querySelector('#letras-correctas');
    for(let i = 0; i < palabraSecreta.length; i++) {
        const input = document.createElement('input');
        input.classList.add('letras');
        letrasCorrectas.appendChild(input);
    }
}
function anotarLetras(event) {
    const espacios = document.querySelectorAll('.letras');
    const errores = document.querySelector('#errores');
    const resticcion = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let letraValida= '';
    let letra = event.key.toUpperCase();
    if(letra == '+' || letra == '*')
        letra = null;
    letraValida = new RegExp(letra, 'i');
    if(letraValida.test(resticcion))
        for(let i = 0; i < palabraSecreta.length  && cuentaErrores != 0; i++) {
            if(palabraSecreta[i] == letra) {
                espacios[i].value = letra;
                comprobarVictoria();
            }
            else {
                if(!listaErrores.includes(letra) && !palabraSecreta.includes(letra)){
                    listaErrores += letra;
                    cuentaErrores--;
                    dibujarPieza(cuentaErrores);                    
                }
                errores.textContent = `letras usadas: ${listaErrores}`;
            }
        }    
}
function comprobarVictoria() {
    const espacios = document.querySelectorAll('.letras');
    let letrasCompletas = true;
    for(let i = 0; i < espacios.length; i++) {
        if(espacios[i].value == '')
            letrasCompletas = false;
    }
    if(letrasCompletas) 
        mostrarVictoria();
};
function mostrarVictoria() {
    const verPopup = document.querySelector('#popup');
    const overlay = document.querySelector('#overlay');
    const mensaje =  document.querySelector("#mensaje");    
    mensaje.textContent = "Felicidades has ganado!!!";
    overlay.classList.add('active');
    verPopup.classList.add('active');
}
function dibujarPieza(errores) {
    const tablero = document.querySelector('#tablero').getContext('2d');
    tablero.lineWidth = 6;
    tablero.lineCap = 'round';
    tablero.lineJoin = 'round';
    tablero.strokeStyle = "#FFF"
    tablero.beginPath();
    if(errores == 9) {//Base
        tablero.moveTo(225, 375);
        tablero.lineTo(725, 375);
    }
    if(errores == 8) {//Poste
        tablero.moveTo(350, 375);
        tablero.lineTo(350, 75);
    }
    if(errores == 7) {//Travesaño
        tablero.moveTo(475, 75);
        tablero.lineTo(350, 75);
    }
    if(errores == 6) {//Soporte
        tablero.moveTo(475, 75);
        tablero.lineTo(475, 100);        
    }    
    if(errores == 5) {//Cabeza
        tablero.arc(475, 125, 25, 0, 2 * Math.PI);                
    }
    if(errores == 4) {//Torso
        tablero.moveTo(475, 150);
        tablero.lineTo(475, 250);        
    }
    if(errores == 3) {//Brazo
        tablero.moveTo(475, 175);
        tablero.lineTo(500, 225);        
    }
    if(errores == 2) {//Brazo
        tablero.moveTo(475, 175);
        tablero.lineTo(450, 225);        
    }
    if(errores == 1) {//Pierna
        tablero.moveTo(475, 250);
        tablero.lineTo(450, 300);        
    }
    if(errores == 0) {//Pierna
        tablero.moveTo(475, 250);
        tablero.lineTo(500, 300);
        mostrarDerrota();        
    }
    tablero.stroke();
    tablero.closePath();
}
function mostrarDerrota() {
    const verPopup = document.querySelector('#popup');
    const overlay = document.querySelector('#overlay');
    const mensaje =  document.querySelector("#mensaje");    
    mensaje.textContent = "Has perdido!!!";
    overlay.classList.add('active');
    verPopup.classList.add('active');
}