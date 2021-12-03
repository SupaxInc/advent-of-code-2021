const fs = require('fs');

const input = fs.readFileSync('./day2/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n');

let horizontalIndex = 0;
let verticalIndex = 0;

arrInput.forEach((val, i) => {
    if(val.indexOf("forward") === 0) {
        horizontalIndex += Number(val[val.length - 1]);
    }
    else if (val.indexOf("down") === 0){
        verticalIndex += Number(val[val.length - 1]);
    }
    else {
        verticalIndex -= Number(val[val.length - 1]);
    }
    
});

console.log(horizontalIndex * verticalIndex);