const countrymap = L.map('countryMap').setView([9.0765, 7.3986], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVhZHJpMjA1IiwiYSI6ImNrYzU2YW13bzBlcjcycW1pZXBhejllYTUifQ.2HGnkodTpY_qhwDhTF9Aqw'
}).addTo(countrymap);