// Generar patrimonio aleatorio
const generateRandomWealth = () => {
    const wealth = Math.floor(Math.random() * 100000) + 1000;
    document.getElementById('total-wealth').innerText = `$${wealth.toLocaleString()}`;
};

// Cambiar entre porcentaje y dinero ganado
const toggleDisplay = (element) => {
    const isPercentage = element.innerText.includes('%');
    const value = parseInt(element.innerText);
    const randomMoney = Math.floor(Math.random() * 5000) + 500;

    if (isPercentage) {
        element.innerText = value > 0 ? `+$${randomMoney}` : `-$${randomMoney}`;
    } else {
        element.innerText = value > 0 ? `+${value}%` : `${value}%`;
    }
};

// Configurar la gráfica
const ctx = document.getElementById('investment-chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
            {
                label: 'Inmuebles',
                data: [200, 400, 300, 500],
                borderColor: '#3498db',
                tension: 0.4,
            },
            {
                label: 'Criptomonedas',
                data: [100, 200, 150, 300],
                borderColor: '#e74c3c',
                tension: 0.4,
            },
            {
                label: 'Otros',
                data: [50, 100, 200, 150],
                borderColor: '#2ecc71',
                tension: 0.4,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
