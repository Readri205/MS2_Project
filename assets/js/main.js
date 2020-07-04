var baseUrlwbcty = "http://api.worldbank.org/v2/country/NG?format=json";
var baseUrlwbpop = "http://api.worldbank.org/v2/country/NG/indicator/SP.POP.TOTL?format=json";
var baseUrlwbgdp = "http://api.worldbank.org/v2/country/NG/indicator/NY.GDP.MKTP.CD?format=json";
var baseUrlcountry = "https://referential.p.rapidapi.com/v1/country?fields=currency%25252Ccurrency_num_code%25252Ccurrency_code%25252Ccontinent_code%25252Ccurrency%25252Ciso_a3%25252Cdial_code&continent_code=AF";

//gets Generic data for viewing in console for selection from chosen API in 'Open';
function getData (cb) {
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

function printDataToConsole(data) {
    console.log(data);
}
getData(printDataToConsole);

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