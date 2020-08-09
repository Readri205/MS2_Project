//------------------Total Population Graph---------------------------->
const haxis = [];
const vaxis = [];
const verts = [];
const herts = [];

getCsvPop();
async function getCsvPop() {

const response = await fetch('assets/csv/pop.csv');
const csv = await response.text();

const verts = csv.substr(0, 361);
const herts = csv.substr(362, 611);
const vaxis = verts.split(',').map(x => parseFloat(x, 10));
const haxis = herts.split(',');

//console.log(haxis, vaxis);

const totPop = document.getElementById('totPop').getContext('2d');

//const popCharts = 
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#000000';
new Chart(totPop, {
    type: 'line',
    data: {
        labels: haxis,
        datasets: [{
            label: '(Mns) 1970 to 2019',
            data: vaxis,
            fill: true,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 7,
                }
            }]
        },
        title: {
        display: true,
        text: 'Africa Population'
      }
    }
});
}

//--------------------GDP Total Graph--------------------------------------------->
const haxs = [];
const vaxs = [];
const virts = [];
const hirts = [];

getCsvGdp();
async function getCsvGdp() {

const response = await fetch('assets/csv/gdp.csv');

const csvgdp = await response.text();

const virts = csvgdp.substr(0, 362);
const hirts = csvgdp.substr(363, 612);
const vaxs = virts.split(',').map(x => parseFloat(x, 10));
const haxs = hirts.split(',');

//console.log(haxs, vaxs);

const totGdp = document.getElementById('totGdp').getContext('2d');

//const gdpChart = 
new Chart(totGdp, {
    type: 'line',
    data: {
        labels: haxs,
        datasets: [{
            label: 'US$ (Bns) 1970 to 2019',
            data: vaxs,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            fill: true,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    maxTicksLimit: 6,
                    beginAtZero: true,
                    callback:function(value) {return "$" + value}
                }
            }]
        },
        title: {
        display: true,
        text: 'Africa GDP'
      }
    }
});
}
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#000000';
new Chart(document.getElementById("landPie"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Latin Am./Caribbean", "South Asia", "North America", "Middle East", "Europe/Central Asia", "East Asia/Pacific"],
      datasets: [{
        label: " Land Size (Mns) Sq. Kms",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f","#f0e68c"],
        data: [29.510, 20.039, 4.772, 18.241, 5.462, 27.429, 24.397]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Land Size (Mns) Sq. Kms'
      },
      legend: {
          position: "right"
      }
    }
});

new Chart(document.getElementById("popPie"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Latin Am./Caribbean", "South Asia", "North America", "Middle East", "Europe/Central Asia", "East Asia/Pacific"],
      datasets: [{
        label: " Population in Bns",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f","#f0e68c"],
        data: [1.306, 0.646, 1.836, 0.366, 0.257, 0.921, 2.340]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'World Population (Bns) in 2019'
      },
      legend: {
          position: "right"
      }
    }
});

new Chart(document.getElementById("gdpPie"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Latin Am./Caribbean", "South Asia", "North America", "Middle East", "Europe/Central Asia", "East Asia/Pacific"],
      datasets: [{
        label: " GDP in Bns",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f","#f0e68c"],
        data: [24.41, 57.19, 35.98, 23.171, 3.015, 22.749, 26.980]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'World GDP (Bns) in 2019'
      },
      legend: {
          position: "right"
      }
    }
});