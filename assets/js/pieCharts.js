


new Chart(document.getElementById("popPie"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Latin America & Caribbean", "South Asia", "North America", "Middle East", "Europe & Central Asia", "East Asia & Pacific"],
      datasets: [{
        label: " GDP in Bns",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f","#f0e68c"],
        data: [1306, 646, 1836, 366, 257, 921, 2340]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'World Population (Mns) in 2019'
      }
    }
});

new Chart(document.getElementById("gdpPie"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Latin America & Caribbean", "South Asia", "North America", "Middle East", "Europe & Central Asia", "East Asia & Pacific"],
      datasets: [{
        label: " GDP in Bns",
        backgroundColor: ["#c45850", "#8e5ea2","#3cba9f","#e8c3b9","#3e95cd","#2f4f4f","#f0e68c"],
        data: [2441, 5719, 3598, 23171, 3015, 22749, 26980]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'World GDP (Bns) in 2019'
      }
    }
});