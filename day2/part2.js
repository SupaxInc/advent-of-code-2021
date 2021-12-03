const fs = require('fs');

const input = fs.readFileSync('./day2/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n');

let horizontalIndex = 0;
let depthIndex = 0;
let aimIndex = 0;

arrInput.forEach((val, i) => {
    if(val.indexOf("forward") === 0) {
        horizontalIndex += Number(val[val.length - 1]);
        depthIndex += aimIndex * Number(val[val.length - 1])
    }
    else if (val.indexOf("down") === 0){
        aimIndex += Number(val[val.length - 1]);
    }
    else {
        aimIndex -= Number(val[val.length - 1]);
    }
    
});

console.log(horizontalIndex * depthIndex);