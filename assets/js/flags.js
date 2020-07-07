const ctyFlag = "GW";

const flag = "https://www.countryflags.io/" + ctyFlag + "/shiny/64.png";

//<-------------------World Bank API for Country Capital and Capital Lat & Long';------------------------>

const baseUrlwbcapital = "https://api.worldbank.org/v2/country/" + ctyFlag + "?format=json";

//gets World Bank Country data (Country, Capital, Lat, Long) by Country from API;
function getDataCty (cb) {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("data").innerHTML = xhttp.responseText;
       cb(JSON.parse(this.responseText));
    }
};
xhttp.open("GET", baseUrlwbcapital, true);
xhttp.send();
}
//Writes World Bank Country data (Country, Capital, Lat, Long) by Country from API;
function writeCty(data) {

    document.getElementById("iscountry").innerHTML = (data[1][0].name);

    document.getElementById("flag").innerHTML = ("<img src=" + flag + ">");

    document.getElementById("capital").innerHTML = (" Capital City: " + data[1][0].capitalCity);

    document.getElementById("capital2").innerHTML = (data[1][0].capitalCity);

    document.getElementById("latlong").innerHTML = (" Lat: " + data[1][0].latitude + "     " + " Lng: " + data[1][0].longitude);

}
getDataCty(writeCty);

