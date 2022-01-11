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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function findPair(item, index, ar){
    if(ar[index] == ar[index + 1]){
        ar[index] = -1;
        ar[index + 1] = -1;
    }
}

function sockMerchant(n, ar) {
    // Write your code here
    if(ar.length == 0 || ar.length == 1){
        return 0;
    }

    if(n <= ar.length){
        let newAr = ar.slice(0,n);
        newAr.sort();

        newAr.forEach(findPair);

        const count_pair = newAr.filter(count => count==-1).length;

        return count_pair/2;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
