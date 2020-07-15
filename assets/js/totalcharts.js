//------------------Total Population Graph---------------------------->
const haxis = [];
const vaxis = [];
const verts = [];
const herts = [];
const zaxis = [];
const zerts = [];

getCsvPop();
async function getCsvPop() {

const response = await fetch('assets/csv/POP.csv');
const csv = await response.text();

const zerts = csv.substr(0, 400)
const verts = csv.substr(401, 762);
const herts = csv.substr(763);
const zaxis = zerts.split(',').map(x => parseFloat(x, 10));
const vaxis = verts.split(',').map(x => parseFloat(x, 10));
const haxis = herts.split(',');

console.log(zaxis, vaxis, haxis);

const totPop = document.getElementById('totPop').getContext('2d');

const popCharts = new Chart(totPop, {
    type: 'line',
    data: {
        labels: haxis,
        datasets: [{
            label: 'Africa Population in Mns',
            data: vaxis,
            fill: true,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            borderWidth: 1
        },
    {
            label: 'World Population in Mns',
            data: zaxis,
            fill: false,
            backgroundColor: "rgba(0,0,139, 0.4)",
            borderColor: "rgba(0,0,139, 0.4)",
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
}

//--------------------GDP Total Graph--------------------------------------------->
const haxs = [];
const vaxs = [];
const zaxs = [];
const virts = [];
const hirts = [];
const zirts = [];

getCsvGdp();
async function getCsvGdp() {

const response = await fetch('assets/csv/GDP.csv');

const csvgdp = await response.text();

const zirts = csvgdp.substr(0, 390);
const virts = csvgdp.substr(391, 752);
const hirts = csvgdp.substr(753);
const zaxs = zirts.split(',').map(x => parseFloat(x, 10));
const vaxs = virts.split(',').map(x => parseFloat(x, 10));
const haxs = hirts.split(',');

console.log(haxs, vaxs, zaxs);

const totGdp = document.getElementById('totGdp').getContext('2d');

const gdpChart = new Chart(totGdp, {
    type: 'line',
    data: {
        labels: haxs,
        datasets: [{
            label: 'Africa GDP US$ Bns',
            data: vaxs,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            fill: true,
            borderWidth: 1
        },
    {
            label: 'World GDP US$ 10 Bns',
            data: zaxs,
            backgroundColor: "rgba(0,0,139, 0.4)",
            borderColor: "rgba(0,0,139, 0.4)",
            fill: false,
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
}