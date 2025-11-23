console.log("chapter 15 - 객체1");

// 1. 객체 생성
// 1-1. 객체 생성자 방식
let obj1 = new Object();

// 1-2. 객체 리터럴 방식 (선호)
let person = {
  // 2. 객체 프로퍼티: key, value 쌍으로 이루어진 객체에 대한 정보를 담고있는 요소
  name: "reo",
  "last name": "park", // key값에 공백이 들어가갈 경우 ""로 감싸기
  age: "29",
  job: "BE Developer",
  extra: {},
  func: () => 1, // 함수도 가능
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 프로퍼티 접근(점 표기법, 괄호 표기법)
console.log(person.name); // 점 표가법
console.log(person.name2); // 존재하지 않는 key에 접근시 undefined
console.log(person["age"]); // 괄호 표가법 (key는 문자열로)
let age = "age";
console.log(person[age]); // 괄호 표가법 (변수를 활용할 경우 문자열 X)

// 3-2. 프로퍼티 추가
person.location = "구로구";
person["height"] = 175;

// 3-3. 프로퍼티 수정
person.job = "developer";
person["location"] = "서울특별시 구로구";

// 3-4. 프로퍼티 삭제
delete person.func;
delete person["extra"];

// 3-5. 프로퍼티 존재 유무 확인
console.log("location" in person);
console.log("func" in person);

console.log(person);
