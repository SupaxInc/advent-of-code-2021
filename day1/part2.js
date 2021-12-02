const fs = require('fs');

const input = fs.readFileSync('./day1/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n').map(Number);

let count = 0;
let currSum = 0;
let lastSum = undefined;
let arrThreeMeasurement = [];

console.time('algo_time1');
// Implementing a queue: FIFO
arrInput.forEach((depth, i) => {
    arrThreeMeasurement.push(depth);
    currSum += depth;
    // Every time the length of the measurement is 3 then we shift the array to pop out the first index
    // This way the array is always a length of 3
    if (arrThreeMeasurement.length % 3 === 0) {
        // Check if the lastSum is no longer undefined (first sum has been found)
        if(lastSum) {
            if(currSum > lastSum)
            count++;
        }
        lastSum = currSum;
        // Subtracting the current sum to the first index of the array and shift the array to remove the first index.
        // Now the current sum will equal the last two depths
        // In the next iteration we can add the next depth to be able to get the sum of the next measurement including the last 2 measurements.
        currSum -= arrThreeMeasurement.shift();
    }
});
console.timeEnd('algo_time1');

console.log(count);



// Bad time complexity solution

// let count2 = 0;
// let currSum2 = 0;
// let lastSum2= undefined;
// let arrThreeMeasurement2 = [];

// console.time('algo_time2');
// // Implementing a queue: FIFO
// arrInput.forEach((depth, i) => {
//     arrThreeMeasurement2.push(depth);
//     if (arrThreeMeasurement2.length % 3 === 0) {
//         currSum2 = arrThreeMeasurement2.reduce((a, b) => a + b, 0)
//         if(lastSum2) {
//             if(currSum2 > lastSum2)
//             count2++;
//         }
//         lastSum2 = currSum2;
//         arrThreeMeasurement2.shift();
        
//     }
// });
// console.timeEnd('algo_time2');

// console.log(count2);