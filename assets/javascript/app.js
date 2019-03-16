                
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

 var queryURL = "https://www.hikingproject.com/data/get-trails?lat=34.052235&lon=-118.243683&maxDistance=10&key=200430269-7625402c2fab0719cfcddb27c1c9a81c";
     
    //Access to trails with Lat & Long

     $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Create a new table row element
      var tRow = $("<tr>");
      console.log(response);
      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.trails[0].name);
      var summaryTD= $("<td>").text(response.trails[0].summary);
    
        
      // Append the newly created table data to the table row
      tRow.append(titleTd);
      // Append the table row to the table body
      $("tbody").append(tRow);
    });