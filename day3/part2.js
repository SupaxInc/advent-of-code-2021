const fs = require('fs');

const input = fs.readFileSync('./day3/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n');

let oxygenRating;
let scrubberRating;

// Grab the binary string based on the most/least common bit and the bit position
const grabNumbersByBitAndPosition = (position, charBit, arrNumbers) => {
    let newArr;
    newArr = arrNumbers.filter(str => {
        if(str.charAt(position) === charBit) {
            return str;
        }
    });
    if(newArr.length === 0) {
        return arrNumbers;
    }
    else {
        return newArr;
    }
}

// Find either the least or most common bit depending on the boolean flag blnMostCommon
const findLeastMostCommonBit = (arrBinaryStr, blnMostCommon) => {
    
    for(let i=0; i<12; i++) {
        let arrBit = new Array(12).fill(0);

        // Finds the most common bit per column in the array of binary strings
        arrBit = arrBinaryStr.reduce((acc, arr) => {
            for(let i=0; i<arr.length; i++) {
                if(arr[i] === '0') {
                    acc[i] -= 1;
                }
                else {
                    acc[i] += 1;
                }
            }
            return acc;
        }, arrBit);
        
        if(arrBit[i] < 0) {
            arrBinaryStr = grabNumbersByBitAndPosition(i, blnMostCommon ? "0" : "1", arrBinaryStr);
        }
        else if (arrBit[i] > 0) {
            arrBinaryStr = grabNumbersByBitAndPosition(i, blnMostCommon ? "1" : "0", arrBinaryStr);
        }
        else if (arrBit[i] === 0){
            arrBinaryStr = grabNumbersByBitAndPosition(i, blnMostCommon ? "1" : "0", arrBinaryStr);
        }

        if(arrBinaryStr.length === 1) {
            return arrBinaryStr;
        }
    }
}

oxygenRating = parseInt(findLeastMostCommonBit(arrInput, true)[0],2);
scrubberRating = parseInt(findLeastMostCommonBit(arrInput, false)[0], 2);

console.log(oxygenRating * scrubberRating);




