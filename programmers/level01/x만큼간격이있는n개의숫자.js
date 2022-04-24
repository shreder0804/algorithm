function solution(x, n) {
  var answer = [];

  // for문을 사용하여 x씩 증가하는 숫자를 n개 지니는 배열을 만든다
  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }
  return answer;
}

console.log(solution(2, 5));

// https://programmers.co.kr/learn/courses/30/lessons/12954
