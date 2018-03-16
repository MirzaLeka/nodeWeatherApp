var request = require("request");
var weather = require("./weather");
var map = require("./map");

var geocodeAddress = (address, callback) => {

var encodedAddress = encodeURIComponent(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
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
/*
console.log("---------------------------------------");
console.log("---------------------------------------");
console.log("---------------------------------------");*/

    callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
	  
	



}


// google maps below
//  map.mapInit(body.results[0].geometry.location.lat, body.results[0].geometry.location.lng);

});



}

module.exports = {
geocodeAddress

};

