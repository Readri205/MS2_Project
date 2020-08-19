//World Bank API for Land Size
const regionCode = "WLD"
const baseUrlworldland = "https://api.worldbank.org/v2/country/" + regionCode + "/indicator/AG.LND.TOTL.K2?format=json";
//GETs World Bank Land Size data from API
function getDataLand(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlworldland, true);
	xhttp.send();
	xhttp.onerror = function() {
		alert("Oops, the WB Country Land API return failed - please try again later, but please head over to the contact page and drop us an email so we can look at the error");
	  };
}
//Writes World Bank Land Size data by from API
function writeLand(data) {
	const size = (data[1][1].value / 1000000) + 1.886068 + 0.619745;
	const landsize = size.toFixed(1);
	//Sudan and South Sudan Sq Km not included in World Bank figures Sudan 1886,068, South Sudan 619,745 Sq Kms - Wikipedia
	document.getElementById("worldlandsize").innerHTML += ("Landsize: 29.5 Mn Sq. Kms - 23% of World Land Size" + " (" + landsize + " Mn Sq. Kms)");
}
getDataLand(writeLand);
//World Bank API for Pop Size
const baseUrlworldpop = "https://api.worldbank.org/v2/country/" + regionCode + "/indicator/SP.POP.TOTL?format=json";
//GETs World Bank Population data by World from API
function getDataPop(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlworldpop, true);
	xhttp.send();
	xhttp.onerror = function() {
		alert("Oops, the WB Country Population API return failed - please try again later, but please head over to the contact page and drop us an email so we can look at the error");
	  };
}
//Writes World Bank Population data by Country from API
function writePop(data) {
	const size = data[1][0].value / 1000000000;
	const popsize = size.toFixed(1);

	document.getElementById("worldpopsize").innerHTML += ("Population: 1.3 Bn - 17% of World Population" + " (" + popsize + " Bn)");
}
getDataPop(writePop);
//World Bank API for GDP Size
const baseUrlworldgdp = "https://api.worldbank.org/v2/country/" + regionCode + "/indicator/NY.GDP.MKTP.CD?format=json";
//GETs World Bank Population data by World from API
function getDataGdp(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlworldgdp, true);
	xhttp.send();
	xhttp.onerror = function() {
		alert("Oops, the WB Country GDP API return failed - please try again later, but please head over to the contact page and drop us an email so we can look at the error");
	  };
}
//Writes World Bank GDP data by Country from API (1970 to current)
function writeGdp(data) {
	const size = data[1][0].value / 1000000000000;
	const gdpsize = size.toFixed(1);
	document.getElementById("worldgdpsize").innerHTML += ("GDP: US$Tn 2.4 - 3% of World GDP (US$Tn " + gdpsize + ")");
}
getDataGdp(writeGdp);