// Simple Promise

/*var somePromise = new Promise( (resolve, reject) => {

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
*/

/// Returning Promise

/*
const asynchAdd = (a,b) => {
return new Promise( (resolve, reject) => {
setTimeout( () => {

    if (typeof a == "number" && typeof b == "number") {
        resolve(a+b);
    } else {
        reject("Both arguments must be numbers");
    }

}, 1500);
});

};

asynchAdd(5, 7).then(
(sum) => { console.log(`Sum: ${sum}`); },
(error) => { console.log(error); } ); */

/// Chaining Promises

const asynchAdd = (a,b) => {
    return new Promise( (resolve, reject) => {
    setTimeout( () => {
    
        if (typeof a == "number" && typeof b == "number") {
            resolve(a+b);
        } else {
            reject("Both arguments must be numbers");
        }
    
    }, 1500);
    });
    
    };

    /* Cleaning code up so that we don't continue program
    *Both arguments.. Should be 45, undefined*
    once we get an error:
    
    asynchAdd(5, '7').then(
    (sum) => { console.log(`Sum: ${sum}`); 
    return asynchAdd(sum, 33); }, //posto je ovaj dio vrijedi za resolve, asnychAdd F-ja kada je resolve slucaj ima a+b, kod nas je a == sum, a b == 33
    (error) => { console.log(error); } )
    .then(
    (sum) => { console.log(`Should be 45, ${sum}`); },
    (error) => { console.log("Something went wrong!"); }); */

    asynchAdd(5, 7).then(
        (sum) => { console.log(`Sum: ${sum}`); 
        return asynchAdd(sum, 33); } )
        .then( //uradio si ono gore, then uradi sljedece
        (sum) => { console.log(`Should be 45, ${sum}`); })
        .catch( (error) => {
            console.log(error); //Code Tied up. We won't need to worry about making reject with every then, we just wrap it up into catch
        } );
        
    
    

