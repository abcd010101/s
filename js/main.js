var map = L.map('map').setView([43.7166; -79.7888], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([43.7166; -79.7888]).addTo(map);

marker.bindPopup("very <b>cool</b> place. <br> hlss coords").openPopup();
