function solution(s, n) {
  let answer = s
    .split('')
    .map((ele) => {
      if (ele === ' ') return ele;
      return ele.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(ele.charCodeAt() + n - 26)
        : String.fromCharCode(ele.charCodeAt() + n);
    })
    .join('');

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12926
