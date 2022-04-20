function solution(absolutes, signs) {
  // answer를 0으로 할당
  var answer = 0;

  // absolutes의 길이가 1 이상 1000 이하이고
  // signs[i]가 참일 때 absolutes[i]를 더하고
  // 거짓일 때 absolutes[i]를 뺀다.
  for (let i = 0; i < absolutes.length; i++) {
    if (absolutes[i] >= 1 && absolutes[i] <= 1000) {
      signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
    }
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/76501
