function initMap() {

    
}

function getLocation() {
    var x = document.getElementById("x");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyAQWYSo3JfLK_MV8s3yaHO0osrv_lDbyck";
    
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}