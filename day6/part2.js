const fs = require('fs');

const input = fs.readFileSync('./day6/input.txt');

const arrInput = input.toString().split(",").map(Number);
// Create an array with a size of 9 to represent the age group of lantern fishes.
let arrLanternFishes = new Array(9).fill(0);
let totalLanternFishes;

// Count the number of lantern fishes per age group using the index of the array as the age.
arrInput.forEach((age) => {
    arrLanternFishes[age]++;
});

// O(n) solution
// Shift the array to the left for each day while adding the fishes with zero internal timer to the 6th position of the array if it is greater than 0
for(let i=0; i<256; i++) {
    let shiftedInternalZero = arrLanternFishes.shift();
    if(shiftedInternalZero > 0) {
        arrLanternFishes.push(shiftedInternalZero);
        arrLanternFishes[6] += shiftedInternalZero;
        
    }
    else {
        arrLanternFishes.push(shiftedInternalZero);
    }
}

totalLanternFishes = arrLanternFishes.reduce((a, b) => a + b);
console.log(totalLanternFishes);


