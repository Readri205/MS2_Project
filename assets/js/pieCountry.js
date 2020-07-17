//<-------------------World Bank API for Country Population 1970 to Current Year';------------------------>
const baseUrlwbpopcount = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/SP.POP.TOTL?format=json";

//GETs World Bank Population data by Country from API;
function getDataPop (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbpopcount, true);
xhttp.send();
}
//<--------------Writes World Bank Population data by Country from API (the proper way around...);-------------->


function writePop(data) {
    const item = data[1][0];
    const countpop = item.value / 1000000;
    const roapop = (1303 - countpop);  
   
   //console.log(item.country.value, item.date, item.value, countpop, roapop);


//<----------------Graphs World Bank Population data by Country from API (the proper way around...);------------------>


new Chart(document.getElementById("popPie"), {
    type: 'pie',
    data: {
      labels: [item.country.value, "Rest of Africa"],
      datasets: [{
        label: " Population in Mns",
        backgroundColor: ["#e8c3b9", "#c45850"],
        data: [countpop, roapop]
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Country Population relative to the Rest of Africa', item.date]
      },
      layout: {
            padding: 20
        }
    }
});
}
getDataPop(writePop);



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

function writeGdp(data) {
    const item = data[1][0];
    const countgdp = item.value / 1000000000;
    const roagdp = (2425 - countgdp);  
   
    //console.log(item.country.value, item.date, item.value, countgdp, roagdp);
    

new Chart(document.getElementById("gdpPie"), {
    type: 'pie',
    data: {
      labels: [item.country.value, "Rest of Africa"],
      datasets: [{
        label: " GDP in Bns",
        backgroundColor: ["#e8c3b9", "#c45850"],
        data: [countgdp, roagdp]
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Country GDP relative to the Rest of Africa', item.date]
      },
      layout: {
            padding: 20
        }
    }
});
}
getDataGdp(writeGdp);

//<---------Writes World Bank POP data for Top Five Country from API (the proper way around...);----------->
const count = [];
const poppie = [];

getCsvPoppie();
async function getCsvPoppie() {

const response = await fetch('assets/csv/POPTOTES.csv');
const csv = await response.text();

const verts = csv.substr(0, 517);
const herts = csv.substr(518, 455);
const poppie = herts.split(',').map(x => parseFloat(x, 10));
const count = verts.split(',');
const topfivecount = [count[33],count[40],count[50],count[10],count[16],"Rest of Africa"];
const restpop = [1302819408 - (poppie[33] + poppie[16] + poppie[50] + poppie[10] + poppie[40])];
const topfivepop = [poppie[33],poppie[40],poppie[50],poppie[10],poppie[16],restpop];

//console.log(poppie);


new Chart(document.getElementById("popTop"), {
    type: 'pie',
    data: {
      labels: topfivecount,
      datasets: [{
        label: " Population in Mns",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f"],
        data: topfivepop,
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Top Five Country Populations in Africa']
      }
    }
});
}
getDataPop(writePop);

//<---------Writes World Bank GDP data for Top Five Country from API (the proper way around...);----------->
const counts = [];
const gdppie = [];
const topfivecounts = [];
const topfivegdp = [];

getCsvGdppie();
async function getCsvGdppie() {

const response = await fetch('assets/csv/GDPTOTES.csv');
const csv = await response.text();

const verts = csv.substr(0, 518);
const herts = csv.substr(519, 1124);
const gdppie = herts.split(',').map(x => parseFloat(x, 10));
const counts = verts.split(',');
const topfivecounts = [counts[53],counts[52],counts[51],counts[50],counts[49],"Rest of Africa"];
const restgdp = [2424529223027 - (gdppie[53] + gdppie[52] + gdppie[51] + gdppie[50] + gdppie[49])];
const topfivegdp = [gdppie[53],gdppie[52],gdppie[51],gdppie[50],gdppie[49],restgdp];

//console.log(gdppie);

new Chart(document.getElementById("gdpTop"), {
    type: 'pie',
    data: {
      labels: topfivecounts,
      datasets: [{
        label: " GDP in Bns",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f"],
        data: topfivegdp,
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Top Five Country GDP in Africa']
      }
    }
});

}
getDataGdp(writeGdp);


