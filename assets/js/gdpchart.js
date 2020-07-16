

//const countryCode = "ML"

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
    const item = data[1];
    item.forEach (function(year) {
    glabels.push(year.date);
    hdata.push(year.value / 1000000000);
});
    glabels.reverse();
    hdata.reverse();
    console.log(glabels, hdata);

//<---------------Graphs World Bank Population data by Country from API (the proper way around...);---------->
const ctyGdp = document.getElementById("gdpChart").getContext("2d");

//const gdpChart = 
new Chart(ctyGdp, {
    type: 'line',
    data: {
        labels: glabels,
        datasets: [{
            label: 'GDP in US$ Billions',
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
        }
    }
});
}
getDataGdp(writeGdp);
//<---------------End of Graphs World Bank GDP data by Country from API (the proper way around...);---------------->