console.log("chapter 17 - 배열");

// 1. 배열
// 1-1. 배열 생성
let arrA = new Array(); // 생성자 방식
let arrB = []; // 배열 리터럴 방식 (선호)

// 1-2. 배열에는 여러 타입을 자유롭게 보관할 수 있으며, 길이 제한도 없음
let arrC = [1, true, "hello", () => {}, {}, []];
console.log(arrC);

// 1-3. 배열 요소 접근
console.log(arrC[0], arrC[1]);

// 1-4. 배열 요소 수정
arrC[0] = 10;
console.log(arrC[0]);
