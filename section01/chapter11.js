console.log("chapter 11 - 함수");

// 1. 함수 선언
// 1-1. 파라미터 X
function greeting() {
  console.log("안녕하세요!");
}

// 1-2. 파라미터 O
function getArea(width, height) {
  // 3. 중첩 함수 선언
  function another() {
    console.log("another");
  }

  another();
  return width * height;
}

// 2. 함수 호출
// 2-1. 인수 X
greeting();

// 2-2. 인수 O
console.log(getArea(10, 20));
console.log(getArea(30, 20));

// 4. 호이스팅
// - 함수 선언이 호출보다 뒤에 있어도 문제 발생 X
hoisting();

function hoisting() {
  console.log("hosting");
}
