// Referencias a elementos del DOM
const totalWealthElement = document.getElementById("total-wealth");
const realEstateElement = document.getElementById("real-estate-total");
const cryptoElement = document.getElementById("crypto-total");
const otherAssetsElement = document.getElementById("other-assets-total");
const financialChartCanvas = document.getElementById("investment-chart");
const detailsChartCanvas = document.getElementById("details-chart");

let financialChart, detailsChart;

// Valores iniciales
let totalWealth = 0;
let realEstate = 0;
let crypto = 0;
let otherAssets = 0;

// Función para generar valores aleatorios de patrimonio
const generateRandomWealth = () => {
    totalWealth = Math.floor(Math.random() * 40000) + 10000;

    realEstate = Math.floor(totalWealth * Math.random());
    crypto = Math.floor((totalWealth - realEstate) * Math.random());
    otherAssets = totalWealth - realEstate - crypto;

    totalWealthElement.innerText = `$${totalWealth.toLocaleString()}`;
    updateCategoryDetails();
    updateChart();
};

// Actualizar los detalles de las categorías
const updateCategoryDetails = () => {
    realEstateElement.innerText = `$${realEstate.toLocaleString()}`;
    cryptoElement.innerText = `$${crypto.toLocaleString()}`;
    otherAssetsElement.innerText = `$${otherAssets.toLocaleString()}`;
};

// Configurar gráfica principal
const initializeChart = () => {
    const ctx = financialChartCanvas.getContext("2d");
    financialChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
            datasets: [
                {
                    label: "Inmuebles",
                    data: generateRandomData(4, realEstate),
                    borderColor: "#3498db",
                    backgroundColor: "rgba(52, 152, 219, 0.2)",
                    fill: true,
                    tension: 0.4,
                },
                {
                    label: "Criptomonedas",
                    data: generateRandomData(4, crypto),
                    borderColor: "#f1c40f",
                    backgroundColor: "rgba(241, 196, 15, 0.2)",
                    fill: true,
                    tension: 0.4,
                },
                {
                    label: "Otros",
                    data: generateRandomData(4, otherAssets),
                    borderColor: "#2ecc71",
                    backgroundColor: "rgba(46, 204, 113, 0.2)",
                    fill: true,
                    tension: 0.4,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

// Actualizar gráfica principal
const updateChart = () => {
    financialChart.data.datasets[0].data = generateRandomData(4, realEstate);
    financialChart.data.datasets[1].data = generateRandomData(4, crypto);
    financialChart.data.datasets[2].data = generateRandomData(4, otherAssets);
    financialChart.update();
};

// Generar datos aleatorios para las gráficas
const generateRandomData = (count, maxValue) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * maxValue));
};

// Mostrar gráfica detallada al hacer clic en "Patrimonio Total"
const showDetails = () => {
    navigateTo("details-screen");

    // Configurar gráfica de detalles si no está inicializada
    if (!detailsChart) {
        const ctx = detailsChartCanvas.getContext("2d");
        detailsChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Enero", "Febrero", "Marzo", "Abril"],
                datasets: [
                    {
                        label: "Inmuebles",
                        data: generateRandomData(4, realEstate),
                        borderColor: "#3498db",
                        backgroundColor: "rgba(52, 152, 219, 0.2)",
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "Criptomonedas",
                        data: generateRandomData(4, crypto),
                        borderColor: "#f1c40f",
                        backgroundColor: "rgba(241, 196, 15, 0.2)",
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "Otros",
                        data: generateRandomData(4, otherAssets),
                        borderColor: "#2ecc71",
                        backgroundColor: "rgba(46, 204, 113, 0.2)",
                        fill: true,
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
};

// Navegación entre pantallas
const navigateTo = (target) => {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
        screen.classList.add("hidden");
    });
    document.getElementById(target).classList.add("active");
    document.getElementById(target).classList.remove("hidden");
};

// Cerrar detalles
const closeDetails = () => {
    navigateTo("main-screen");
};

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
    generateRandomWealth();
    initializeChart();
});
