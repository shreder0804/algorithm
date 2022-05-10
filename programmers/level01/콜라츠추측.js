function solution(num) {
  var answer = 0;

  // 만약 num이 1이면 작업하지 않아도 되기 때문에 초기화된 answer 리턴
  if (num === 1) return answer;

  // while문에서 규칙대로 num을 변경하고 변경할 때마다 answer에 1씩 증가
  while (answer <= 500) {
    // 규칙 1-1, 1-2
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    // answer 1 증가
    answer++;
    // num이 1이면 answer 리턴
    if (num === 1) return answer;
  }
  // while문을 빠져나오면 answer가 500이상이기 때문에
  // answer에 -1을 할당하고 그대로 리턴
  answer = -1;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12943
