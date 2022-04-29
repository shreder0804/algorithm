function solution(a, b) {
  var answer = 0;
  let num01 = 0;
  let num02 = 0;
  // a가 b보다 작으면 그대로 num01과 num02에 할당
  // a가 b보다 크면 반대로 할당
  // a와 b가 같으면 그대로 a를 리턴
  if (a < b) (num01 = a), (num02 = b);
  if (a > b) (num01 = b), (num02 = a);
  if (a === b) return a;

  // for문을 통하여 num01과 num02 사이의 모든 숫자를 answer에 할당
  for (let i = num01; i <= num02; i++) answer += i;
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12912
