function solution(s) {
  var answer = "";
  // 문자열 s를 배열로 변환
  let sArr = s.split("");
  // s의 짝수번째 배열만 대문자로 변환시킴
  for (let i = 0; i < sArr.length; i++) {
    if (i % 2 === 0) {
      sArr[i] = sArr[i].toUpperCase();
    }
  }
  // sArr을 다시 문자열로 치환하여 answer에 할당
  answer = sArr.join("");
  // answer 리턴
  return answer;
}

console.log(solution("try hello world"));

// https://programmers.co.kr/learn/courses/30/lessons/12930
// 해결 실패(공백 단위로 단어를 나눠서 알파벳 치환해야 문제 해결이 될 것 같음)
