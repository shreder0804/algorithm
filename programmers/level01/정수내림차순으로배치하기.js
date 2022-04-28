function solution(n) {
  var answer = 0;
  // 문자열로 변환한 n을 split을 사용하여 배열로 변환
  let nArr = String(n).split("");
  // 배열로 변환한 nArr을 sort를 사용하여 내림차순으로 정렬
  nArr.sort((a, b) => {
    return b - a;
  });
  // 내림차순으로 정렬된 배열을 join을 통하여 합친 것을 answer에 할당
  answer = Number(nArr.join(""));
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12933
