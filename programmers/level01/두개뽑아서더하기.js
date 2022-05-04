function solution(numbers) {
  let answer = [];
  let sumNumbers = [];
  let uniqueNumbers = [];

  // 이중 for문으로 numbers의 배열을 순회하여 sumNumbers에 push (O(N)^2)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) sumNumbers.push(numbers[i] + numbers[j]);
  }

  // filter와 indexOf를 사용해서 sumNumbers에 있는
  // 중복 숫자를 제거하여 uniqueNumbers에 할당
  uniqueNumbers = sumNumbers.filter((ele, idx) => sumNumbers.indexOf(ele) === idx);

  // uniqueNumbers 오름차순 정렬한 값을 answer에 할당
  answer = uniqueNumbers.sort((a, b) => Number(a - b));

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/68644
