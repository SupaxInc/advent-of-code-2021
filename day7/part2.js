const fs = require('fs');

const input = fs.readFileSync('./day7/input.txt');

const arrInput = input.toString().split(",").map(Number);
const lowAvgNum = Math.floor((arrInput.reduce((a, b) => a + b))/arrInput.length);
const highAvgNum = Math.ceil((arrInput.reduce((a, b) => a + b))/arrInput.length);

const totalFuelCost = (avgNum, arrInput) => {
    let totalFuelCost = 0;
    for (let i=0; i<arrInput.length; i++) {
        let steps = Math.abs(arrInput[i] - avgNum);
        let fuelCost = (steps*(steps + 1))/2;
        totalFuelCost += fuelCost;
    }
    return totalFuelCost;
}

const lowAvgFuelCost = totalFuelCost(lowAvgNum, arrInput);
const highAvgFuelCost = totalFuelCost(highAvgNum, arrInput);


console.log(Math.min(lowAvgFuelCost, highAvgFuelCost));