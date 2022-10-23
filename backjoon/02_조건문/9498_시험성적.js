const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const A = parseInt(input[0]);

if (A > 100 || A < 0) {
  console.log('점수가 범위를 벗어났습니다!');
} else if (A >= 90 && A <= 100) {
  console.log('A');
} else if (A >= 80 && A < 90) {
  console.log('B');
} else if (A >= 70 && A < 80) {
  console.log('C');
} else if (A >= 60 && A < 70) {
  console.log('D');
} else if (A < 60) {
  console.log('F');
}

// https://www.acmicpc.net/submit/9498/50864639
