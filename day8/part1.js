const fs = require('fs');

const input = fs.readFileSync('./day8/input.txt');
const arrInput = input.toString().replace(/\r/g, '').split("\n");
const outputValueLine = [];
arrInput.forEach((line) => {
    outputValueLine.push(line.split("|")[1]);
});
const outputValues = outputValueLine.map((line) => {
    return line.trimStart().split(" ");
});
const countUniqueOccurences = (outputValues) => {
    let countOccurences = 0;
    for(let i=0; i<outputValues.length; i++) {
        let totalCount = outputValues[i].reduce((acc, val) => {
            if(val.length === 2) {
                acc++;
            }
            if(val.length === 3) {
                acc++;
            }
            if(val.length === 4) {
                acc++;
            }
            if(val.length === 7) {
                acc++;
            }
            return acc;
        }, 0);
        countOccurences += totalCount;
    }
    return countOccurences;
}

const totalUniqueOccurences = countUniqueOccurences(outputValues);

console.log(totalUniqueOccurences);


