const mapDiv = document.getElementById('map');
const listing = JSON.parse(mapDiv.getAttribute('data-listing'));

// Default to some coordinates (e.g., New Delhi) if geometry is missing or empty from old data
let coordinates = [77.2090, 28.6139];
if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    coordinates = listing.geometry.coordinates;
}

maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container ID
    style: maptilersdk.MapStyle.STREETS,
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const marker = new maptilersdk.Marker({color:'red'})
    .setLngLat(coordinates) 
    .setPopup(new maptilersdk.Popup({offset: 25}).setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking!</p>`))
    .addTo(map);