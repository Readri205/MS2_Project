//const countryCode = "SO";

const flags = "https://www.countryflags.io/" + countryCode + "/shiny/64.png";

//<-------------------API for Country Codes';------------------------>
const baseUrlcountrys = "https://referential.p.rapidapi.com/v1/country?fields=currency%25252Ccurrency_num_code%25252Ccurrency_code%25252Ccontinent_code%25252Ccurrency%25252Ciso_a3%25252Cdial_code&continent_code=AF";
//<-------------------World Bank API for Country Capital and Capital Lat & Long';------------------------>

const baseUrlwbcity = "https://api.worldbank.org/v2/country/" + countryCode + "?format=json";
//<-------------------World Bank API for Country Population 1970 to Current Year';------------------------>
const baseUrlwbpopu = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/SP.POP.TOTL?format=json";
//<-------------------World Bank API for Country GDP 1970 to Current Year';------------------------>
const baseUrlwbgdps = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/NY.GDP.MKTP.CD?format=json";


//<-------------------gets Generic data for viewing in console for selection from chosen API in 'Open';------------------------>
function getDatas (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbgdps, true);
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
getDatas(printDataToConsole);

//<---------End of API Console View gets Generic data for viewing in console for selection from chosen API in 'Open'----------------->


//gets Country Codes for Africa from API in 'open';
function getDataCountry (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlcountrys, true);
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
function getDataCity (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("data").innerHTML = xhttp.responseText;
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbcity, true);
xhttp.send();
}
//Writes World Bank Country data (Country, Capital, Lat, Long) by Country from API;
function writeCity(data) {
    document.getElementById("cty").innerHTML = (data[1][0].name + " Capital City & Lat/Long Coords " + "<br>" + data[1][0].capitalCity + "<br>" + data[1][0].latitude + "<br>" + data[1][0].longitude);

    document.getElementById("flags").innerHTML = ("<img src=" + flags + ">");


}
getDataCity(writeCity);


//GETs World Bank Population data by Country from API;
function getDataPopu (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbpopu, true);
xhttp.send();
}
//Writes World Bank Population data by Country from API;
const alabels =[];
const bdata =[];
function writePopu(data) {
    const item = data[1];
    item.forEach (function (year) {
    alabels.push(year.date);
    bdata.push(year.value);
    document.getElementById("pop").innerHTML += ("<br>" + year.date + " " + year.value + "<br>");
});
    console.log(alabels, bdata);
}
getDataPopu(writePopu);

//GETs World Bank GDP data by Country from API;
function getDataGdps (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbgdps, true);
xhttp.send();
}

//Writes World Bank GDP data by Country from API;
const clabels =[];
const ddata =[];
function writeGdps(data) {
    const item = data[1];
    item.forEach (function (year) {
    clabels.push(year.date);
    ddata.push(year.value);
    document.getElementById("gdp").innerHTML += ("<br>" + year.date + " " + year.value + "<br>");
});
    console.log(clabels, ddata);
}
getDataGdps(writeGdps);