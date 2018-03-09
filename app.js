const request = require ("request");

request({
url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%2020%20philadelphia",
xml: true
}, (error, response, body) => {
console.log(body);


}  );