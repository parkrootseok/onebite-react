console.log("chapter6 - 형 변환");

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 수행
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // -> 1020

// 2. 명시적 형 변환
// -> 개발자가 내장함수 등을 이용해서 직접 형 변환 수행

// 2-1. 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(num + strToNum1); // -> 20

let str2 = "10개";
console.log(Number(str2)); // -> NaN
console.log(parseInt(str2)); // -> 10

// 2-2. 숫자 -> 문지열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");
