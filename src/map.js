/*
==========================================
CHANGE THESE TWO VALUES
==========================================

Latitude and longitude of your location.

These coordinates are approximately
central Belgrade.
*/

const latitude = 44.800121;
const longitude = 20.489609;


/*
    ==========================================
    CREATE MAP
    ==========================================
*/

const map = L.map("map", {
    zoomControl: true,

    // Prevent the map from zooming too far out.
    minZoom: 10,

    // Maximum zoom supported by the tile provider.
    maxZoom: 19,
    scrollWheelZoom:false
}).setView(
    [latitude, longitude],
    16
);


/*
    ==========================================
    BLACK & WHITE MAP TILES
    ==========================================

    This is NOT a CSS grayscale filter.

    The actual map tiles are monochrome.
*/

L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png",
    {
    maxZoom: 19,

    attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> ' +
        '&copy; <a href="https://stamen.com/">Stamen Design</a> ' +
        '&copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> ' +
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);


/*
    ==========================================
    CUSTOM BLACK PIN
    ==========================================
*/

const blackPin = L.divIcon({
    className: "black-pin",

    iconSize: [25, 25],

    // Position the point of the pin exactly
    // at the latitude/longitude.
    iconAnchor: [12, 25]
});


/*
    Add the marker
*/

L.marker(
    [latitude, longitude],
    {
    icon: blackPin
    }
).addTo(map);


/*
    ==========================================
    OPTIONAL:
    REMOVE LEAFLET'S DEFAULT ZOOM CONTROL
    ==========================================

    Leave this commented if you want the
    + / - buttons like the screenshot.

    map.zoomControl.remove();
*/