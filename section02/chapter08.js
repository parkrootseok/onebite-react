console.log("chapter8 - 배열 메서드 (순회와 탐색)");

// 1. 순회와 탐색
let arr = [1, 2, 3, 3];

// 1-1. forEach(callback) - 모든 요소 순회와 각 요소에 대하여 특정 동작 수행
// - 동작은 콜백 함수로 전달
arr.forEach((item, idx, arr) => {
  console.log(idx, item, arr);
});

let doubledArr = [];
arr.forEach((item) => doubledArr.push(item * 2));
console.log(doubledArr);

// 1-2. include(target) - 배열에 특정 요소 존재 여부 확인
console.log(arr.includes(1)); // -> true
console.log(arr.includes(4)); // -> false

// 1-3. indexOf(target) - 특정 요소와 동일한 원소의 첫 인덱스를 반환
// - 얉은 비교 (객체 타입은 찾아낼 수 없음)
console.log(arr.indexOf(1)); // -> 0
console.log(arr.indexOf(4)); // -> -1 (존재 X)
// 1-4. findIndex(callback) - 콜백 함수를 만족하는 특졍 요소의 인덱스를 반환
// - 깊은 비교 가능 (객체 타입도 찾아낼 수 있음)
console.log(arr.findIndex((item) => item % 2 != 0)); // -> 0
console.log(arr.findIndex((item) => item === -1)); // -> -1 (존재 X)

// 1-5. find() - 콜백 함수를 만족하는 특정 요소를 찾고, 요소를 그대로 반환
arr = [{ name: "아무개" }, { name: "홍길동" }];
let finded = arr.find((item) => item.name === "홍길동"); // -> {name: "홍길동"}
console.log(finded);
