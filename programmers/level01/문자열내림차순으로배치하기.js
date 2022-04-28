function solution(s) {
  var answer = "";
  // s를 배열로 변환하여 sArr에 할당
  let sArr = s.split("");
  // sort를 사용하여 문자를 내림차순으로 정렬
  sArr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
  // 정렬된 sArr을 join을 통하여 합친 후 answer에 할당
  answer = sArr.join("");
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12917
