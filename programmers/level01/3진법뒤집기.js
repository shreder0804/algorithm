function solution(n) {
  var answer = 0;
  let base3 = [];
  // 1) 10진법을 3진법으로 변환 후 3진법 뒤집기
  while (n >= 1) {
    base3.push(Math.floor(n % 3));
    n /= 3;
  }
  // 2) 뒤집힌 3진법을 10진법으로 변환 후 리턴
  // for문과 Math.pow()를 이용한 10진법 변환
  for (let i = 0; i < base3.length; i++) {
    answer = answer + base3[i] * Math.pow(3, base3.length - 1 - i);
  }

  return answer;
}

console.log(solution(125));

// https://programmers.co.kr/learn/courses/30/lessons/68935
