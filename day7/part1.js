const fs = require('fs');

const input = fs.readFileSync('./day7/input.txt');

const arrInput = input.toString().split(",").map(Number).sort((a, b) => a - b);
const median = arrInput[Math.floor(arrInput.length/2)];

const totalFuelCost = arrInput.reduce((acc, num) => {
    return acc += Math.abs(num - median);
}, 0);

console.log(totalFuelCost);