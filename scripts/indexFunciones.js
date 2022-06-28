//Funciones
export const iniciarJuego = () => {
    localStorage.setItem('Palabra', JSON.stringify(''));
    window.location.href='./juegoAhorcado.html';    
};
 export const agregarNuevaPalabra = () => {
    window.location.href='./agregarPalabra.html';    
};