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
    navigator.permissions.query({name:'geolocation'}).then(function(result){
        if(result.state == "granted")
        {
            setTimeout(function(){
                var latlon = {lat: latitude, lng:longitude};
                var map = new google.maps.Map(document.getElementById("map"),{zoom : 14, center: latlon});
            },2000);
        }else
        {
            alert("please Enable Geolocation and refresh");
            var Map = document.getElementById("map");
            Map.innerHTML = "<h2>Enable Geolocation To Access Map</h2>";
        }
    });
}