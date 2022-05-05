function solution(s) {
  var answer = 0;

  // 숫자영단어 배열 선언
  let engNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  // replace를 이용하여 해당 단어가 포함되어 있으면 치환
  // 전체 문자를 치환해야하기 때문에 정규식으로 변환하여 사용
  for (let i = 0; i < engNum.length; i++) {
    s = s.replace(new RegExp(engNum[i], 'g'), i);
  }

  // 변환된 문자를 answer에 할당
  answer = s;

  // 숫자형으로 변환하여 리턴
  return Number(answer);
}

// https://programmers.co.kr/learn/courses/30/lessons/81301
