function solution(arr) {
  var answer = 0;

  // for문을 이용하여 배열에 있는 모든 요소를 더함
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  // arr.length로 나눈 값을 answer에 넣기
  answer /= arr.length;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12944
