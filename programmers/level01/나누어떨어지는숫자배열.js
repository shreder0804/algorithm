function solution(arr, divisor) {
  var answer = [];
  // for문을 이용하여 나머지가 0이면 answer에 arr 요소를 push
  for (let i = 0; i < arr.length; i++) arr[i] % divisor === 0 ? answer.push(arr[i]) : null;

  // arr.length가 0이면 arr 요소에 -1 push
  answer.length === 0 ? answer.push(-1) : null;

  // answer를 sort를 이용하여 오름차순 정렬
  answer.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12910
