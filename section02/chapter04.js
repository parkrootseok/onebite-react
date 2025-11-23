console.log("chapter4 - Spread 연산자와 Rest 매개변수");

// 1. Spread 연산자(...Source): 객체나 배열에 저장된 여러 값을 개별로 흩뿌려주는 연산자
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// - Rest 매개변수는 마지막에 위치 (Rest 매개변수 이후에 매개변수 선언 불가)
function funcB(start, ...rest) {
  console.log(start, rest);
}
funcB(...arr1);
