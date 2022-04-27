function solution(n) {
  var answer = 0;

  // n을 문자열로 변환하여 한자리씩 배열화 시킴
  let nArr = String(n).split("");
  // for문을 이용하여 처음부터 끝까지 더한 것을 answer에 할당
  for (let i = 0; i < nArr.length; i++) {
    answer += Number(nArr[i]);
  }
  // answer 리턴
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12931
