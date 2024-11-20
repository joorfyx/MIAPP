// Función para cambiar entre pantallas
const switchScreen = (screenId) => {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    // Mostrar la pantalla seleccionada
    document.getElementById(screenId).classList.add('active');

    // Actualizar el estado de los botones de la barra de navegación
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.nav-item[onclick="switchScreen('${screenId}')"]`).classList.add('active');
};
