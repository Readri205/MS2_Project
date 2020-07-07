const ctyFlag = "TN"

//<-------------------World Bank API for Country Capital and Capital Lat & Long';------------------------>

var baseUrlwbcty = "https://api.worldbank.org/v2/country/" + ctyFlag + "?format=json";

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

    document.getElementById("iscountry").innerHTML = (data[1][0].name);

    document.getElementById("capital").innerHTML = (" Capital City: " + data[1][0].capitalCity);

    document.getElementById("latlong").innerHTML = (" Lat: " + data[1][0].latitude + "     " + " Lng: " + data[1][0].longitude);

    document.getElementById("capital2").innerHTML = (data[1][0].capitalCity);
}
getDataCty(writeCty);

