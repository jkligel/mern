// Nested promises, a.k.a. callback hell
function oneAfterAnother(startingVal) {
    firstFunc(startingVal)
        .then(firstResult => {
            secondFunc(firstResult)
                .then(secondResult => /* do something with the second result */)
                .catch(console.log)
        })
        .catch(console.log);
}

/* 
One way is to flatten out the nesting 
and return a promise from our first then callback as in the following:
*/
function oneAfterAnother(startingVal) {
        firstFunc(startingVal)
            .then(secondFunc) // equivalent to .then(firstResult => secondFunc(firstResult))
            .then(secondResult => /* do something with the second result */)
            .catch(console.log); // logs out error if thrown
    }

    
// Let's see the above function rewritten in an async/await fashion:
async function oneAfterAnother(startingVal) {
        const firstResult = await firstFunc(startingVal);
        const secondResult = await secondFunc(firstResult);
     
        return secondResult;
    }

// To wrap your code in a try/catch block in case your promise is rejected:
async function oneAfterAnother() {
        try {
            const firstResult = await firstFunc();
            const secondResult = await secondFunc(firstResult);
     
            return secondResult;
        } catch(err) {
            // do something with the error here
        }
    }
    
    