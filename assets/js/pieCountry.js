//<-------------------World Bank API for Country land Size';------------------------>
const baseUrlwblandcount = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Population data by Country from API;
function getDataLand (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwblandcount, true);
xhttp.send();
}
//<--------------Writes World Bank Population data by Country from API (the proper way around...);-------------->


function writeLand(data) {
    const item = data[1][1];
    const countland = item.value / 1000000;
    const roaland = (29.509744 - countland);
   
   //console.log(countland);
   //console.log(item.country.value, item.date, item.value, countland, roaland);


//<----------------Graphs World Bank Land Size by Country from API ;------------------>

Chart.defaults.global.defaultFontFamily = 'Exo';
Chart.defaults.global.defaultFontColor = '#000000';
new Chart(document.getElementById("landPie"), {
    type: 'pie',
    data: {
      labels: [item.country.value, "Rest of Africa"],
      datasets: [{
        label: " Land Size in (Mns) Sq. Kms",
        backgroundColor: ["#e8c3b9", "#c45850"],
        data: [countland.toFixed(2), roaland.toFixed(2)]
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Land Size (Mns) Sq. Kms v Rest of Africa'],
        fontFamily: "Exo"
      }
    }
});
}
getDataLand(writeLand);


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
//<--------------Writes World Bank Population data by Country from API;-------------->


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
        data: [countpop.toFixed(2), roapop.toFixed(2)]
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Population (Mns) v Rest of Africa', item.date]
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

//<---------Writes World Bank GDP data by Country from API;----------->

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
        data: [countgdp.toFixed(2), roagdp.toFixed(2)]
      }]
    },
    options: {
      title: {
        display: true,
        text: ['GDP (Bns) v Rest of Africa', item.date]
      }
    }
});
}
getDataGdp(writeGdp);
//<---------Writes World Bank Land data for Top Five Country from API;----------->
const coun = [];
const lands = [];

getCsvLand();
async function getCsvLand() {

const response = await fetch('assets/csv/land.csv');
const csv = await response.text();

const verts = csv.substr(0, 525);
const herts = csv.substr(526, 374);
const lands = herts.split(',').map(x => parseFloat(x, 10));
const coun = verts.split(',');
const topcount = [coun[53],coun[52],coun[51],coun[50],coun[49],coun[48],coun[47],coun[46],coun[45],coun[44],"Rest of Africa"];
const restlands = [((lands[54] - (lands[53] + lands[52] + lands[51] + lands[50] + lands[49] + lands[48] + lands[47] + lands[46] + lands[45] + lands[44]))/1000000).toFixed(2)];
const toplands = [(lands[53]/1000000).toFixed(2),(lands[52]/1000000).toFixed(2),(lands[51]/1000000).toFixed(2),(lands[50]/1000000).toFixed(2),(lands[49]/1000000).toFixed(2),(lands[48]/1000000).toFixed(2),(lands[47]/1000000).toFixed(2),(lands[46]/1000000).toFixed(2),(lands[45]/1000000).toFixed(2),(lands[44]/1000000).toFixed(2),restlands];

//console.log(restlands);

new Chart(document.getElementById("landTop"), {
    type: 'pie',
    data: {
      labels: topcount,
      datasets: [{
        label: " Land Sizes in Sq. Kms",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#E9967A","#FF8C00","#BDB76B","#2E8B57","#00CED1","#2f4f4f"],
        data: toplands,
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Top 10 Africa Land Sizes (Mns) Sq. Kms']
      }
    }
});
}
getDataLand(writeLand);




//<---------Writes World Bank POP data for Top Five Country from API;----------->
const count = [];
const poppie = [];

getCsvPoppie();
async function getCsvPoppie() {

const response = await fetch('assets/csv/poptotes.csv');
const csv = await response.text();

const verts = csv.substr(0, 517);
const herts = csv.substr(518, 455);
const poppie = herts.split(',').map(x => parseFloat(x, 10));
const count = verts.split(',');
const topfivecount = [count[33],count[40],count[50],count[10],count[16],"Rest of Africa"];
const restpop = [((1302819408 - (poppie[33] + poppie[16] + poppie[50] + poppie[10] + poppie[40]))/1000000).toFixed(2)];
const topfivepop = [(poppie[33]/1000000).toFixed(2),(poppie[40]/1000000).toFixed(2),(poppie[50]/1000000).toFixed(2),(poppie[10]/1000000).toFixed(2),(poppie[16]/1000000).toFixed(2),restpop];

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
        text: ['Top Five Africa Populations (Mns) 2019']
      }
    }
});
}
getDataPop(writePop);

//<---------Writes World Bank GDP data for Top Five Country from API ;----------->
const counts = [];
const gdppie = [];
//const topfivecounts = [];
//const topfivegdp = [];

getCsvGdppie();
async function getCsvGdppie() {

const response = await fetch('assets/csv/gdptotes.csv');
const csv = await response.text();

const verts = csv.substr(0, 518);
const herts = csv.substr(519, 1124);
const gdppie = herts.split(',').map(x => parseFloat(x, 10));
const counts = verts.split(',');
const topfivecounts = [counts[53],counts[52],counts[51],counts[50],counts[49],"Rest of Africa"];
const restgdp = [((2424529223027 - (gdppie[53] + gdppie[52] + gdppie[51] + gdppie[50] + gdppie[49]))/1000000000).toFixed(2)];
const topfivegdp = [(gdppie[53]/1000000000).toFixed(2),(gdppie[52]/1000000000).toFixed(2),(gdppie[51]/1000000000).toFixed(2),(gdppie[50]/1000000000).toFixed(2),(gdppie[49]/1000000000).toFixed(2),restgdp];

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
        text: ['Top Five Africa GDP (Bns) 2019']
      }
    }
});

}
getDataGdp(writeGdp);
