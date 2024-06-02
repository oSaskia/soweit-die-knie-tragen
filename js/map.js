var mymap = L.map('map').setView([50.9555981,14.5500692], 10);

var openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors",
    maxZoom: 19
}).addTo(mymap);

var openTopoMapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors, &copy; <a href='https://opentopomap.org' target='_blank'>OpenTopoMap</a> (CC-BY-SA)",
    maxZoom: 17
});

var googleSatLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: "&copy; <a href='https://www.google.com/maps' target='_blank'>Google Maps</a>"
});

var baseMaps = {
    "OpenStreetMap": openStreetMapLayer,
    "OpenTopoMap": openTopoMapLayer,
    "Luftbilder": googleSatLayer
};

var layer_routenroute_1 = new L.geoJson(json_routenroute_1, {
    attribution: '',
    interactive: false,
    dataVar: 'json_routenroute_1',
    layerName: 'layer_routenroute_1',
    style: getStyle(mymap.getZoom())
});
mymap.addLayer(layer_routenroute_1);

function getStyle(zoom) {
    if (zoom >= 14) {
        return {
            opacity: 1,
            color: 'rgba(190,45,45,1.0)', // Rote Farbe
            dashArray: '5, 12', // Muster für größere Punkte: 0 Pixel Linie (Punkt), 20 Pixel Lücke
            lineCap: 'round', // Enden der Linie sind rund, um Punkte zu erzeugen
            lineJoin: 'round', // Ecken der Linie sind rund
            weight: 5.0, // Breite der Linie, um die Größe der Punkte anzupassen
            fillOpacity: 0,
            interactive: true,
        };
    } else {
        return {
            opacity: 1,
            color: 'rgba(190,45,45,1.0)', // Rote Farbe
            dashArray: '0, 0', // Muster für kleinere Punkte: 0 Pixel Linie (Punkt), 10 Pixel Lücke
            lineCap: 'round', // Enden der Linie sind rund, um Punkte zu erzeugen
            lineJoin: 'round', // Ecken der Linie sind rund
            weight: 3.0, // Breite der Linie, um die Größe der Punkte anzupassen
            fillOpacity: 0,
            interactive: true,
        };
    }
}

mymap.on('zoomend', function() {
    layer_routenroute_1.setStyle(getStyle(mymap.getZoom()));
});

var orangeIcon = L.icon({
    iconUrl: './js/marker-icon-orange.png',
    iconSize: [25, 41], // Größe des Icons
    iconAnchor: [13, 42], // Punkt, der dem Marker auf der Karte entspricht
    popupAnchor: [2, -35], // Punkt, von dem aus der Popup ausgeht
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Standard-Shadow von Leaflet
    shadowSize: [41, 41], // Größe des Schattens
    shadowAnchor: [13, 41] // Punkt, der dem Schatten auf der Karte entspricht
});

L.control.layers(baseMaps).addTo(mymap);

L.control.scale({
    metric: true, 
    imperial: false 
}).addTo(mymap);

// Geosearch mit OpenStreetMap-Geocoder hinzufügen
const search = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
    autoComplete: true, // Automatische Vervollständigung aktivieren
    autoCompleteDelay: 250, // Verzögerung in Millisekunden
    showMarker: true, // Zeigt einen Marker für das Suchergebnis an
    showPopup: false, // Deaktiviert das Popup für den Marker
});

mymap.addControl(search);

// Foto Fullscreen
function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
}
