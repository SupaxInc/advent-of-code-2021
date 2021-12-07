const fs = require('fs');

const input = fs.readFileSync('./day6/input.txt');

const arrInput = input.toString().split(",").map(Number);
const arrAgeGroup = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arrLanternFishes = [];
arrAgeGroup.forEach((age) => {
    arrLanternFishes.push({
        ageGroup: age,
        amount: 0
    });
});

arrInput.forEach((age) => {
    arrLanternFishes.forEach((obj) => {
        
    })
})


