function convertToNumber(anything) {
  // TODO: 여기에 코드를 작성합니다.
  return Number(anything);
}

// # **convertToNumber**

// 우리가 웹 브라우저에 적혀있는 정보를 가져오면 보통 `string`의 형태로 받아오게 됩니다. 즉, 숫자로 세고 싶은 정보도 `string`으로 인식하기 때문에, 정상적인 숫자를 위한 연산을 수행할 수 없습니다.

// 이를 해결하기 위해서 타입을 변경하는 방법에 대해서 알아볼까요? `number`로 변경하기 위해서는 `Number()` 함수를 사용해서 변경할 수 있습니다.

// ```jsx
// Number('100'); // 100
// ```

// 문제를 직접 풀어보면서 변경해볼까요?

// ## **문제**

// 임의의 값을 입력받아 수(`number`)의 형태로 리턴해야 합니다.

// ## **입력**

// ## **인자 1 : anything**

// - 임의의 값

// ## **출력**

// - `number` 타입을 리턴해야 합니다.

// ## **주의 사항**

// - `number`, `string`, `boolean` 타입만 입력됩니다.
// - 입력값을 수로 변환할 수 없는 경우, `NaN`을 리턴해야 합니다.
// - `NaN`은 수가 아님을 나타내는 특수한 값으로, 문자열이 아닙니다.

// ## **입출력 예시**

// ```jsx
// let output = convertToNumber('123');
// console.log(output); // --> 123

// let output2 = convertToNumber('hello');
// console.log(output2); // --> NaN

// let output3 = convertToNumber('3.141952');
// console.log(output3); // --> 3.141952
// ```
