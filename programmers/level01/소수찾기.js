function solution(n) {
  var answer = 0;
  let arr = [];
  // 2부터 n까지 배열에 담기
  for (let i = 2; i <= n; i++) arr[i] = i;

  // 2부터 arr에 있는 숫자 소수 판별하기
  for (let i = 2; i <= n; i++) {
    // 0이면 다음 반복문 진행
    if (arr[i] === 0) continue;
    // 각 요소의 배수를 0으올 지정
    for (let j = i * 2; j <= n; j += i) arr[j] = 0;
  }

  // filter로 0이 아닌 수의 갯수를 answer에 할당
  answer = arr.filter((ele) => ele !== 0).length;

  return answer;
}
