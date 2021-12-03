const fs = require('fs');

const input = fs.readFileSync('./day1/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n').map(Number);
let count = 0;
let lastDepth = undefined;
arrInput.forEach((depth, i) => {
    if(lastDepth) {
        if (depth > lastDepth) {
            count++;
        }
    }
    lastDepth = depth;
});
