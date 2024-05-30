        var mymap = L.map('map').setView([51.0897904,14.6926595], 10);

        var openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: "Datenquelle: &copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors",
            maxZoom: 19
        }).addTo(mymap);

        var googleSatLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 19,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: "Datenquelle: &copy; <a href='https://www.google.com/maps' target='_blank'>Google Maps</a>"
        });

        var baseMaps = {
            "OpenStreetMap": openStreetMapLayer,
            "Luftbilder": googleSatLayer
        };

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
        
