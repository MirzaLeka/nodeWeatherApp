var somePromise = new Promise( (resolve, reject) => {

if (2 < 3) {
resolve("true");
}
else {
reject("false");
}
});

somePromise.then( (goodMessage) => {
console.log(`Condition: ${goodMessage}!`);
}, (errorMessage) => {
console.log(`Condition: ${errorMessage}!`);
}   );
