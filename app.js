const request = require('request');


var adr = "ustikolina";
var encoded = encodeURIComponent(adr);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
  json: true
}, (error, response, body) => {

if (error) {
console.log("Unable to connect to google service");
}
else if (body.status == "OVER_QUERY_LIMIT") {
console.log("Unable to connect to google service");
}

console.log(JSON.stringify(body, undefined, 2));

console.log("--------------------------------------");

  console.log(`Address: ${body.results[0].formatted_address}`);
  //console.log(adr); 
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`); 
});
