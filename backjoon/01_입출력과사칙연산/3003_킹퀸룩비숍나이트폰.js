const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);
const D = parseInt(input[3]);
const E = parseInt(input[4]);
const F = parseInt(input[5]);
console.log(1 - A);
console.log(1 - B);
console.log(2 - C);
console.log(2 - D);
console.log(2 - E);
console.log(8 - F);

// https://www.acmicpc.net/submit/3003/50864310
