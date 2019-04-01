var latitude;
var longitude;
var latlon;
    
function error(err) {
    alert(err.code + ":" + err.message);
}

function getPos(pos) {
    var coords = pos.coords;
    latitude = coords.latitude;
    longitude = coords.longitude;
}

function initMap() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPos,error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    setTimeout(function(){
        var latlon = {lat: latitude, lng:longitude};
        var map = new google.maps.Map(document.getElementById("map"),{zoom : 14, center: latlon});
    },2000);
}