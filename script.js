let currentFontSize = 16;
let noButtonClicks = 0;
const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');

function handleNoButtonClick() {
    // 1. Aumentar el tamaño del botón 'Sí'
    currentFontSize += 5;
    noButtonClicks++;
    siButton.style.fontSize = `${currentFontSize}px`;
    siButton.style.padding = `${10 + noButtonClicks * 2}px ${20 + noButtonClicks * 4}px`;

    // 2. Mover el botón 'No' a una nueva posición cerca del botón 'Sí'
    const siRect = siButton.getBoundingClientRect();
    const noRect = noButton.getBoundingClientRect();

    // Rango de movimiento limitado cerca del botón 'Sí'
    const maxOffset = 50 + noButtonClicks * 4; // Aumenta el rango de movimiento con cada clic
    const newX = (Math.random() - 0.5) * maxOffset * 2;
    const newY = (Math.random() - 0.5) * maxOffset * 2;

    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    noButton.addEventListener('click', handleNoButtonClick);
});