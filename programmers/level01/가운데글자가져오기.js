function solution(s) {
  var answer = '';
  let p = s.length / 2;
  let o = s.length / 2 - 0.5;

  // s의 길이가 짝수이면 s[p-1]과 s[p]를 더한 값을 return
  // s의 길이가 홀수이면 s[0]를 return
  if (s.length % 2 === 0) {
    answer += s[p - 1] + s[p];
  } else {
    answer += s[o];
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12903
