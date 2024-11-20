// Elementos del DOM
const content = document.getElementById("content");

// Función para cargar contenido dinámico
function loadContent(section) {
    switch (section) {
        case "ia":
            content.innerHTML = `
                <h1>Chatbot IA</h1>
                <p>Interactúa con un chatbot básico para resolver tus dudas financieras.</p>
            `;
            break;
        case "dinero":
            content.innerHTML = `
                <h1>Sección de Dinero</h1>
                <p>Pronto podrás gestionar tus operaciones financieras aquí.</p>
            `;
            break;
        case "principal":
            content.innerHTML = `
                <h1>Pantalla Principal</h1>
                <p>Revisa tus estadísticas y gráficos de inversión.</p>
            `;
            break;
        case "telegram":
            content.innerHTML = `
                <h1>Pantalla de Telegram</h1>
                <p>Únete a grupos de inversión y consulta proyectos colaborativos.</p>
            `;
            break;
        case "perfil":
            content.innerHTML = `
                <h1>Tu Perfil</h1>
                <p>Gestiona tu información personal y preferencias.</p>
            `;
            break;
        default:
            content.innerHTML = `
                <h1>Bienvenido a MIAPP</h1>
                <p>Selecciona una sección desde la barra de navegación.</p>
            `;
    }
}

// Event Listeners para la navegación
document.getElementById("ia-btn").addEventListener("click", () => loadContent("ia"));
document.getElementById("dinero-btn").addEventListener("click", () => loadContent("dinero"));
document.getElementById("principal-btn").addEventListener("click", () => loadContent("principal"));
document.getElementById("telegram-btn").addEventListener("click", () => loadContent("telegram"));
document.getElementById("perfil-btn").addEventListener("click", () => loadContent("perfil"));

// Cargar sección inicial
loadContent();
