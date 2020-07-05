const totPop = document.getElementById('totPop').getContext('2d');

const popChart = new Chart(totPop, {
    type: 'bar',
    data: {
        labels: ['2019', '2018', '2017', '2016', '2015', '2014'],
        datasets: [{
            label: 'population in Millions',
            data: [176.4, 181.1, 185.9, 190.9, 195.9, 200.9],
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
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

const totGdp = document.getElementById('totGdp').getContext('2d');

const gdpChart = new Chart(totGdp, {
    type: 'bar',
    data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'GDP in US$ Billions',
            data: [448.1, 398.2, 375.7, 404.6, 494.6, 568.5],
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
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