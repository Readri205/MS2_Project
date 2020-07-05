const ctx = document.getElementById('popChart').getContext('2d');

const popChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2019', '2018', '2017', '2016', '2015', '2014'],
        datasets: [{
            label: '# of Votes',
            data: [200.9, 195.9, 190.9, 185.9, 181.1, 176.4],
            backgroundColor: "rgba(8, 5, 63, 0.4)",
            borderColor: "rgba(8, 5, 63, 0.4)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const cty = document.getElementById('gdpChart').getContext('2d');

const gdpChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2019', '2018', '2017', '2016', '2015', '2014'],
        datasets: [{
            label: '# of Votes',
            data: [200.9, 195.9, 190.9, 185.9, 181.1, 176.4],
            backgroundColor: "rgba(8, 5, 63, 0.4)",
            borderColor: "rgba(8, 5, 63, 0.4)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});