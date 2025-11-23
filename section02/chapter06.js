console.log("chapter6 -배열과 객체 순회하기");

// 1. 배열 순회
let arr = [1, 2, 3];
// 1-1. 인덱스 활용
for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx]);
}
// 1-2. for of
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "reo",
  age: "27",
};
// 2-1. Object.keys: 객체에서 key 값들만 뽑아 배열로 반환하는 함수 (배열만 가능)
let keys = Object.keys(person);
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2-2. Object.values: 객체에서 value 값들만 뽑아 배열로 반환하는 함수
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}

// 2-3. for in (객체에만 가능)
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
