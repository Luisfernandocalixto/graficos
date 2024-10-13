const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        font : {
            size: 10
        },
        datasets: [
            {
                label: 'NÚMERO DE CICLONES:',
                data: [7, 28, 19, 42, 99, 69, 6],
                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    '#6D6027',
                    '#6D6027',
                    '#6D6027',
                    '#6D6027',
                    '#6D6027',
                    '#6D6027',
                    '#6D6027',
                ],
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const ctxSec = document.getElementById('myChartSec').getContext('2d');

const myChartSec = new Chart(ctxSec, {
    type: 'bar',
    data: {
        labels: [
            'Baja California Sur',
            'Veracruz',
            'Sinaloa',
            'Quintana Roo',
            'Tamaulipas',
            'Sonora',
            'Oaxaca',
            'Michoacán',
            'Guerrero',
            'Jalisco',
            'Colima',
            'Baja California',
            'Nayarit',
            'Chiapas',
            'Campeche',
            'Yucatán',
            'Tabasco',
        ],
        datasets: [{
            label: 'Número de ciclones',
            data: [46, 36, 33, 33, 24, 18, 16, 13, 11, 10, 9, 4, 4, 4, 2, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',  // Color for the first bar
                'rgba(54, 162, 235, 0.2)',  // Color for the second bar
                'rgba(75, 192, 192, 0.2)',   // Color for the third bar
                'rgba(189, 195, 199, 0.2)',
                '#ee9ca7',
                '#2193b0',
                '#f7797d',
                '#0f2027',
                '#12c2e9',
                '#b92b27',
                '#4286f4',
                '#6DD5FA',
                '#FF0099',
                '#3b8d99',
                '#8E2DE2',
                '#99f2c8',
                '#f953c6',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(189, 195, 199, 1))',
                '#ee9ca7',
                '#2193b0',
                '#f7797d',
                '#0f2027',
                '#12c2e9',
                '#b92b27',
                '#4286f4',
                '#6DD5FA',
                '#FF0099',
                '#3b8d99',
                '#8E2DE2',
                '#99f2c8',
                '#f953c6',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
