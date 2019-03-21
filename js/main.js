function getLocation() {
    var x = document.getElementById("x");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPos);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var position;
function getPos(pos) {
    position = pos;
}
function initMap() {
    var latlon = {lat : position.coords.latitude , lng : position.coords.longitude};
    var map = new google.maps.Map(document.getElementById("map"),{zoom : 4,center:latlon});

}