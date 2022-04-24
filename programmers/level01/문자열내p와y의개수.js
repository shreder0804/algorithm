function solution(s) {
  // 소문자로 변환된 p와 y의 갯수가 같으면 true 아니면 false 리턴
  // p와 y의 갯수가 없으면 모두 0이기 때문에 true가 나옴
  var answer = s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12916
