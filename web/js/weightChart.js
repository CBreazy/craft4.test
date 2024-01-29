import Chart from 'chart.js/auto';

export default function weightChart(data) {
    new Chart(
        document.getElementById('weightChart'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.date),
                datasets: [
                    {
                        label: 'Weight by Date',
                        data: data.map(row => row.weight)
                    }
                ]
            }
        }
    );
};