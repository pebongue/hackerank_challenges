'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

 function countingValleys_2(steps, path) {
     // Write your code here
     let change_ = 0;
     let countValleys = 0;

     for(let i=0; i < steps; i++){
         if(path[i] == 'D'){
             change_ -= 1;
         } else {
             if(change_ == -1){
                 countValleys += 1;
             }

             change_ += 1;
         }
     }

     return countValleys;

 }

function countingValleys(steps, path) {
    // Write your code here
    let down_ = 0;
    let up_ = 0;
    let countValleys = 0;

    for(let i=0; i < steps; i++){
        if(path[i] == 'D'){
            down_ += 0.5;
        }

        if(down_ >= 1 && path[i] == 'U'){
            up_ += 0.5;
        }

        if(down_ >= 1 && up_ >= 1){
            countValleys += 1;
            down_ = 0;
            up_ = 0;
        }
    }

    return countValleys;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
