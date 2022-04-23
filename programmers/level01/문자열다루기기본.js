function solution(s) {
  var answer = true;
  // 문자열의 길이가 4 또는 6이고 숫자로만 구성되어 있는지 확인
  (s.length === 4 || s.length === 6) && s == parseInt(s) ? (answer = true) : (answer = false);
  return answer;
}

// 숫자 판별 시, isNaN() 함수를 사용하면 안된다.
// 1e22 를 지수로 체크하기 때문에 조건을 달 수 없다
// parseInt를 사용해야 함.

// https://programmers.co.kr/learn/courses/30/lessons/12918
