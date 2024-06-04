class MarkerContent {
    constructor(lat, lng, date, title, mediaType, mediaSrc, description, icon) {
        this.lat = lat;
        this.lng = lng;
        this.date = date;
        this.title = title;
        this.mediaType = mediaType;
        this.mediaSrc = mediaSrc;
        this.description = description;
        this.icon = icon || blueIcon; // Default icon
    }

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
                        <a href="https://en.wikipedia.org/wiki/Special:Nearby#/coord/${this.lat},${this.lng}" target="_blank" class="link-button half-width">Wiki (EN)</a>
                        <a href="https://de.wikipedia.org/wiki/Spezial:In_der_N%C3%A4he#/coord/${this.lat},${this.lng}" target="_blank" class="link-button half-width">Wiki (DE)</a>
                    </div>
                </div>
            </div>
        `;
    }

    addToMap(map) {
        const content = this.generateContent();
        L.marker([this.lat, this.lng], { icon: this.icon })
            .addTo(map)
            .bindPopup(content)
            .closePopup();
    }
}

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

createMarkers();
