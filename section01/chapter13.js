console.log("chapter 13 - 콜백 함수");

// 1. 콜백 함수: 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
// 1-1. 기본 예제
function main(func) {
  func();
}

function sub() {
  console.log("sub1");
}

main(sub);

// 1-2. 함수 표현식, 화살표 함수도 콜백 함수로 사용 가능
main(function () {
  console.log("sub2");
});

main(() => {
  console.log("sub3");
});

main(() => console.log("sub4"));

// 1-3. 응용 예제: 구조가 유사한 함수의 중복 코드를 제거
// repeat, repeatDouble은 유사한 구조를 가지고 있음
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}
repeat(5);

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
repeatDouble(5);

// callback 함수를 통해, 상이한 부분만 전달
function repeatCallback(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatCallback(5, (idx) => {
  console.log(idx);
});

repeatCallback(5, (idx) => {
  console.log(idx * 2);
});
