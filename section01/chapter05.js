console.log("chapter 5 - 자료형(타입)");

// 1. Number
// 1.1 기본적인 사칙(+모듈러)연산 가능
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);

// 1-2. 무한대, NaN과 같은 툭수한 값 지원
let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; // 숫자가 아님을 의미 (연산이 실패한 경우 반환, 덕분에 잘못된 연산을 하더라도 오류가 발생하지 않음)
console.log(1 * "Hello");

// 2. String
// 2-1. "", '' 사용
// - 사용하지 않으면 변수명으로 인식
let myName = "박근석";
let myLocation = "목동";

// 2-2. 문자열 덧셈 연산 지원
let introduce = myName + myLocation;
console.log(introduce);

// 2-3. 템플릿 리터럴 문법 지원
// - ``(백틱) 활용하여 변수 값을 동적으로 할당하여 문자열 조합 가능
introduce = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduce);

// 3. Boolean
// - 상태를 저장할 때 사용
let isOn = true;
let isOff = false;

// 4. Null
// - 변수에 아무런 값을 가지고 있지 않음을 표현하기 위해 사용
// - 단, 명시적으로 null로 초기화해야 함
let empty = null;
console.log(empty); // -> null

// 5. Undefined
// - 변수 선언 후 어떠한 값도 저장하지 않았을 때
let none;
console.log(none); // -> undefined
