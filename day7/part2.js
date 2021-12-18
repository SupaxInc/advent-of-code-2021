const fs = require('fs');

const input = fs.readFileSync('./day7/input.txt');

const arrInput = input.toString().split(",").map(Number);
const lowAvgNum = Math.floor((arrInput.reduce((a, b) => a + b))/arrInput.length);
const highAvgNum = Math.ceil((arrInput.reduce((a, b) => a + b))/arrInput.length);

// const arrInput2 = [1, 3, 6, 8, 10];
// const avgNum2 = Math.round((arrInput2.reduce((a, b) => a + b))/arrInput2.length);


// for (let i=0; i<3; i++) {
//     let steps = Math.abs(arrInput2[i] - avgNum2);
//     let fuelCost = (steps*(steps + 1))/2;
//     totalFuelCost += fuelCost;
//     console.log(steps, fuelCost, totalFuelCost);
// }

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