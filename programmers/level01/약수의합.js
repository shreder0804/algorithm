function solution(n) {
  var answer = 0;
  let divisorN = [];

  // n의 약수 구하기
  for (let i = 1; i <= n; i++) n % i === 0 ? divisorN.push(i) : null;

  // 약수의 합 구하기
  for (let ele of divisorN) answer += ele;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12928
