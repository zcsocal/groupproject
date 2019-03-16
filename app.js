                
var x = document.getElementById("userLocation");
var latUser = "";
var lngUser = "";

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

latUser = position.coords.latitude;
lngUser = position.coords.longitude;

//Access to trails with Lat & Lon
    
var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latUser +"&lon=" + lngUser + "&maxDistance=10&key=200430269-7625402c2fab0719cfcddb27c1c9a81c";
console.log(queryURL);
}

