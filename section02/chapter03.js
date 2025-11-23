console.log("chapter3 - 구조 분해 할당");

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "reo",
  age: "27",
};

let { name, age, hobby = "develop" } = person;
console.log(name, age, hobby);

// 3. 객체 구조 분해 할당을 이용한 함수 매개변수 받기
const func = ({ name, age, hobby = "develop" }) => {
  console.log(name, age, hobby);
};

func(person);
