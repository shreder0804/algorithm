function solution(a, b) {
  var answer = 0;
  // for문을 사용하여 a의 배열 요소와 b의 배열 요소를 곱한 값을 answer에 더한다.
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/70128
