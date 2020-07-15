//const countryCode = "ML"

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
    const item = data[1];
    item.forEach (function (year) {
    xlabels.push(year.date);
    ydata.push(year.value / 1000000);
});
    xlabels.reverse();
    ydata.reverse();
   
    //console.log(xlabels, ydata);

//<----------------Graphs World Bank Population data by Country from API (the proper way around...);------------------>

const ctyPop = document.getElementById("popChart").getContext("2d");

const popChart = new Chart(ctyPop, {
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
        }
    }
});
}
getDataPop(writePop);

//<--------End of Graphs World Bank Population data by Country from API (the proper way around...);------->