const fs = require('fs');

const input = fs.readFileSync('./day3/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n');
let arrInput2 = arrInput.map(val => val.split(""));

let arrBit = new Array(12).fill(0);
let gammaRate;
let epsilonRate;

// Subtracting a 1 if the value of the input is 0 and Adding a 1 if the value of input is 1
// If the value of the array of bits per each column is a negative then the most common bit is 0
// If the value of the array of bits per each column is a positive then the most common bit is 1
// Vice-versa for least common bit
for(let i=0; i<arrInput2.length; i++) {
    arrInput2[i].forEach((val, i) => {
        if(val === '0') {
            arrBit[i] -= 1;
        }
        else {
            arrBit[i] += 1;
        }
    });
}

// Converting the array of bits to a string then parsing it as a decimal
gammaRate = parseInt(arrBit.map(val => val <= 0 ? 0 : 1 ).join(""), 2);
epsilonRate = parseInt(arrBit.map(val => val <= 0 ? 1 : 0).join(""), 2);

// Power consumption of the submarine 
console.log(gammaRate * epsilonRate);