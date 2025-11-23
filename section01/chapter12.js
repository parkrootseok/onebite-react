console.log("chapter 12 - 함수 표현식과 화살표 함수");

// 1. 함수 표현식
// 1-1. 함수를 변수에 저장하여 사용 가능
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // -> 저장된 함수 출력

// 1-2. 함수 표현식 방식으로 정의한 메서드는 호이스팅 불가
// varB(); // -> 에러 발생
let varB = function funcB() {
  console.log("funcB");
};
varB(); // -> 정상 호출

// 1-3. 익명 함수
// funcB(); // -> 직접 호출 불가

// 메서드 명을 명시해도 직접적인 호출이 불가하기에
// 아래와 같이 메서드명 없이 함수를 선언하고, 이를 익명 함수라 함.
varB = function () {
  console.log("funcB");
};

// 2. 화살표 함수
// 2-1. function 키워드를 생략하고, =>를 활용
let varC = () => {
  console.log("Arrow Function");
  return 1;
};
console.log(varC());

// 2-2. 단순 값만 반환할 경우 {}, return 생략 가능
let varD = () => 1;
console.log(varD());

// 2-3. 매개변수가 필요할 경우, 함수와 동일하게 () 안에 선언
let varE = (value) => value + 1;
console.log(varE(5));
