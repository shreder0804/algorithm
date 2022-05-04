function solution(n, m) {
  // 변수 초기화
  var answer = [];
  let divisorN = [];
  let divisorM = [];
  let gcdArr = [];
  let gcd = 0;

  // n과 m의 약수 구하기
  for (let i = 1; i <= n; i++) n % i === 0 ? divisorN.push(i) : null;
  for (let j = 1; j <= m; j++) m % j === 0 ? divisorM.push(j) : null;

  // 약수 배열의 교집합 구하기
  gcdArr = divisorN.filter((ele) => divisorM.includes(ele));

  // 최대공약수 할당
  gcd = gcdArr[gcdArr.length - 1];

  // gcdArr의 가장 큰 수가 '최대공약수'이기 때문에
  // gcdArr의 마지막 요소를 answer의 첫번째 요소에 push
  answer.push(gcd);

  // 최소공배수는 유클리드 호제법을 이용하여 n과 m의 곱을
  // 최대공약수로 나눠서 구하며, 구한 값을 answer에 push
  answer.push((n * m) / gcd);

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12940
