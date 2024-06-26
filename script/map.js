// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) return cookie.substring(nameEQ.length);
    }
    return null;
}

// Determine map center and zoom level
let centerCoordinates = defaultCenterCoordinates;
let mapZoom = defaultMapZoom;
let centerMarkerFound = false;

for (const markerData of markersData) {
    if (markerData["map-center"]) {
        centerCoordinates = markerData.coordinates.split(',').map(Number);
        mapZoom = defaultMapZoom;
        centerMarkerFound = true;
        break;
    }
}

if (!centerMarkerFound) {
    const savedCenter = getCookie("mapCenter");
    const savedZoom = getCookie("mapZoom");
    if (savedCenter) {
        centerCoordinates = JSON.parse(savedCenter);
    }
    if (savedZoom) {
        mapZoom = parseInt(savedZoom);
    }
}

const savedLanguage = getCookie("mapLanguage") || "en";
const savedBasemap = getCookie("mapBasemap") || "OpenStreetMap";
const savedWikiStatus = getCookie("wikiStatus") || defaultWikiStatus;

// Initialize the map
const mymap = L.map('map').setView(centerCoordinates, mapZoom);

// Base map layers
const openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
});

const openTopoMapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: "&copy; OpenStreetMap contributors, &copy; OpenTopoMap (CC-BY-SA)",
    maxZoom: 17
});

const googleSatLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: "&copy; Google Maps"
});

// Base map selection
const baseMaps = {
    "OpenStreetMap": openStreetMapLayer,
    "OpenTopoMap": openTopoMapLayer,
    "Luftbilder": googleSatLayer
};

baseMaps[savedBasemap].addTo(mymap);
L.control.layers(baseMaps).addTo(mymap);
L.control.scale({ metric: true, imperial: false }).addTo(mymap);

// GeoSearch control for searching locations
const searchControl = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
    autoComplete: true,
    autoCompleteDelay: 250
});
mymap.addControl(searchControl);

// Custom marker icons
const yellowIcon = L.icon({
    iconUrl: './media/marker-icon-yellow.png',
    iconSize: [25, 41],
    iconAnchor: [13, 42],
    popupAnchor: [2, -35],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [13, 41]
});

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

// Store Wikipedia markers to enable toggling
let wikipediaMarkers = L.markerClusterGroup({ disableClusteringAtZoom: 17 });
let loadedArticles = new Set();
let currentLang = savedWikiStatus.toLowerCase() === 'off' ? 'en' : savedWikiStatus.toLowerCase();
let wikipediaEnabled = savedWikiStatus !== 'Off';

// Translations for "Read more"
const readMoreTranslations = {
    en: "Read more",
    de: "Mehr lesen",
    es: "Leer más",
    fr: "Lire la suite",
    ru: "Читать далее",
    it: "Leggi di più",
    ar: "اقرأ أكثر",
    nl: "Lees meer",
    ceb: "Basaha pa",
    sv: "Läs mer"
};

// Function to add Wikipedia markers on the map
function loadWikipediaMarkers(center, lang = 'en') {
    const { lat, lng } = center;
    
    if (!wikipediaEnabled) {
        wikipediaMarkers.clearLayers();
        return;
    }

    fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=10000&gslimit=500&format=json&origin=*`)
        .then(response => response.json())
        .then(data => {
            if (!data.query) {
                console.error('No query property in the Wikipedia API response:', data);
                return;
            }
            data.query.geosearch.forEach(article => {
                if (!loadedArticles.has(article.pageid)) {
                    loadedArticles.add(article.pageid);
                    fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&explaintext&piprop=thumbnail&pithumbsize=600&titles=${article.title}&format=json&origin=*`)
                        .then(response => response.json())
                        .then(detailData => {
                            const page = Object.values(detailData.query.pages)[0];
                            const imageUrl = page.thumbnail ? page.thumbnail.source : '';
                            const readMoreText = readMoreTranslations[lang] || readMoreTranslations['en'];
                            const googleMapsLink = `https://www.google.com/maps?q=${article.lat},${article.lon}`;
                            const marker = L.marker([article.lat, article.lon], { icon: yellowIcon });
                            marker.bindPopup(`
                                <div class="popup-content">
                                    ${imageUrl ? `<img src="${imageUrl}" alt="${article.title}" class="popup-image" onclick="openFullscreen(this)">` : ''}
                                    <h3>${article.title}</h3>
                                    <div class="text-container">
                                        ${page.extract}
                                        <a href="https://${lang}.wikipedia.org/wiki/${article.title}" target="_blank">${readMoreText}</a>
                                    </div>
                                    <div class="links-container">
                                        <a href="${googleMapsLink}" target="_blank" class="link-button">Google Maps</a>
                                    </div>
                                </div>
                            `);
                            wikipediaMarkers.addLayer(marker);
                        })
                        .catch(error => console.error('Error fetching Wikipedia article details:', error));
                }
            });
        })
        .catch(error => console.error('Error fetching Wikipedia articles:', error));
}

// Add Wikipedia markers to the map
mymap.addLayer(wikipediaMarkers);

// Load Wikipedia markers on map move end
mymap.on('moveend', () => {
    const center = mymap.getCenter();
    const zoom = mymap.getZoom();
    setCookie("mapCenter", JSON.stringify(center), 7);
    setCookie("mapZoom", zoom, 7);
    if (wikipediaEnabled) {
        loadWikipediaMarkers(center, currentLang);
    }
});

// Initialize with the current map center
if (wikipediaEnabled) {
    loadWikipediaMarkers(mymap.getCenter(), currentLang);
}

// Save base map selection in cookies
mymap.on('baselayerchange', (e) => {
    setCookie("mapBasemap", e.name, 7);
});

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

