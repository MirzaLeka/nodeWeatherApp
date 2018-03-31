const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require("./geocode/weather");

const argv = yargs
.options({
a : {
demand: true,
alias: 'address',
describe: 'Address to fetch weather for',
string: true
}
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
	
 weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
  
if (errorMessage) {
console.log(errorMessage);
}
else {
console.log(`Current temperature is ${weatherResults.temperature} K.
It feels like ${weatherResults.apparentTemperature}.
Temperature Celsius: ${((weatherResults.temperature-32)*5/9).toFixed(0)}`);
} 
 
  });
	// maps & geocode api key
// AIzaSyAfm36tXHM20pZAFIRZ-Z4qG207R7vRxlk

// time zone api key
// AIzaSyCNR7Xp0x07H9tpugBJ07qY6D-faLpF-O8
// example
// https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyCNR7Xp0x07H9tpugBJ07qY6D-faLpF-O8
	
  }
});


