function solution(n, m) {
  var answer = [];
  let divisorN = [];
  let divisorM = [];
  let gcdArr = [];
  // n과 m의 약수 구하기
  for (let i = 1; i <= n; i++) n % i === 0 ? divisorN.push(i) : null;
  for (let j = 1; j <= m; j++) m % j === 0 ? divisorM.push(j) : null;
  console.log(divisorN);
  console.log(divisorM);

  // 약수 배열의 교집합 구하기
  gcdArr = divisorN.filter((ele) => divisorM.includes(ele));

  // gcdArr의 가장 큰 수가 '최대공약수'이기 때문에
  // gcdArr의 마지막 요소를 answer의 첫번째 요소에 push
  answer.push(gcdArr[gcdArr.length - 1]);

  console.log(gcdArr);

  return answer;
}

console.log(solution(50, 4));
