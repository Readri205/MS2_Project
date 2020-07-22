//<-------------------World Bank API for Land Size------------------------>
const regionlandsizes = [];
const totalandsize = [];
const baseUrlssfland = "https://api.worldbank.org/v2/country/" + "SSF" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDatassf (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlssfland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const ssflandsize = [];
function writessfLand(data) {
    ssflandsize.push((data[1][1].value + 1886068 + 619745 + 5761570)/ 1000000);
    totalandsize.push((data[1][1].value + 1886068 + 619745 + 5761570)/ 1000000);
    //const ssflandsize = (data[1][1].value + 1886068 + 619745) / 1000000;
    //const landsize = size;
    //ssflandsize.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia + ME countries switched from MEA to SSF 5,761,570------->
   
    console.log(ssflandsize);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatassf(writessfLand);

const baseUrlmealand = "https://api.worldbank.org/v2/country/" + "MEA" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDatamea (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlmealand, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const mealandsize = [];
function writemeaLand(data) {
    mealandsize.push((data[1][1].value - 5761570) / 1000000);
    totalandsize.push((data[1][1].value - 5761570) / 1000000);
    //const mealandsize = data[1][1].value / 1000000;
    //const landsize = size;
    //mealandsize.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(mealandsize);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatamea(writemeaLand);

const baseUrlecsland = "https://api.worldbank.org/v2/country/" + "ECS" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDataecs (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlecsland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const ecslandsize = [];
function writeecsLand(data) {
    ecslandsize.push(data[1][1].value / 1000000);
    totalandsize.push(data[1][1].value / 1000000);
    //const ecslandsize = data[1][1].value / 1000000;
    //const landsize = size;
    //ecslandsize.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(ecslandsize);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDataecs(writeecsLand);

const baseUrleasland = "https://api.worldbank.org/v2/country/" + "EAS" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDataeas (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrleasland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const easlandsize = [];
function writeeasLand(data) {
    easlandsize.push(data[1][1].value / 1000000);
    totalandsize.push(data[1][1].value / 1000000);
    //const easlandsize = data[1][1].value / 1000000;
    //const landsize = size;
    //easlandsize.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(easlandsize);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDataeas(writeeasLand);

const baseUrlnacland = "https://api.worldbank.org/v2/country/" + "NAC" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDatanac (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlnacland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const naclandsize = [];
function writenacLand(data) {
    naclandsize.push(data[1][1].value / 1000000);
    totalandsize.push(data[1][1].value / 1000000);
    //const naclandsize = data[1][1].value / 1000000;
    //const landsize = size;
    //naclandsize.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(naclandsize);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatanac(writenacLand);

const baseUrlsasland = "https://api.worldbank.org/v2/country/" + "SAS" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDatasas (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlsasland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const saslandsize = [];
function writesasLand(data) {
    saslandsize.push(data[1][1].value / 1000000);
    totalandsize.push(data[1][1].value / 1000000);
    //const saslandsize = data[1][1].value / 1000000;
    //const landsize = size;
    //saslandsize.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(saslandsize);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatasas(writesasLand);

const baseUrllcnland = "https://api.worldbank.org/v2/country/" + "LCN" + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDatalcn (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrllcnland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->
const lcnlandsize = [];

function writelcnLand(data) {
    lcnlandsize.push(data[1][1].value / 1000000);
    totalandsize.push(data[1][1].value / 1000000);
    //const lcnlandsize = data[1][1].value / 1000000;
    //const landsize = size * 1000000;
    //lcnlandsize.push(data[1][1].country.value, landsize);
    const worldlandsize = (totalandsize[0] + totalandsize[1] + totalandsize[2] + totalandsize[3] + totalandsize[4] + totalandsize[5] + totalandsize[6]).toFixed(2);
    const perc = ((totalandsize[0] / worldlandsize) * 100).toFixed(2);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    console.log(worldlandsize, totalandsize[0], perc);
    document.getElementById("worldland").innerHTML += ("Land size: " + totalandsize[0].toFixed(2) + " Sq. Kms " + " / " + worldlandsize + " Sq. Kms (" + perc + ") % ");


new Chart(document.getElementById("landPie"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Latin America & Caribbean", "South Asia", "North America", "Middle East", "Europe & Central Asia", "East Asia & Pacific"],
      datasets: [{
        label: "Land size in (Mns) Sq. Kms",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f","#f0e68c"],
        data: [totalandsize[0].toFixed(2), totalandsize[6].toFixed(2), totalandsize[5].toFixed(2), totalandsize[4].toFixed(2), totalandsize[1].toFixed(2), totalandsize[2].toFixed(2), totalandsize[3].toFixed(2)]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'World Land Size in (Mns) Sq. Kms'
      }
    }
});
}
getDatalcn(writelcnLand);


//console.log(totalandsize);

    //const totlandsize = (regionlandsizes[1]+regionlandsizes[3]+regionlandsizes[5]+regionlandsizes[7]+regionlandsizes[9]+regionlandsizes[11]+regionlandsizes[13]+1.886068+0.619745).toFixed(2);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(totlandsize);
    //document.getElementById("totlandsize").innerHTML += (totlandsize);
