console.log("chapter 14 - 스코프");

// 1. 스코프: 변수나 함수에 접근하거나 호출할 수 있는 범위
// 1-1. 전역 스코프: 전체 영역에서 접근 가능한 범위
let globalA = 2;
console.log(globalA); // -> 호출 가능

// 1-2. 지역 스코프: 특정 영역에서만 접근 가능한 범위
function funcA() {
  // 지역 스코프 (해당 변수를 감싸고 있는 블록({ ))에서만 접근 및 호출 가능)
  let localA = 1;
  console.log("지역 변수: ", localA); // -> 호출 가능 (선언된 블록({ }) 안)
  console.log("전역 변수: ", globalA); // -> 호출 가능

  // 함수안에 선언된 중첩 함수도 지역 스코프를 가짐
  function localFuncA() {
    console.log("지역 함수 호출");
  }
}

// console.log(localA); // -> 호출 불가(선언된 블록({ }) 밖)
// localFuncA(); // -> 호출 불가(함수도 동일하게 적용됨)
funcA();

// 단, if문이나 반복문안에 선언한 함수는 예외
if (true) {
  function localFuncB() {
    console.log("if문 안에 선언된 지역 함수");
  }
}

for (let idx = 0; idx < 3; idx++) {
  function localFuncC() {
    console.log("for문 안에 선언된 지역 함수");
  }
}

localFuncB();
localFuncC();
