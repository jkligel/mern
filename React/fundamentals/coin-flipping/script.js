function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
    
function fiveHeadsSync() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        while(headsCount < 5){

            if(attempts > 100){
                return reject( new Error(`Error: ${attempts} attempts have been reached!`) );
            }
            
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);

            if(result === "heads"){
                headsCount++;
            } else {
                headsCount = 0;
            }

        }

        console.log(`It took ${attempts} tries to flip five "heads"`);

    })
        
}

fiveHeadsSync()
    .then( res => console.log(res) )
    .catch(err => console.log(err) )

// console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );  