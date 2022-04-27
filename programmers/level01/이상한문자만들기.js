function solution(s) {
  var answer = '';
  // 문자열 s를 공백을 기준으로 배열로 변환
  let sArr = s.split(' ');

  // for문을 이용하여 sArr.length로 문자열을 다시 split함
  for (let i = 0; i < sArr.length; i++) sArr[i] = sArr[i].split('');

  // 이중 for문을 이용하여 배열에 있는 짝수번째 문자를 대문자, 홀수번째 문자를 소문자로 변환한다.
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      if (j % 2 === 0) {
        sArr[i][j] = sArr[i][j].toUpperCase();
      } else {
        sArr[i][j] = sArr[i][j].toLowerCase();
      }
    }
  }

  // sArr을 join하여 문자열로 바꿔주고 정규식을 이용하여 전체 콤마를 제거
  answer = sArr.join(' ').replace(/,/g, '');

  // answer 리턴
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12930
// else문에서 소문자 넣어주지 않으면 테스트 결과 실패로 뜬다
