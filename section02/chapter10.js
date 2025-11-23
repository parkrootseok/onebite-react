console.log("chapter10 - Date객체와 날짜");

// 1. Date
// 1-1. Date 객체 생성 - 매개 변수 X
let date = new Date(); // -> 현재 날짜 및 시간
console.log(date);

// 1-2. Date 객체 생성 - 매개 변수 O
date = new Date("1997-10-30");
console.log(date);
date = new Date("1997/10/30");
console.log(date);
date = new Date("1997.10.30");
console.log(date);
date = new Date("1997/10/30 23:59:59");
console.log(date);

// - 아래와 같은 방법은 지양
// - 이유는 숫자로 전달되기에 getMonth() 반환값에 있어서 12만 0-index를 따르게 됨
// - 나머지 1~11은 1-index처럼 인식
// date = new Date(1997, 10, 28, 23, 59, 59);
// console.log(date);

// 2. 타임 스탬프: 특정 시간이 UTC(1970.01.01 00시 00분 00초)로 부터 몇 ms가 지났는지 의미하는 값
let ts = date.getTime();
console.log(ts);

let tsToDate = new Date(ts);
console.log(date, tsToDate);

// 3. 시간 요소 추출
// 3-1. 연
let year = date.getFullYear();
// 3-2. 월 (0-index 사용)
// - 1월 : 0, 2월 : 1, ... , 12월 : 11
let month = date.getMonth() + 1;
// 3-3. 일
let day = date.getDate();
// 3-4. 시
let hour = date.getHours();
// 3-5. 분
let minutes = date.getMinutes();
// 3-6. 초
let seconds = date.getSeconds();

console.log(year, month, day, hour, minutes, seconds);

// 4. 시간 수정
// 4-1. 연
date.setFullYear(1965);
// 4-2. 월
date.setMonth(7);
// 4-3. 일
date.setDate(2);
// 4-4. 시
date.setHours(16);
// 4-5. 분
date.setMinutes(30);
// 4-6. 초
date.setSeconds(45);

console.log(date);

// 5. 시간을 여러 포맷으로 출력하
// 5-1. 날짜만 출력 (시분초 제외)
console.log(date.toDateString());
// 5-2. 현지화된 포맷 출력
console.log(date.toLocaleString());
