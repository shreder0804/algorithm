function solution(phone_number) {
  var answer = '';
  // phone_number를 배열로 변환
  let arrPhoneNumber = phone_number.split('');
  // answer.length - 4만큼 for문 실행하여 각 문자를 *로 바꾼다.
  for (let i = 0; i < arrPhoneNumber.length - 4; i++) {
    arrPhoneNumber[i] = '*';
  }
  // arrPhoneNumber 배열을 문자열로 변환하여 answer에 할당
  answer = arrPhoneNumber.join('');
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12948
