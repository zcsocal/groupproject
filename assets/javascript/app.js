                
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
//console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    //console.log(response);
    var results = response.trails;
    for (var i=0 ; i<results.lenght ; i++){
      var titleTd = (results[i].name);
      console.log(titleTd);
    };

  });
};



    // The below code fills in the first row of the table

    // }).then(function(response) {
    //   // Create a new table row element
    //   var tRow = $("<tr>");
    //   console.log(response);

    //   // Methods run on jQuery selectors return the selector they we run on
    //   // This is why we can create and save a reference to a td in the same statement we update its text
    //   var titleTd = $("<td>").text(response.trails[0].name);
    //   var summaryTD= $("<td>").text(response.trails[0].summary);
    
        
    //   // Append the newly created table data to the table row
    //   tRow.append(titleTd);
    //   // Append the table row to the table body
    //   $("tbody").append(tRow);
    // });




