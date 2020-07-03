const mymap = L.map("africaMap").setView([51.505, -0.09], 13);

L.mapbox.accessToken = "pk.eyJ1IjoicmVhZHJpMjA1IiwiYSI6ImNrYzU1dGFjbjBlamwyc3RpZmtpeGNjcTYifQ.nhMHaWYNmRRyAeYUBuPJrA";
        
        const attribution = '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

        const tileSize = 512;
        const maxZoom = 18;
        const zoomOffset = -1;

        const tileUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + L.mapbox.accessToken;
        const tiles = L.tileLayer(tileUrl, { attribution }, tileSize, maxZoom, zoomOffset);
        
        tiles.addTo(mymap);