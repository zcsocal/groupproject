                
var x = document.getElementById("userLocation");
var lat = "";
var lng = "";

function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
}
}
function showPosition(position) {

x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;

lat = position.coords.latitude;
lng = position.coords.longitude;
console.log(lat, lng);

}

function geoSuccess(position) {
    console.log("geoSuccess is called");
 }