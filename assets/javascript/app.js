                
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

// Map of User Location

// var lon = -118.2;
// var lat = 34;
console.log(lngUser,latUser);
var myMap = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })        
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([lngUser, latUser]),
    zoom: 11
  })
});

var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([lngUser, latUser])
  )
});

var iconStyle = new ol.style.Style({
  image: new ol.style.Icon(({
    anchor: [0.5, 1],
    src: "http://cdn.mapmarker.io/api/v1/pin?text=O&size=50&hoffset=1"
  }))
});

marker.setStyle(iconStyle);

var vectorSource = new ol.source.Vector({
  features: [marker]
});
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});
myMap.addLayer(vectorLayer);


//Access to trails with Lat & Lon
    
var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latUser +"&lon=" + lngUser + "&maxDistance=10&key=200430269-7625402c2fab0719cfcddb27c1c9a81c";
//console.log(queryURL);

//airquality API combined with user's lat & lng

//console.log(airqURL);
var Weatherpop=function(trailsLat,trailsLong,i){
  var airqURL = "https://api.airvisual.com/v2/nearest_city?lat=" + trailsLat + "&lon=" + trailsLong + "&key=zATseQrGoQx73DZX2"; 
  // Amir's API zATseQrGoQx73DZX2
  //XmE3Nd7JzNxP6xarc
  $.ajax({
    url: airqURL,
    method: "GET"}).then(function(response){
      $("#weather"+i).text(response.data.current.pollution.aqicn);
      console.log(response);
    });
};

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    //console.log(response);
    var results = response.trails;
    

    for (var i=0 ; i<results.length ; i++){
      var tRow = $("<tr>");
      var titleTd = $("<td scope = 'col'>");
      var summaryTd = $("<td scope = 'col'>");
      var locationTd = $("<td scope = 'col'>");
      var weatherTD =$("<td id='weather"+i+"' scope = 'col'>");
      titleTd.text(results[i].name);
      summaryTd.text(results[i].summary);
      locationTd.text(results[i].location);
      Weatherpop(results[i].latitude,results[i].longitude,i);
      console.log(results[i]);
      
      tRow.append(titleTd,summaryTd,locationTd,weatherTD);

      $("#tableBody").append(tRow);
      
    };
      
  });
};



//Modal

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    $(userLocation).empty();  
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}




