const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
console.log(A - B);

// https://www.acmicpc.net/submit/1001/50863651
