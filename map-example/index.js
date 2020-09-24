console.log("index.js");

function indexOnLoad() {
    var map = L.map('mapid').setView(new L.LatLng(0, 0), 0);

    L.tileLayer.zoomify('/neal002', {
        width: 5472,
        height: 3648,
        tolerance: 0.8,
        attribution: 'Photo: Bjørn Sandvik'
    }).addTo(map);
}
