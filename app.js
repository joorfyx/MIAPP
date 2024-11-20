// Cambiar entre pantallas
const switchScreen = (screenId) => {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
};

// Funciones de ejemplo
const editProfile = () => alert("Editar perfil próximamente.");
const joinGroup = (groupName) => alert(`Unido a: ${groupName}`);
