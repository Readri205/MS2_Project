//<-------------------World Bank API for Country land Size';------------------------>
const baseUrlwblandcount = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/AG.LND.TOTL.K2?format=json";
//GETs World Bank land size by Country from API;
function getDataLand(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwblandcount, true);
	xhttp.send();
}
//<--------------Writes World Bank land size data by Country from API (1970 to current);-------------->
function writeLand(data) {
	if (countryCode == "SD") {
		item = data[1][1];
		countland = 1886068 / 1000000;
	} else if (countryCode == "SS") {
		item = data[1][1];
		countland = 619745 / 1000000;
	} else {
		item = data[1][1];
		countland = item.value / 1000000;
	}
	const roaland = (29.509744 - countland);
	//<----------------Graphs World Bank Land Size by Country from API ;------------------>
	Chart.defaults.global.defaultFontFamily = 'Roboto';
	Chart.defaults.global.defaultFontColor = '#000000';
	Chart.defaults.global.defaultFontSize = 10;
	new Chart(document.getElementById("landPie"), {
		type: 'pie',
		data: {
			labels: [item.country.value, "Rest of Africa"],
			datasets: [{
				label: " Land Size in (Mns) Sq. Kms",
				backgroundColor: ["#e8c3b9", "#c45850"],
				data: [countland.toFixed(2), roaland.toFixed(2)]
			}]
		},
		options: {
			title: {
				display: true,
				text: ['Land Size (Mns) Sq. Kms v Rest of Africa'],
				fontFamily: "Exo"
			},
			legend: {
				position: "right"
			}
		}
	});
}
getDataLand(writeLand);
//<--World Bank API for Country Population 1970 to Current Year';------------>
const baseUrlwbpopcount = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/SP.POP.TOTL?format=json";
//<-----GETs World Bank Population data by Country from API;--------->
function getDataPop(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwbpopcount, true);
	xhttp.send();
}
//<----Writes World Bank Population data by Country from API;---------->
function writePop(data) {
	const item = data[1][0];
	const countpop = item.value / 1000000;
	const roapop = (1303 - countpop);
	//<----------------Graphs World Bank Population data by Country from API (the proper way around...);------------------>
	new Chart(document.getElementById("popPie"), {
		type: 'pie',
		data: {
			labels: [item.country.value, "Rest of Africa"],
			datasets: [{
				label: " Population in Mns",
				backgroundColor: ["#e8c3b9", "#c45850"],
				data: [countpop.toFixed(2), roapop.toFixed(2)]
			}]
		},
		options: {
			title: {
				display: true,
				text: ['Population (Mns) v Rest of Africa', item.date]
			},
			legend: {
				position: "right"
			}
		}
	});
}
getDataPop(writePop);
//<-------------------World Bank API for Country GDP 1970 to Current Year';------------------------>
const baseUrlwbgdpcount = "https://api.worldbank.org/v2/country/" + countryCode + "/indicator/NY.GDP.MKTP.CD?format=json";
//<-------------------GETs World Bank GDP data by Country from API;------------------------>
function getDataGdp(cb) {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", baseUrlwbgdpcount, true);
	xhttp.send();
}
//<---------Graphs World Bank GDP data by Country from API;----------->
function writeGdp(data) {
	const item = data[1][0];
	const countgdp = item.value / 1000000000;
	const roagdp = (2425 - countgdp);
	new Chart(document.getElementById("gdpPie"), {
		type: 'pie',
		data: {
			labels: [item.country.value, "Rest of Africa"],
			datasets: [{
				label: " GDP in Bns",
				backgroundColor: ["#e8c3b9", "#c45850"],
				data: [countgdp.toFixed(2), roagdp.toFixed(2)]
			}]
		},
		options: {
			title: {
				display: true,
				text: ['GDP (Bns) v Rest of Africa', item.date]
			},
			legend: {
				position: "right"
			}
		}
	});
}
getDataGdp(writeGdp);
//<---------Writes World Bank Land data for Top Five Country from CSV;----------->
getCsvLand();
async function getCsvLand() {
	const response = await fetch('assets/csv/land.csv');
	const csv = await response.text();
	const verts = csv.substr(0, 505);
	const herts = csv.substr(506, 374);
	const lands = herts.split(',').map(x => parseFloat(x, 10));
	const coun = verts.split(',');
	const topcount = [coun[53], coun[52], coun[51], coun[50], coun[49], "Rest of Africa"];
	const restlands = [((lands[54] - (lands[53] + lands[52] + lands[51] + lands[50] + lands[49])) / 1000000).toFixed(2)];
	const toplands = [(lands[53] / 1000000).toFixed(2), (lands[52] / 1000000).toFixed(2), (lands[51] / 1000000).toFixed(2), (lands[50] / 1000000).toFixed(2), (lands[49] / 1000000).toFixed(2), restlands];
	//<---------Graphs World Bank land data by Country from CSV;----------->  
	new Chart(document.getElementById("landTop"), {
		type: 'pie',
		data: {
			labels: topcount,
			datasets: [{
				label: " Land Sizes in Sq. Kms",
				backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#3e95cd", "#2f4f4f"],
				data: toplands,
			}]
		},
		options: {
			title: {
				display: true,
				text: ['Top 5 Africa Land Sizes (Mns) Sq. Kms']
			},
			legend: {
				position: "right"
			}
		}
	});
}
getDataLand(writeLand);
//<---------Writes World Bank POP data for Top Five Country from CSV;----------->
getCsvPoppie();
async function getCsvPoppie() {
	const response = await fetch('assets/csv/poptotes.csv');
	const csv = await response.text();
	const verts = csv.substr(0, 503);
	const herts = csv.substr(504, 455);
	const poppie = herts.split(',').map(x => parseFloat(x, 10));
	const count = verts.split(',');
	const topfivecount = [count[33], count[40], count[50], count[10], count[16], "Rest of Africa"];
	const restpop = [((1302819408 - (poppie[33] + poppie[16] + poppie[50] + poppie[10] + poppie[40])) / 1000000).toFixed(2)];
	const topfivepop = [(poppie[33] / 1000000).toFixed(2), (poppie[40] / 1000000).toFixed(2), (poppie[50] / 1000000).toFixed(2), (poppie[10] / 1000000).toFixed(2), (poppie[16] / 1000000).toFixed(2), restpop];
	//<---------Graphs World Bank POP data for Top Five Country from CSV;----------->
	new Chart(document.getElementById("popTop"), {
		type: 'pie',
		data: {
			labels: topfivecount,
			datasets: [{
				label: " Population in Mns",
				backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#3e95cd", "#2f4f4f"],
				data: topfivepop,
			}]
		},
		options: {
			title: {
				display: true,
				text: ['Top Five Africa Populations (Mns) 2019']
			},
			legend: {
				position: "right"
			}
		}
	});
}
getDataPop(writePop);
//<---------Writes World Bank GDP data for Top Five Country from CSV ;----------->
getCsvGdppie();
async function getCsvGdppie() {
	const response = await fetch('assets/csv/gdptotes.csv');
	const csv = await response.text();
	const verts = csv.substr(0, 503);
	const herts = csv.substr(504, 1124);
	const gdppie = herts.split(',').map(x => parseFloat(x, 10));
	const counts = verts.split(',');
	const topfivecounts = [counts[53], counts[52], counts[51], counts[50], counts[49], "Rest of Africa"];
	const restgdp = [((2424529223027 - (gdppie[53] + gdppie[52] + gdppie[51] + gdppie[50] + gdppie[49])) / 1000000000).toFixed(2)];
	const topfivegdp = [(gdppie[53] / 1000000000).toFixed(2), (gdppie[52] / 1000000000).toFixed(2), (gdppie[51] / 1000000000).toFixed(2), (gdppie[50] / 1000000000).toFixed(2), (gdppie[49] / 1000000000).toFixed(2), restgdp];
	//<---------Graphs World Bank GDP data for Top Five Country from CSV;----------->
	new Chart(document.getElementById("gdpTop"), {
		type: 'pie',
		data: {
			labels: topfivecounts,
			datasets: [{
				label: " GDP in Bns",
				backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#3e95cd", "#2f4f4f"],
				data: topfivegdp,
			}]
		},
		options: {
			title: {
				display: true,
				text: ['Top Five Africa GDP (Bns) 2019']
			},
			legend: {
				position: "right"
			}
		}
	});
}