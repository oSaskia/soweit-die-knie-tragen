// Set default coordinates if no marker is defined as the center
let centerCoordinates = [51.0897904, 14.6926595];

// Check if any marker is defined as the center
for (const markerData of markersData) {
    if (markerData["map-center"]) {
        centerCoordinates = markerData.coordinates.split(',').map(Number);
        break;
    }
}

// Initialize the map with the center coordinates
const mymap = L.map('map').setView(centerCoordinates, 10);

// Base layers for the map
const openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors",
    maxZoom: 19
}).addTo(mymap);

const openTopoMapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors, &copy; <a href='https://opentopomap.org' target='_blank'>OpenTopoMap</a> (CC-BY-SA)",
    maxZoom: 17
});

const googleSatLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: "&copy; <a href='https://www.google.com/maps' target='_blank'>Google Maps</a>"
});

// Group base layers for easy switching
const baseMaps = {
    "OpenStreetMap": openStreetMapLayer,
    "OpenTopoMap": openTopoMapLayer,
    "Luftbilder": googleSatLayer
};

// Add the route layer to the map
const layer_routenroute_1 = new L.geoJson(json_routenroute_1, {
    attribution: '',
    interactive: false,
    dataVar: 'json_routenroute_1',
    layerName: 'layer_routenroute_1',
    style: getStyle(mymap.getZoom())
});
mymap.addLayer(layer_routenroute_1);

// Define style for the route layer based on the zoom level
function getStyle(zoom) {
    if (zoom >= 14) {
        return {
            opacity: 1,
            color: 'rgba(190,45,45,1.0)',
            dashArray: '5, 12',
            lineCap: 'round',
            lineJoin: 'round',
            weight: 5.0,
            fillOpacity: 0,
            interactive: true,
        };
    } else {
        return {
            opacity: 1,
            color: 'rgba(190,45,45,1.0)',
            dashArray: '0, 0',
            lineCap: 'round',
            lineJoin: 'round',
            weight: 3.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
}

// Update route style on zoom change
mymap.on('zoomend', function() {
    layer_routenroute_1.setStyle(getStyle(mymap.getZoom()));
});

// Define custom marker icons
const orangeIcon = L.icon({
    iconUrl: './media/marker-icon-orange.png',
    iconSize: [25, 41],
    iconAnchor: [13, 42],
    popupAnchor: [2, -35],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [13, 41]
});

const blueIcon = L.icon({
    iconUrl: './media/marker-icon-blue.png',
    iconSize: [25, 41],
    iconAnchor: [13, 42],
    popupAnchor: [2, -35],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [13, 41]
});

const yellowIcon = L.icon({
    iconUrl: './media/marker-icon-yellow.png',
    iconSize: [25, 41],
    iconAnchor: [13, 42],
    popupAnchor: [2, -35],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [13, 41]
});

// Add layer control for switching base layers
L.control.layers(baseMaps).addTo(mymap);

// Add scale control to the map
L.control.scale({
    metric: true, 
    imperial: false 
}).addTo(mymap);

// Add GeoSearch control with OpenStreetMap provider
const search = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
    autoComplete: true,
    autoCompleteDelay: 250,
    showMarker: true,
    showPopup: false,
});

mymap.addControl(search);

// Function to open an image in fullscreen mode
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

// Store Wikipedia markers to enable toggling
let wikipediaMarkers = [];

// Function to add or remove Wikipedia markers on the map
function toggleWikipediaMarkers(lat, lng, lang = 'en') {
    // Remove existing markers if they are present
    if (wikipediaMarkers.length > 0) {
        wikipediaMarkers.forEach(marker => mymap.removeLayer(marker));
        wikipediaMarkers = [];
    }

    // Fetch and add Wikipedia markers if no markers are present
    fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=10000&gslimit=50&format=json&origin=*`)
        .then(response => response.json())
        .then(data => {
            data.query.geosearch.forEach(article => {
                fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&piprop=thumbnail&pithumbsize=300&titles=${article.title}&format=json&origin=*`)
                    .then(response => response.json())
                    .then(detailData => {
                        const pages = detailData.query.pages;
                        const page = Object.values(pages)[0];
                        const imageUrl = page.thumbnail ? page.thumbnail.source : '';
                        const readMoreText = lang === 'en' ? 'Read more' : 'Mehr lesen';
                        const marker = L.marker([article.lat, article.lon], { icon: yellowIcon }).addTo(mymap);
                        marker.bindPopup(`
                            <div class="popup-content">
                                ${imageUrl ? `<img src="${imageUrl}" alt="${article.title}" class="popup-image" onclick="openFullscreen(this)">` : ''}
                                <h3>${article.title}</h3>
                                <div class="text-container">
                                    ${page.extract}
                                    <a href="https://${lang}.wikipedia.org/wiki/${article.title}" target="_blank">${readMoreText}</a>
                                </div>
                            </div>
                        `);
                        wikipediaMarkers.push(marker);
                    })
                    .catch(error => console.error('Error fetching Wikipedia article details:', error));
            });
        })
        .catch(error => console.error('Error fetching Wikipedia articles:', error));
}
