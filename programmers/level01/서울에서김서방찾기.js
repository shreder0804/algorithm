function solution(seoul) {
  var answer = "";
  // for문을 사용하여 Kim과 같은 배열번호를 찾고
  // 템플릿리터럴을 이용하여 answer에 할당하여 리턴
  for (let i = 0; i < seoul.length; i++) {
    seoul[i] === "Kim" ? (answer = `김서방은 ${i}에 있다`) : null;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12919
