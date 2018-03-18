var request = require('request');


   const getWeather = (lng, lat, callback) => {
   
   
   request({
   url: `https://api.darksky.net/forecast/87f3e38fef211606a567ac433e0a211c/${lat},${lng}`,
   json: true
   }, (error, response, body) => {

if (!error && response.statusCode == 200) {
  //(JSON.stringify(body, undefined, 2));
 
callback(undefined, {
temperature: body.currently.temperature,
apparentTemperature: body.currently.apparentTemperature
});

callback("Timestamp: " + body.currently.time);
//callback(getCurrentTime(body.currently.time));




}
else {
console.log(response);
callback("Unable to connect to weather forecast");
}
   


   
   });
   
   
   };
   
   module.exports = {
   getWeather
   
   };
