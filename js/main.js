var latitude;
var longitude;
function getPos(pos) {
    var coords = pos.coords;
    latitude = coords.latitude;
    longitude = coords.longitude;
}
function error(err) {
    alert(err.code + ":" + err.message);
}
function getLocation() {
    var x = document.getElementById("x");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPos,error);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function initMap() {
    var latlon = {lat: latitude , lng: longitude};
    var map = new google.maps.Map(document.getElementById("map"),{zoom : 14,center: latlon});
}