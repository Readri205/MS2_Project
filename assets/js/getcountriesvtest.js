let countryCode = ["NG"],
    countries = document.getElementById("CountryList"),
    baseUrlcountrys = "https://referential.p.rapidapi.com/v1/country?fields=currency%25252Ccurrency_num_code%25252Ccurrency_code%25252Ccontinent_code%25252Ccurrency%25252Ciso_a3%25252Cdial_code&continent_code=AF";


    //alert(window.location.pathname.toLoweCase());
    if (window.location.pathname.toLowerCase() === '/country.html') {
    getCountryDetails();
}

// Load the country details into the select control
getDataCountry(writeCountry)

// gets Country Codes for Africa from API in 'open';
function getDataCountry(cb) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhttp.open("GET", baseUrlcountrys, true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", baseUrlcountrys);
    xhttp.setRequestHeader("x-rapidapi-key", "3862ea89d4msh2f04423d9b95ad8p18b07bjsn4fdaaa32a1f6");
    xhttp.send();
}

//  Country Codes by Country from API;
function writeCountry(data) {
        countries.innerHTML += `<option value="">Select Country</option>`;
    data.forEach(function (item) {
        countries.innerHTML += `<option value="${item.key}">${item.value}</option>`;
    });
}

countries.addEventListener("change", function () {
    // Force Redirection
    window.location = `/country.html?country=${countries.value}`;
});

function getCountryDetails() {
    const params = new URLSearchParams(window.location.search)
    countryCode.pop();
    countryCode.push(params.get('country'));

}

