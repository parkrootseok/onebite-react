console.log("chapter1 - Truthy와 Falsy");

// 1. Truthy&Falsy: 참이나 거짓을 의미하지 않는 값도 참이나 거짓으로 평가하는 특징
// - JavaScript의 모든 값은 Truthy 하거나 Falsy 함
const isTruthy = (value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
};

// 1-1. Falsy(거짓 같은 값)
// - 7가지
isTruthy(undefined);
isTruthy(null);
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);
isTruthy("");
isTruthy(0n);

// 1-2. Truthy(참 값은 값)
// - 7가지 Falsy를 제외한 모든 값
isTruthy("hello");
isTruthy(123);
isTruthy([]);
isTruthy({});
isTruthy(() => {});

// 2. Truthy와 Falsy 활용하기
function printName(person) {
  // Falsy를 활용하지 않은 경우
  //   if (person === undefined || person === null) {
  //     console.log("person is empty!");
  //     return;
  //   }
  if (!person) {
    console.log("person is empty!");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);
