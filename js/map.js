        var mymap = L.map('map').setView([52.05175, 13.855472], 14);

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
