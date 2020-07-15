
const count = [];
const poppie = [];

getCsvPoppie();
async function getCsvPoppie() {

const response = await fetch('assets/csv/POPTOTES.csv');
const csv = await response.text();

const verts = csv.substr(0, 517);
const herts = csv.substr(518, 455);
const poppie = herts.split(',').map(x => parseFloat(x, 10));
const count = verts.split(',');

console.log(poppie, count);

new Chart(document.getElementById("popPie"), {
    type: 'pie',
    data: {
      labels: count,
      datasets: [{
        label: "Population (Mns)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: poppie
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Africa Population (Mns) in 2019'
      }
    }
});
}