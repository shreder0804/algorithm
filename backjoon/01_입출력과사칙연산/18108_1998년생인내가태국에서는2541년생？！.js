const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
console.log(input - 543);

// https://www.acmicpc.net/submit/18108/50864167
