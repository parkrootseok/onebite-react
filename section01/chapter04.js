console.log("chapter 4 - 변수와 상수");

// 1. 변수 선언
// - let 키워드 사용
// - 값을 바꿔가면서 저장할 수 있는 저장소
// - 변수 이름은 중복 사용 불가

let age; // 초기화하지 않은 경우
console.log(age); // -> undefined

age = 30; // 30을 저장
console.log(age); // -> 30

// 2. 상수 선언
// - const 키워드 사용
// - 초기화 이후 값 변경 불가능 (선언 후 초기화를 반드시 수행)
const birth = "1997.10.30";
console.log(birth);

birth = "1997.10.31"; // 수정 불가능
console.log(birth);

// 3. 변수 네이밍 규칙
// 3-1. $, _ 제외한 기호 사용 불가
// 3-2. 숫자로 시작할 수 없음
// 3-3. 예약어 사용 불가

// 4. 변수 네이밍 가이드
// 4-1. 변수명에 목적과 의도를 담자
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
