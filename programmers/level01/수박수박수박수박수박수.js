function solution(n) {
  var answer = '';
  let arr = [];
  // i가 홀수이면 단어 '수'를 push
  // i가 짝수이면 단어 '박'을 push
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) arr.push('수');
    else arr.push('박');
  }
  // 반복문이 끝난 arr을 join을 통해서 합침
  answer = arr.join('');

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12922
