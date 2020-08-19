//------------------Total Population Graph from CSV---------------------------->
getCsvPop();
async function getCsvPop() {
	const response = await fetch('assets/csv/pop.csv');
	const csv = await response.text();
	const verts = csv.substr(0, 361);
	const herts = csv.substr(362, 611);
	const vaxis = verts.split(',').map(x => parseFloat(x, 10));
	const haxis = herts.split(',');
	const totPop = document.getElementById('totPop').getContext('2d');
	//<-------------Graphs Population from CSV--------------->	
	Chart.defaults.global.defaultFontFamily = 'Roboto';
	Chart.defaults.global.defaultFontColor = '#000000';
	new Chart(totPop, {
		type: 'line',
		data: {
			labels: haxis,
			datasets: [{
				label: '(Mns) 1970 to 2019',
				data: vaxis,
				fill: true,
				backgroundColor: "rgba(139,0,0, 0.4)",
				borderColor: "rgba(139,0,0, 0.4)",
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						maxTicksLimit: 7,
					}
				}]
			},
			title: {
				display: true,
				text: 'Africa Population'
			}
		}
	});
}
//--------------------GDP Total Graph--------------------------------------------->
getCsvGdp();
async function getCsvGdp() {
	const response = await fetch('assets/csv/gdp.csv');
	const csvgdp = await response.text();
	const virts = csvgdp.substr(0, 362);
	const hirts = csvgdp.substr(363, 612);
	const vaxs = virts.split(',').map(x => parseFloat(x, 10));
	const haxs = hirts.split(',');
	const totGdp = document.getElementById('totGdp').getContext('2d');
	//--------------------Graph GDP Total from CSV--------------------------------------------->
	new Chart(totGdp, {
		type: 'line',
		data: {
			labels: haxs,
			datasets: [{
				label: 'US$ (Bns) 1970 to 2019',
				data: vaxs,
				backgroundColor: "rgba(139,0,0, 0.4)",
				borderColor: "rgba(139,0,0, 0.4)",
				fill: true,
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						maxTicksLimit: 6,
						beginAtZero: true,
						callback: function (value) {
							return "$" + value;
						}
					}
				}]
			},
			title: {
				display: true,
				text: 'Africa GDP'
			}
		}
	});
}
//--------------------Manualy Graph land sizes for World Bank regions--------------------------->
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultFontSize = 8;
new Chart(document.getElementById("landPie"), {
	type: 'pie',
	data: {
		labels: ["Africa", "Latin America & Caribbean", "South Asia", "North America", "Middle East", "Europe & Central Asia", "East Asia"],
		datasets: [{
			label: " Land Size (Mns) Sq. Kms",
			backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#3e95cd", "#2f4f4f", "#f0e68c"],
			data: [29.51, 20.04, 4.77, 18.24, 5.46, 27.43, 24.40]
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Land Size (Mns) Sq. Kms'
		},
		legend: {
			position: "right",
		}
	}
});
//--------------------Manualy Graph population sizes for World Bank regions--------------------------->
new Chart(document.getElementById("popPie"), {
	type: 'pie',
	data: {
		labels: ["Africa", "Latin America & Caribbean", "South Asia", "North America", "Middle East", "Europe & Central Asia", "East Asia"],
		datasets: [{
			label: " Population in Bns",
			backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#3e95cd", "#2f4f4f", "#f0e68c"],
			data: [1.31, 0.65, 1.84, 0.37, 0.26, 0.92, 2.34]
		}]
	},
	options: {
		title: {
			display: true,
			text: 'World Population (Bns) in 2019'
		},
		legend: {
			position: "right"
		}
	}
});
//--------------------Manualy Graph GDP sizes for World Bank regions--------------------------->
new Chart(document.getElementById("gdpPie"), {
	type: 'pie',
	data: {
		labels: ["Africa", "Latin America & Caribbean", "South Asia", "North America", "Middle East", "Europe & Central Asia", "East Asia"],
		datasets: [{
			label: " GDP in US$Tns",
			backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#3e95cd", "#2f4f4f", "#f0e68c"],
			data: [2.44, 5.72, 3.60, 23.17, 3.012, 22.75, 26.98]
		}]
	},
	options: {
		title: {
			display: true,
			text: 'World GDP (US$Tns) in 2019'
		},
		legend: {
			position: "right"
		}
	}
});