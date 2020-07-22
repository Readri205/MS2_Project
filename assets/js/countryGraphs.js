//<-------------------World Bank API for Country Population 1970 to Current Year';------------------------>
const baseUrlwbpop = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/SP.POP.TOTL?format=json";

//GETs World Bank Population data by Country from API;
function getDataPop (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbpop, true);
xhttp.send();
}
//<--------------Writes World Bank Population data by Country from API (the proper way around...);-------------->
const xlabels =[];
const ydata =[];

function writePop(data) {
    const country = data[1][0].country.value;
    const item = data[1];
    item.forEach (function (year) {
    xlabels.push(year.date);
    ydata.push(year.value / 1000000);
});
    xlabels.reverse();
    ydata.reverse();
   
    //console.log(country);

//<----------------Graphs World Bank Population data by Country from API (the proper way around...);------------------>

const ctyPop = document.getElementById("popChart").getContext("2d");

//const popChart = 
Chart.defaults.global.defaultFontFamily = 'Exo';
Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultFontSize = 15;
new Chart(ctyPop, {
    type: 'line',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Population in Mns',
            data: ydata,
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
                    beginAtZero: false
                }
            }]
        },
        layout: {
            padding: 20
        },
        title: {
        display: true,
        text: country + ' Population'
      }
    }
});
}
getDataPop(writePop);

//<--------End of Graphs World Bank Population data by Country from API (the proper way around...);------->

//<-------------------World Bank API for Country GDP 1970 to Current Year';------------------------>
var baseUrlwbgdp = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/NY.GDP.MKTP.CD?format=json";

//<-------------------GETs World Bank GDP data by Country from API;------------------------>
function getDataGdp (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbgdp, true);
xhttp.send();
}

//<---------Writes World Bank GDP data by Country from API (the proper way around...);----------->
const glabels =[];
const hdata =[];

function writeGdp(data) {
    const country = data[1][0].country.value;
    const item = data[1];
    item.forEach (function(year) {
    glabels.push(year.date);
    hdata.push(year.value / 1000000000);
});
    glabels.reverse();
    hdata.reverse();

    //console.log(country);

//<---------------Graphs World Bank Population data by Country from API (the proper way around...);---------->
const ctyGdp = document.getElementById("gdpChart").getContext("2d");

//const gdpChart = 
new Chart(ctyGdp, {
    type: 'line',
    data: {
        labels: glabels,
        datasets: [{
            label: ' GDP in US$ Bns',
            data: hdata,
            backgroundColor: "rgba(139,0,0, 0.4)",
            borderColor: "rgba(139,0,0, 0.4)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    callback:function(value) {return "$" + value}
                }
            }]
        },
        layout: {
            padding: 20
        },
        title: {
        display: true,
        text: country + ' GDP'
      }
    }
});
}
getDataGdp(writeGdp);
//<---------------End of Graphs World Bank GDP data by Country from API (the proper way around...);---------------->