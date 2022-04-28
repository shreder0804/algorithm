function solution(arr) {
  var answer = [];
  // 초기 num 변수에 undefined 하랑
  let num = undefined;
  // for문을 사용하여 num의 숫자와 다르면 arr[i]를 넣고 같으면 넣지 않는다.
  // 삼항연산자를 두줄 이상으로 쓸 경우엔 아래와 같이 괄호로 묶어줌
  for (let i = 0; i < arr.length; i++) {
    num != Number(arr[i]) ? ((num = arr[i]), answer.push(arr[i])) : null;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12906
