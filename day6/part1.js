const fs = require('fs');

const input = fs.readFileSync('./day6/input.txt');

const arrInput = input.toString().split(",").map(Number);
let arrLanternFishes = arrInput;

// Yes, I figured out in part 2 that this is definitely the wrong implementation..
for(let i=0; i<80; i++) {
    let arrNewFishes = [];
    arrLanternFishes = arrLanternFishes.map((num, i) => {
        if(num > 0) {
            return num-=1;
        }
        else{
            arrNewFishes.push(8);
            return num = 6;
        }
    });
    arrLanternFishes = arrLanternFishes.concat(arrNewFishes);
}
console.log(arrLanternFishes.length);
