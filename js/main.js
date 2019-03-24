function error(err) {
    alert(err.code + ":" + err.message);
}

function initMap() {
    
    var latitude;
    var longitude;
    
    function getPos(pos) {
        var coords = pos.coords;
        latitude = coords.latitude;
        longitude = coords.longitude;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPos,error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    var latlon = {lat: latitude , lng: longitude};
    var map = new google.maps.Map(document.getElementById("map"),{zoom : 14,center: latlon});
}