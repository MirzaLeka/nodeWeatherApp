var request = require("request");
var weather = require("./weather");
var map = require("./map");

var geocodeAddress = (address, callback) => {

var encodedAddress = encodeURIComponent(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAfm36tXHM20pZAFIRZ-Z4qG207R7vRxlk`,
  json: true
}, (error, response, body) => {

if (error) {
callback('Unable to connect to Google serves.');
}
else if (body.status === 'ZERO_RESULTS'){
callback("Unable to find that address");
}
else if (body.status == "OVER_QUERY_LIMIT") {
callback("Query limit reached");
}
else if (body.status === "OK") {


//console.log(JSON.stringify(body, undefined, 2));

console.log("---------------------------------------");
console.log("---------------------------------------");
console.log("---------------------------------------");

console.log("City: " + body.results[0].address_components[1].long_name);
console.log("Latitude: " + body.results[0].geometry.location.lat);
console.log("Longitude: " + body.results[0].geometry.location.lng);

    callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
	  
	



}


// google maps below
//  map.mapInit(body.results[0].geometry.location.lat, body.results[0].geometry.location.lng);

});

// geocode api example
// https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

}

module.exports = {
geocodeAddress

};

