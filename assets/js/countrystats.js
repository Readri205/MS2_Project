//Country Flag
const flag = "https://www.countryflags.io/" + countryCode + "/shiny/64.png";
//World Bank API for Country Capital and Capital Lat & Long'
const baseUrlwbcapital = "https://api.worldbank.org/v2/country/" + countryCode + "?format=json";
//gets World Bank Country data (Country, Capital, Lat, Long) by Country from API
function getDataCapital(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwbcapital, true);
	xhttp.send();
}
//Writes World Bank Country data (Country, Capital, Lat, Long) by Country from API
function writeCapital(data) {
	document.getElementById("iscountry").innerHTML = (data[1][0].name);
	document.getElementById("flag").innerHTML = ("<img src=" + flag + ">");
	document.getElementById("capital").innerHTML = (" Capital: " + "   " + data[1][0].capitalCity);
}
getDataCapital(writeCapital);
//World Bank API for Country Population 1970 to Current Year'
const baseUrlwbpopu = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/SP.POP.TOTL?format=json";
//World Bank API for Country GDP 1970 to Current Year'
const baseUrlwbgdps = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/NY.GDP.MKTP.CD?format=json";
//World Bank API for Country GDP 1970 to Current Year'
const baseUrlwblandsize = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/AG.LND.TOTL.K2?format=json";
//GETs World Bank Land Size data for Country from API
function getDataLandSize(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwblandsize, true);
	xhttp.send();
}
//Writes World Bank Land Size data for Country from API
function writeLandSize(data) {
	if (countryCode == "SD") {
		landsize = 1886068;
	} else if (countryCode == "SS") {
		landsize = 619745;
	} else {
		item = data[1];
		landsize = item[3].value.toFixed(0);
    }
	perc = (landsize / 295097.44).toFixed(2);
    document.getElementById("landsize").innerHTML += ("Land Size:   " + landsize + "   Sq. Kms" + " " + " - " + perc + "% of total Africa Land Size (29.5 Mn Sq. Kms)");
}
getDataLandSize(writeLandSize);
//GETs World Bank Population data for Country from API
function getDataPopulation(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwbpopu, true);
	xhttp.send();
}
//Writes World Bank Population data for Country from API
function writePopulation(data) {
	const item = data[1];
	const year = item[1].date;
	const pop = (item[1].value / 1000000).toFixed(2);
	const perc = (pop / 13.02819408).toFixed(2);
    document.getElementById("popsize").innerHTML += ("Country Population:   " + year + "    " + pop + " Mn" + " - " + perc + "% of total Africa Population (1.3Bn)");
}
getDataPopulation(writePopulation);
//GETs World Bank GDP data for Country from API
function getDataCountryGdp(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwbgdps, true);
	xhttp.send();
}
//Writes World Bank GDP data for Country from API
function writeCountryGdp(data) {
	const item = data[1];
	const year = item[1].date;
	const gdp = (item[1].value / 1000000000).toFixed(1);
	const perc = (gdp / 24.24529223027).toFixed(2);
    document.getElementById("gdpsize").innerHTML += ("GDP: " + year + " US$ " + gdp + " Bn - " + perc + "% of the total Africa GDP (US$ 2,424 Bn)");
}
getDataCountryGdp(writeCountryGdp);