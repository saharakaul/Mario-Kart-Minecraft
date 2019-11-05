// MineCraft Fishin Simulator
'use strict';
//Global Variables
let numFish = 0;
let numSalmon = 0;
let numPuffer = 0;
let numClown = 0;
let numJunk = 0;
let numTreasure = 0;

//Event Listener
document.getElementById('mainImg').addEventListener('click', catchFish)

function catchFish() {
    //Generate Random Number
    let randNum = Math.random(); //Random decimal from 0 up to one

    // Simulate results 
    if (randNum < 0.85) {
        // Catch Fish- Simulate what type of fish to catch
        let randFish = Math.random();

        if (randFish <= 0.5) {
            console.log('RawFish')
            numFish++;
            document.getElementById('fish').innerHTML = numFish
            document.getElementById('results').innerHTML += '<img src="images/RawFish.png">'
        } else if (randFish < 0.7) {
            console.log('RawSalmon')
            numSalmon++;
            document.getElementById('salmon').innerHTML = numSalmon
            document.getElementById('results').innerHTML += '<img src="images/Raw_Salmon.png">'
        } else if (randFish < 0.9) {
            console.log('Puffer')
            numPuffer++;
            document.getElementById('pufferfish').innerHTML = numPuffer
            document.getElementById('results').innerHTML += '<img src="images/Pufferfish_old.png">'
        } else {
            console.log('Clown')
            numClown++;
            document.getElementById('clownfish').innerHTML = numClown
            document.getElementById('results').innerHTML += '<img src="images/Clownfish.png">'
        }
        console.log('fish');
        
    } else if (randNum < 0.95) {
        console.log('junk');
        numJunk++;
        document.getElementById('junk').innerHTML = numJunk
        document.getElementById('results').innerHTML += '<img src="images/leatherboots.png">'
    } else {
        console.log('treasure')
        numTreasure++;
        document.getElementById('treasure').innerHTML = numTreasure;
        document.getElementById('results').innerHTML += '<img src="images/Bow.png">'
    }
}