function solution(numbers) {
  var answer = 0;
  // 배열 numbers에 있는 배열을 체크해서 해당하는 숫자가 없으면 answer에 더할 것
  for (let i = 0; i < 10; i++) !numbers.includes(i) ? (answer += i) : null;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/86051
