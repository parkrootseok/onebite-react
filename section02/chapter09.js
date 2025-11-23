console.log("chapter9 - 배열 메서드 (배열 변형)");

// 1. 배열 변형
// 1-1. filter(callback) - 기존 배열에서 조건을 만족하는 요소만 필터링하여 새로운 배열로 반환
arr = [
  { name: "아무개", age: 29 },
  { name: "아무개", age: 37 },
  { name: "아무개", age: 24 },
  { name: "아무개", age: 21 },
];
const filtered = arr.filter((item) => item.age <= 30);
console.log(filtered);

// 1-2. map(callback) - 콜백 함수 결과값을 모아서 새로운 배열로 변환
let names = arr.map((item, idx, arr) => {
  return item.name;
});
console.log(names);

// 1-3. sort() - 배열을 사전순으로 정렬
// 1-3-1. 문자열 정렬
let strings = ["abc", "bca", "bac", "cba"];
console.log(strings.sort());

// 1-3-2. 숫자 정렬
let numbers = [10, 4, 3, 5, 3, 4, 10, 2, 6];
numbers.sort((a, b) => {
  // 오름차순
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
});
console.log(numbers);

numbers.sort((a, b) => {
  // 내림차순
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
});
console.log(numbers);

// 1-4. toSorted() - 정렬된 새로운 배열을 반환
let originArr = ["abc", "bca", "bac", "cba"];
console.log(originArr);
console.log(originArr.toSorted());

// 1-5. join(seperator) - 배열의 모든 요소를 하나의 문자열로 합친 결과를 반환
let seperator = " ";
console.log(originArr.join(seperator));
seperator = "-";
console.log(originArr.join(seperator));
