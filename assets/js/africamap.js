//Africa map
const africamap = L.map("africaMap").setView([1.6155, 16.0464], 3);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      '© <a href="https://apps.mapbox.com/feedback/">Mapbox Imagery</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap Data</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoicmVhZHJpMjA1IiwiYSI6ImNrYzU1dGFjbjBlamwyc3RpZmtpeGNjcTYifQ.nhMHaWYNmRRyAeYUBuPJrA",
  }
).addTo(africamap);
