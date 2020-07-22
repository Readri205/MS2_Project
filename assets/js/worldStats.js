//<-------------------World Bank API for Land Size------------------------>
//landsize = [];
//popsize = [];
//document.getElementById("worldlandsize").innerHTML += ("Land area (sq. km): 29.5 Million / " + landsize + " Million (23%).");
//document.getElementById("worldpopsize").innerHTML += ("Population: 1,303 Million / " + popsize + " Million (17%).");


const regionCode = "WLD"
const baseUrlworldland = "https://api.worldbank.org/v2/country/" + regionCode + "/indicator/AG.LND.TOTL.K2?format=json";

//GETs World Bank Land Size data from API;
function getDataLand (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlworldland, true);
xhttp.send();
}
//<--------------Writes World Bank Land Size data by from API-------------->

//function writeLand(data) {
    //const size = data[1][1].value / 1000000;
    //const landsize = (size + 1.886068 + 0.619745).toFixed(2);
    //Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia------->
   
    //console.log(landsize.toFixed(2));
//}
//getDataLand(writeLand);

//<-------------------World Bank API for Pop Size------------------------>

const baseUrlworldpop = "https://api.worldbank.org/v2/country/" + regionCode + "/indicator/SP.POP.TOTL?format=json";

//GETs World Bank Population data by World from API;
function getDataPop (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlworldpop, true);
xhttp.send();
}
//<--------------Writes World Bank Population data by Country from API -------------->

function writePop(data) {
    const size = data[1][0].value / 1000000000;
    const popsize = size.toFixed(3);
   
    //console.log(popsize);
    document.getElementById("worldpopsize").innerHTML += ("Population: 1,303 Million / " + popsize + " Million (17%).");
}
getDataPop(writePop);

//<-------------------World Bank API for GDP Size------------------------>

const baseUrlworldgdp = "https://api.worldbank.org/v2/country/" + regionCode + "/indicator/NY.GDP.MKTP.CD?format=json";

//GETs World Bank Population data by World from API;
function getDataGdp (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlworldgdp, true);
xhttp.send();
}
//<--------------Writes World Bank GDP data by Country from API (the proper way around...);-------------->

function writeGdp(data) {
    const size = data[1][0].value / 1000000000000;
    const gdpsize = size.toFixed(3);
   
    //console.log(gdpsize);
    document.getElementById("worldgdpsize").innerHTML += ("Gross Domestic Product (GDP): US$Bn 2,425 / US$Bn " + gdpsize + " (3%).");
}
getDataGdp(writeGdp);

//<--------------Writes World Bank Land data by REGION from API -------------->
