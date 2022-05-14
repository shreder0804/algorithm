process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);

  // 이중 for문으로 가로(a)와 세로(b)를 얼마나 찍을 지 구현
  for (let i = 0; i < b; i++) {
    // 문자 변수 선언
    let rectStr = '';
    for (let j = 0; j < a; j++) rectStr = rectStr + '*';

    // 별 출력
    console.log(rectStr);
  }
});

// https://programmers.co.kr/learn/courses/30/lessons/12969
