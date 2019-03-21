function getLocation() {
    var x = document.getElementById("x");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPos);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var latitude;
var longitude;
function getPos(pos) {
    var coords = pos.coords;
    latitude = coords.latitude;
    longitude = coords.longitude;
    alert(latitude);
    alert(longitude);
}
function initMap() {
    var latlon = {lat : latitude , lng : longitude};
    alert(latlon);
    alert(latitude);
    alert(longitude);
    var map = new google.maps.Map(document.getElementById("map"),{zoom : 4,center: latlon});

}