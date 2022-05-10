function solution(x) {
  var answer = true;
  let arr = [];
  let total = 0;
  // x를 문자열화 하여 배열로 만들어 arr에 할당
  arr = String(x).split("");

  // arr의 합을 total에 할당
  for (let i = 0; i < arr.length; i++) total += Number(arr[i]);

  // x를 total로 나누어서 나머지가 0이면 true, 0이 아니면 false
  x % total === 0 ? (answer = true) : (answer = false);

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12947
