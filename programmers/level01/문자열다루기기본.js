function solution(s) {
  var answer = true;
  // 문자열의 길이가 4 또는 6이고 숫자로만 구성되어 있는지 확인
  (s.length === 4 || s.length === 6) && s == parseInt(s) ? (answer = true) : (answer = false);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12918
