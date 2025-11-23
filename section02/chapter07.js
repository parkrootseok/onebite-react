console.log("chapter7 - 배열 메서드 (요소 조작)");

// 1. 요소 조작
let arr = [1, 2, 3];

// 1-1. push(value) - 배열 맨 뒤에 새로운 요소 추가
let length = arr.push(4, 5, 6); // -> 추가된 배열의 길이를 반환
console.log("현재 배열 길이: ", length);

// 1-2. pop() - 배열 맨 뒤 요소 제거 후 반환
console.log(arr.pop()); // -> 6

// 1-3. shift() - 배열 맨 앞 요소 제거 후 반환
console.log(arr.shift()); // -> 1

// 1-4. unshift(value) - 배열 맨 앞에 새로운 요소 추가
length = arr.unshift(0);
console.log("현재 배열 길이: ", length);
console.log(arr);

// 1-5. slice(s, e) - 배열의 특정 범위(s ~ e-1)를 잘라내서 새로운 배열로 반환
let sliceArr = arr.slice(0, 3); // s번 부터 (e - 1)번 까지
console.log("slice() 결과: ", sliceArr);
sliceArr = arr.slice(0); // s번 부터 모든 원소
console.log("slice() 결과: ", sliceArr);
sliceArr = arr.slice(-3); // 뒤에서 부터 3개
console.log("slice() 결과: ", sliceArr);

// 1-6. concat(src) - 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let concatArr = arr.concat(sliceArr);
console.log(concatArr);
