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

callback(body.currently.time);
callback(getCurrentTime(body.currently.time));


}
else {
callback("Unable to connect to weather forecast");
}
   


   
   });
   
   
   };
   
   module.exports = {
   getWeather
   
   };
   
function getCurrentTime(time) {

var date = new Date(time*1000);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var seconds = "0" + date.getSeconds();

var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

return(`Current time: ${formattedTime}`);


}   