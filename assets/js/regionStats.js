//<-------------------World Bank API for Land Size------------------------>
const regionlandsizes = [];
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

function writeLand(data) {
    const size = data[1][1].value / 1000000;
    const landsize = size;
    regionlandsizes.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(regionlandsizes);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatassf(writeLand);

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

function writeLand(data) {
    const size = data[1][1].value / 1000000;
    const landsize = size;
    regionlandsizes.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(regionlandsizes);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatamea(writeLand);

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

function writeLand(data) {
    const size = data[1][1].value / 1000000;
    const landsize = size;
    regionlandsizes.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(regionlandsizes);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDataecs(writeLand);

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

function writeLand(data) {
    const size = data[1][1].value / 1000000;
    const landsize = size;
    regionlandsizes.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(regionlandsizes);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDataeas(writeLand);

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

function writeLand(data) {
    const size = data[1][1].value / 1000000;
    const landsize = size;
    regionlandsizes.push(data[1][1].country.value, landsize);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    console.log(regionlandsizes);
    //document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
}
getDatanac(writeLand);