const fs = require('fs');

const input = fs.readFileSync('./day4/input.txt');

const arrInput = input.toString().replace(/\r/g, '').split('\n');
const arrNumbersDrawn = arrInput[0].split(",").map(v => Number(v));
let arrBingoBoard = [];
let arrBingoRows = [];
let bingoBoardWinner;

const findWinner = (bingoBoard) => {
    let markedRowNums = 0;
    //console.log(bingoBoard);
    const winner = bingoBoard.some((val, i) => {
        let markedColNums = 0;
        val.forEach(val => {
            if(val.marked) {
                markedColNums++;
            }
        });

        if(val[i].marked) {
            markedRowNums++;
        }

        if(markedColNums === 5 || markedRowNums === 5) {
            return true;
        }
        else {
            return false;
        }
    });

    return winner;
}

const getBingoBoardWinner = (arrNumbersDrawn, arrBingoBoard) => {
    arrNumbersDrawn.forEach((num) => {

        arrBingoBoard = arrBingoBoard.map((board, j) => {
            console.log(board);


            
            if(findWinner(board)) {
                console.log("Here");
                //return board;
            }
        });
        
    });
}

// Separate each bingo board in a new array 
for(let i=1; i<arrInput.length; i++) {
    if(arrInput[i] != "") {
        arrBingoRows.push(arrInput[i]);
    }
    else {
        arrBingoRows = []
        arrBingoBoard.push(arrBingoRows);
    }
}

// Remove the spaces for each row of each bingo boards and put it inside an array
for(let i=0; i<arrBingoBoard.length; i++) {
    arrBingoBoard[i] = arrBingoBoard[i].map((val) => {
        // Creating each bingo number as an object to allow us to "mark" a number
        val = val.split(" ").filter(v => v!="").map(val => {
            let obj = { num: "", marked: false}
            obj.num = Number(val);
            return obj;
        });
        return val;
    });
}


bingoBoardWinner = getBingoBoardWinner(arrNumbersDrawn, arrBingoBoard);

console.log(bingoBoardWinner);