function solution(arr) {
  var answer = [];
  // arr 길이가 1 이하이면 -1 push
  if (arr.length <= 1) {
    answer.push(-1);
  } else {
    // arr 최소값 찾기
    let minArr = Math.min(...arr);
    // filter를 이용하여 최소값 제거
    answer = arr.filter((ele) => ele !== minArr);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12935
