function solution(left, right) {
  var answer = 0;
  let divisor = [];
  // left부터 right까지 반복문 실행
  for (let i = left; i <= right; i++) {
    // j의 약수 구하기
    for (let j = 1; j <= i; j++) i % j === 0 ? divisor.push(j) : null;

    // 해당 요소의 약수의 갯수를 구하고 갯수가 짝수면 answer에 i를 더하고 홀수면 i를 뺌
    divisor.length % 2 === 0 ? (answer += i) : (answer -= i);

    // divisor 배열 초기화
    divisor = [];
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/77884
