const ctyCode = "MU"

//<-------------------API for Country Codes';------------------------>
var baseUrlcountry = "https://referential.p.rapidapi.com/v1/country?fields=currency%25252Ccurrency_num_code%25252Ccurrency_code%25252Ccontinent_code%25252Ccurrency%25252Ciso_a3%25252Cdial_code&continent_code=AF";
//<-------------------World Bank API for Country Capital and Capital Lat & Long';------------------------>


var baseUrlwbcty = "https://api.worldbank.org/v2/country/" + ctyCode + "?format=json";
//<-------------------World Bank API for Country Population 1970 to Current Year';------------------------>
var baseUrlwbpop = "https://api.worldbank.org/v2/country/" + ctyCode + "/indicator/SP.POP.TOTL?format=json";
//<-------------------World Bank API for Country GDP 1970 to Current Year';------------------------>
var baseUrlwbgdp = "https://api.worldbank.org/v2/country/" + ctyCode + "/indicator/NY.GDP.MKTP.CD?format=json";


//<-------------------gets Generic data for viewing in console for selection from chosen API in 'Open';------------------------>
function getData (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbgdp, true);
//     <---------------------setRequestHeader only required for the 'referential rapidAPI key 'baseUrlcountry'--->
//xhttp.setRequestHeader("x-rapidapi-key", "3862ea89d4msh2f04423d9b95ad8p18b07bjsn4fdaaa32a1f6");
xhttp.send();
}

function printDataToConsole(data) {
    item = data[1];
    item.forEach (function (year) {
    console.log(year.date, year.value);
});
    //console.log(item);
}
getData(printDataToConsole);

//<---------End of API Console View gets Generic data for viewing in console for selection from chosen API in 'Open'----------------->


//gets Country Codes for Africa from API in 'open';
function getDataCountry (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlcountry, true);
xhttp.setRequestHeader("x-rapidapi-key", "3862ea89d4msh2f04423d9b95ad8p18b07bjsn4fdaaa32a1f6");
xhttp.send();
}

//Writes Country Codes by Country from API;
function writeCountry(data) {
    data.forEach (function(item) {
    document.getElementById("country").innerHTML += ("<p>" + item.value + " Country Code: " + item.key + "</p>");
});
}
getDataCountry(writeCountry);

//gets World Bank Country data (Country, Capital, Lat, Long) by Country from API;
function getDataCty (cb) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("data").innerHTML = xhttp.responseText;
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbcty, true);
xhttp.send();
}
//Writes World Bank Country data (Country, Capital, Lat, Long) by Country from API;
function writeCty(data) {
    document.getElementById("cty").innerHTML = (data[1][0].name + " Capital City & Lat/Long Coords " + "<br>" + data[1][0].capitalCity + "<br>" + data[1][0].latitude + "<br>" + data[1][0].longitude);
}
getDataCty(writeCty);


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
//Writes World Bank Population data by Country from API;
const xlabels =[];
const ydata =[];
function writePop(data) {
    const item = data[1];
    item.forEach (function (year) {
    xlabels.push(year.date);
    ydata.push(year.value);
    document.getElementById("pop").innerHTML += ("<br>" + year.date + " " + year.value + "<br>");
});
    console.log(xlabels, ydata);
}
getDataPop(writePop);

//GETs World Bank GDP data by Country from API;
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

//Writes World Bank GDP data by Country from API;
const glabels =[];
const hdata =[];
function writeGdp(data) {
    const item = data[1];
    item.forEach (function (year) {
    glabels.push(year.date);
    hdata.push(year.value);
    document.getElementById("gdp").innerHTML += ("<br>" + year.date + " " + year.value + "<br>");
});
    console.log(glabels, hdata);
}
getDataGdp(writeGdp);