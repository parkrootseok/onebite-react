console.log("chapter 16 - 객체2");

// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 1-1. 객체 자체를 변경하는 것은 불가능
// animal = { type: "강아지" };

// 1-2. 객체 프로퍼티 조작은 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// 2. 메서드: 객체 프로퍼티 중 값이 함수인 프로퍼티
const person = {
  name: "reo",
  // 2-1. 메서드 선언은 여러 방법을 지원함
  // 함수 표기법
  greeting: function greeting() {
    console.log(`안녕하세요. ${person.name}입니다!`);
  },
  // 익명 함수
  greeting: function () {
    console.log(`안녕하세요. ${person.name}입니다!`);
  },
  // 화살표 함수
  greeting: () => {
    console.log(`안녕하세요. ${person.name}입니다!`);
  },
  // 메서드 선언
  greeting() {
    console.log(`안녕하세요. ${person.name}입니다!`);
  },
};

person.greeting();
