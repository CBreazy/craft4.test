import Chart from 'chart.js/auto';

export default function weightChart(data) {
    new Chart(
        document.getElementById('weightChart'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.date),
                datasets: [
                    {
                        label: 'Weight by Date',
                        data: data.map(row => row.weight)
                    }
                ]
            },
            options: {
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                        min: 190,
                        max: 225
                    }
                }
            }
        }
    );
};