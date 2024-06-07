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
                    <div class="wiki-buttons">
                        <button onclick="toggleWikipediaMarkers(${this.lat}, ${this.lng}, 'en')" class="link-button half-width">Wiki (EN)</button>
                        <button onclick="toggleWikipediaMarkers(${this.lat}, ${this.lng}, 'de')" class="link-button half-width">Wiki (DE)</button>
                    </div>
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
