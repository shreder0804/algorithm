function solution(n) {
  var answer = 0;
  // for문을 이용하여 자연수 1부터 순서대로 반복하여 나머지가 1이 되면 리턴
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/87389
