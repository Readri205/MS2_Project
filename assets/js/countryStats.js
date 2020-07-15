//<-------------------World Bank API for Country Population 1970 to Current Year';------------------------>
const baseUrlwbpopu = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/SP.POP.TOTL?format=json";
//<-------------------World Bank API for Country GDP 1970 to Current Year';------------------------>
const baseUrlwbgdps = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/NY.GDP.MKTP.CD?format=json";
//<-------------------World Bank API for Country GDP 1970 to Current Year';------------------------>
const baseUrlwblandsize = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/AG.LND.TOTL.K2?format=json";



//GETs World Bank Population data for Country from API;
function getDataPopulation (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbpopu, true);
xhttp.send();
}
//Writes World Bank Population data for Country from API;
function writePopulation(data) {
    const item = data[1];
    const year = item[0].date;
    const pop = (item[0].value / 1000000).toFixed(2);
    const perc = (pop / 13.02819408).toFixed(2);
    
    document.getElementById("popsize").innerHTML += ("Country Population:   " + year + "    " + pop + " Mn" + " - " + perc + "% of total Africa Population (1.3Bn)");
    
    console.log(year, pop);
}
getDataPopulation(writePopulation);

//GETs World Bank GDP data for Country from API;
function getDataCountryGdp (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbgdps, true);
xhttp.send();
}

//Writes World Bank GDP data for Country from API;

function writeCountryGdp(data) {
    const item = data[1];
    const year = item[0].date;
    const gdp = (item[0].value / 1000000000).toFixed(2);
    const perc = (gdp / 24.24529223027).toFixed(2);

    document.getElementById("gdpsize").innerHTML += ("GDP: " + year + " US$ " + gdp + " Bn - " + perc + "% of the total Africa GDP (US$ 2.42 Bn)");

    console.log(year, gdp);
}
getDataCountryGdp(writeCountryGdp);

//GETs World Bank Land Size data for Country from API;
function getDataLandSize (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwblandsize, true);
xhttp.send();
}
//Writes World Bank Land Size data for Country from API;
function writeLandSize(data) {
    const item = data[1];
    const landsize = item[1].value.toFixed(0);
    const perc = (landsize / 295097.44).toFixed(2);
    
    document.getElementById("landsize").innerHTML += ("Land Size:   " + landsize + "   Sq. Kms" + " " + " - " + perc + "% of total Africa Land Size (29.51 Mn Sq. Kms)");
    
    console.log(perc, landsize);
}
getDataLandSize(writeLandSize);