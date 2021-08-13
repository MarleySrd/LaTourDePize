var lat = 47.055417671082665;
var lon = 5.4811642886232015;
var macarte = null;
function initMap() {
    macarte = L.map('map').setView([lat, lon], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
}
window.onload = function () {
    initMap();
    var marker = L.marker([47.06746292114258, 5.454644203186035]).addTo(macarte);
};