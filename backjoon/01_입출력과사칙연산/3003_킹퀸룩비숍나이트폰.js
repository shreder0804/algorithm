const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);
const D = parseInt(inputData[3]);
const E = parseInt(inputData[4]);
const F = parseInt(inputData[5]);
console.log(1 - A);
console.log(1 - B);
console.log(2 - C);
console.log(2 - D);
console.log(2 - E);
console.log(8 - F);

// https://www.acmicpc.net/submit/3003/50864310
