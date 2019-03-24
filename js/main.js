var latlon;
    
function error(err) {
    alert(err.code + ":" + err.message);
}

async function getPos(pos) {
    
    var promise = new promise((resolve,reject) => {
        var coords = pos.coords;
        latitude = coords.latitude;
        longitude = coords.longitude;

        if(latitude != null && longitude != null)
        {
            resolve({lat: latitude , lng: longitude});
        }
    });

    latlon = await promise;
    
    

    //alert(latitude + " " + longitude);
    
}

function initMap() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPos,error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    if(latlon != null)
    {
        var map = new google.maps.Map(document.getElementById("map"),{zoom : 14,center: latlon});
        alert("here");
    }else
    {
        alert("Lat and Long are Null");
    }
}