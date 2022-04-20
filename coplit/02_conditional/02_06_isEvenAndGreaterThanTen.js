function isEvenAndGreaterThanTen(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num > 10 && num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// # **isEvenAndGreaterThanTen**

// ## **문제**

// 수를 입력받아 입력된 수가 10보다 크고 짝수인지 여부를 리턴해야 합니다.

// ## **입력**

// ### **인자 1 : num**

// - `number` 타입의 자연수 (`num` > 0)

// ## **출력**

// - `boolean` 타입을 리턴해야 합니다.

// ## **주의 사항**

// - 10을 입력받은 경우, `false`를 리턴해야 합니다.

// ## **입출력 예시**

// ```jsx
// let output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false
// ```

// ## **힌트**

// - 여러 가지 조건을 동시에 판별하기 위해서는 논리 연산자를 학습해야 합니다. (`javascript logical operator` 또는 `자바스크립트 논리 연산자`)