// Add location control to the map
L.control.locate({
    strings: { title: "Show me where I am" }
}).addTo(mymap);

// Add cascade buttons to control Wikipedia functionality
const wikiButton = new L.cascadeButtons([
    {
        icon: 'fa-brands fa-wikipedia-w', 
        items: [
            {
                icon: '', 
                text: 'Off', 
                command: () => {
                    wikipediaEnabled = false;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    setCookie("wikiStatus", 'Off', 7);
                    console.log('Wikipedia-Funktion deaktiviert');
                }
            },
            {
                icon: '', 
                text: 'DE', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'de';
                    setCookie("mapLanguage", 'de', 7);
                    setCookie("wikiStatus", 'DE', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'de');
                    console.log('Wikipedia-Sprache auf Deutsch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'EN', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'en';
                    setCookie("mapLanguage", 'en', 7);
                    setCookie("wikiStatus", 'EN', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'en');
                    console.log('Wikipedia-Sprache auf Englisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'ES', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'es';
                    setCookie("mapLanguage", 'es', 7);
                    setCookie("wikiStatus", 'ES', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'es');
                    console.log('Wikipedia-Sprache auf Spanisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'FR', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'fr';
                    setCookie("mapLanguage", 'fr', 7);
                    setCookie("wikiStatus", 'FR', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'fr');
                    console.log('Wikipedia-Sprache auf Französisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'RU', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'ru';
                    setCookie("mapLanguage", 'ru', 7);
                    setCookie("wikiStatus", 'RU', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'ru');
                    console.log('Wikipedia-Sprache auf Russisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'IT', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'it';
                    setCookie("mapLanguage", 'it', 7);
                    setCookie("wikiStatus", 'IT', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'it');
                    console.log('Wikipedia-Sprache auf Italienisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'AR', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'ar';
                    setCookie("mapLanguage", 'ar', 7);
                    setCookie("wikiStatus", 'AR', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'ar');
                    console.log('Wikipedia-Sprache auf Ägyptisch-Arabisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'NL', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'nl';
                    setCookie("mapLanguage", 'nl', 7);
                    setCookie("wikiStatus", 'NL', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'nl');
                    console.log('Wikipedia-Sprache auf Niederländisch gesetzt');
                }
            },
            {
                icon: '', 
                text: 'CEB', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'ceb';
                    setCookie("mapLanguage", 'ceb', 7);
                    setCookie("wikiStatus", 'CEB', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'ceb');
                    console.log('Wikipedia-Sprache auf Cebuano gesetzt');
                }
            },
            {
                icon: '', 
                text: 'SV', 
                command: () => {
                    wikipediaEnabled = true;
                    wikipediaMarkers.clearLayers();
                    loadedArticles.clear();
                    currentLang = 'sv';
                    setCookie("mapLanguage", 'sv', 7);
                    setCookie("wikiStatus", 'SV', 7);
                    loadWikipediaMarkers(mymap.getCenter(), 'sv');
                    console.log('Wikipedia-Sprache auf Schwedisch gesetzt');
                }
            }
        ]
    }
], { position: 'topright', direction: 'horizontal' }).addTo(mymap);

// Hide wiki buttons when clicking outside
mymap.on('click', () => {
    const buttons = document.querySelectorAll('.leaflet-control-cascadeButtons button');
    buttons.forEach((button, index) => {
        if (index !== 0) button.classList.add('hidden');
    });
    const mainButton = document.querySelector('.leaflet-control-cascadeButtons button');
    mainButton.classList.remove('activeButton');
    mainButton.setAttribute('aria-expanded', 'false');
});

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

// Class to handle marker content
class MarkerContent {
    constructor(lat, lng, date, title, mediaType, mediaSrc, description, icon) {
        this.lat = lat;
        this.lng = lng;
        this.date = date;
        this.title = title;
        this.mediaType = mediaType;
        this.mediaSrc = mediaSrc;
        this.description = description;
        this.icon = icon || blueIcon; // Default icon if not specified
    }

    // Generate the HTML content for the popup
    generateContent() {
        let mediaElement;
        if (this.mediaType === 'video') {
            mediaElement = `<video controls><source src="${this.mediaSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
        } else if (this.mediaType === 'image') {
            mediaElement = `<img src="${this.mediaSrc}" alt="Foto" class="popup-image" onclick="openFullscreen(this)">`;
        }

        const descriptionHTML = this.description.split('|||').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');

        return `
            <div class="popup-content">
                ${mediaElement}
                <h3>${this.title}</h3>
                <div class="date">${this.date}</div>
                <div class="text-container">${descriptionHTML}</div>
                <div class="links-container">
                    <a href="https://www.google.com/maps?q=${this.lat},${this.lng}" target="_blank" class="link-button">Google Maps</a>
                </div>
            </div>
        `;
    }

    // Add the marker to the map
    addToMap(map) {
        const content = this.generateContent();
        L.marker([this.lat, this.lng], { icon: this.icon })
            .addTo(map)
            .bindPopup(content)
            .closePopup();
    }
}

// Function to create markers from the provided data
function createMarkers() {
    if (!showCustomMarkers) return;

    for (const markerData of markersData) {
        const [lat, lng] = markerData.coordinates.split(',').map(Number);
        const icon = markerData.markerType === 'orange' ? orangeIcon : blueIcon;
        const marker = new MarkerContent(
            lat,
            lng,
            markerData.date,
            markerData.title,
            markerData.mediaType,
            markerData.mediaSrc,
            markerData.description,
            icon
        );
        marker.addToMap(mymap);
    }
}

// Initialize and add markers to the map
createMarkers();
