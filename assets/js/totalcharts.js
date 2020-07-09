const totPop = document.getElementById('totPop').getContext('2d');

const popChart = new Chart(totPop, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'population in Millions',
            data: [1118.18, 1147.51, 1177.46, 1208.00, 1239.11, 1270.74, 1302.82],
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
    type: 'line',
    data: {
        labels: ['2013','2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'GDP in US$ Billions',
            data: [2459.40, 2543.27, 2335.43, 2190.48, 2216.61, 2335.68, 2424.53],
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