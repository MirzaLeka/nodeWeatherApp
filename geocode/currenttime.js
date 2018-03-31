const request = require("request");

var getCurrentTime = (lat, lng, timeStamp) => {

request(
{
url: `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1458000000&key=AIzaSyCNR7Xp0x07H9tpugBJ07qY6D-faLpF-O8`,
json: true
}, (error, response, body) => {

 // console.log(JSON.stringify(body, undefined, 2));

  console.log("==========================")
  //console.log(body.timeZoneId); <- time zone
  formatTime(body.timeZoneId);
  
//console.log(`Offset: ${body.rawOffset}`);
//console.log(calculateTime(timeStamp, body.rawOffset));
}


);


};

var formatTime = (timeZone) => {

  request(
{
  url: `http://api.timezonedb.com/v2/get-time-zone?key=9U2CGP6BEFI4&format=json&by=zone&zone=${timeZone}`,
  json: true
},

(error, response, body) => {

console.log("Current time: " + body.formatted.substring(11));
console.log("Current date: " + body.formatted.substring(0,11));

console.log("==========================")

}
   );

};

// My own calculations. Not very accurate and currently not used

var calculateTime = (timeStamp, rawOffset) => {

var time = 0;

if (rawOffset >= 0) {
  rawOffset-=3600;
}
  time = timeStamp + rawOffset;


var date = new Date(time*1000);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var seconds = "0" + date.getSeconds();

var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

return(`Current time: ${formattedTime}`);

};  

   module.exports = {
   getCurrentTime
   
   };

