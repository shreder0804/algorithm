function solution(dartResult) {
  var answer = 0;
  let dartResultArr = "";
  let dartScore = [];
  let score = [];

  // dartResult 문자를 3세트로 분리하여 배열화
  for (let i = 0; i < dartResult.length; i++) {
    if (i > 1 && isNaN(dartResult[i]) === false) {
      dartResultArr += " " + dartResult[i];
    } else {
      dartResultArr += dartResult[i];
    }
  }

  dartResultArr = dartResultArr.split(" ");

  // 규칙에 맞게 계산하여 dartScore 배열에 push
  for (let i = 0; i < dartResultArr.length; i++) {
    for (let j = 0; j < dartResultArr[i].length; j++) {
      if (j === 0) {
        score.push(Number(dartResultArr[i][j]));
      } else if (j === 1) {
        if (dartResultArr[i][j] === "S") Math.pow(score[i], 1);
        else if (dartResultArr[i][j] === "D") Math.pow(score[i], 2);
        else if (dartResultArr[i][j] === "T") Math.pow(score[i], 3);
      } else if (i === 0 && j === 2) {
        if (dartResultArr[i][j] === "*") score[i] *= 2;
        else if (dartResultArr[i][j] === "#") score[i] *= -1;
      } else if (i >= 1 && j === 2) {
        if (dartResultArr[i][j] === "*") {
          score[i] *= 2;
          score[i - 1] *= 2;
        } else if (dartResultArr[i][j] === "#") score[i] *= -1;
      }
    }
  }

  return answer;
}

let str01 = "1S2D*3T";
let str02 = "";

for (let i = 0; i < str01.length; i++) {
  if (i > 1 && isNaN(str01[i]) === false) {
    str02 += " " + str01[i];
  } else {
    str02 += str01[i];
  }
}

str02 = str02.split(" ");

console.log(str01);
console.log(str02);

// if문이 많아서 줄이는 방법을 써야할 듯
