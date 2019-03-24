var latitude;
var longitude;
var latlon;
    
function error(err) {
    alert(err.code + ":" + err.message);
}

async function getPos(pos) {
    
    /*var promise = new Promise((resolve,reject) => {
        var coords = pos.coords;
        latitude = coords.latitude;
        longitude = coords.longitude;

        if(latitude != null && longitude != null)
        {
            resolve({lat: latitude , lng: longitude});
        }
    });

    latlon = await promise;
    alert(latlon);*/
    
    var coords = pos.coords;
    latitude = coords.latitude;
    longitude = coords.longitude;


    //alert(latitude + " " + longitude);
    
}

function getLatLon() {
    return {lat: latitude , lng: longitude};
}

function initMap() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPos,error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    var map = new google.maps.Map(document.getElementById("map"),{zoom : 14,center: getLatLon()});
}