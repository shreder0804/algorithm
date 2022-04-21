function solution(n) {
  var answer = 0;
  // 제곱근을 sqrtN에 할당
  let sqrtN = Math.sqrt(n);
  // n이 어느 양수 x의 제곱 그리고 정수이면 (x+1)^2 리턴, 정수가 아니면 제곱근이 아니기 때문에 -1 리턴
  Number.isInteger(sqrtN) ? (answer = Math.pow(sqrtN + 1, 2)) : (answer = -1);

  return answer;
}
