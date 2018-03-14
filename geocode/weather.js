var request = require('request');

   const getWeather = (lng, lat) => {
   
   
   request({
   url: `https://api.darksky.net/forecast/87f3e38fef211606a567ac433e0a211c/${lat},${lng}`,
   json: true
   }, (error, result, body) => {
   
  //(JSON.stringify(body, undefined, 2));
  
  console.log(`Current temperature:
  ${body.currently.temperature} deg K,
  ${((body.currently.temperature-32)*5/9).toFixed(2)} deg C`);

console.log(`Current time: ${body.currently.time}`);



   
   });
   
   
   };
   
   module.exports = {
   getWeather
   
   };
   
   