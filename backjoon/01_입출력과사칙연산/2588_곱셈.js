const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const A = parseInt(input[0]);
const B = parseInt(input[1]);

const oneNum = B % 10;
const tenNum = Math.floor((B % 100) / 10);
const hundredNum = Math.floor(B / 100);

console.log(A * oneNum);
console.log(A * tenNum);
console.log(A * hundredNum);
console.log(A * B);

// https://www.acmicpc.net/submit/2588/50864392
