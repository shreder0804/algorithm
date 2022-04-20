function solution(n) {
  var answer = [];
  // n을 string 타입으로 변환
  let strN = String(n);

  // 반복문을 이용하여 strN의 length - 1 만큼 answer 배열에 숫자로 치환하여 push한다.
  for (let i = strN.length - 1; i >= 0; i--) {
    answer.push(Number(strN[i]));
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12932
