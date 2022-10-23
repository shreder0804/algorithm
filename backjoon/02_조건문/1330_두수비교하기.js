const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else if (A === B) {
  console.log('==');
}

// https://www.acmicpc.net/submit/1330/50864623
