console.log("chapter 8 - 연산자2");

// 1. null 병합 연산자 (??)
// 1-1. 존재하는 값을 추려내는 기능 (null, undefined가 아닌 값을 찾아내는 연산자)
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // -> 10;

let var5 = var1 ?? var3;
console.log(var5); // -> 20;

// 1-1. 둘 다 null, undefined가 아닐 경우 첫번째 값을 반환
let var6 = var2 ?? var3;
console.log(var6); // -> 10;

// 2. typeof 연산자
// 2-1. 값의 타입을 문자열로 반환
let var7 = 1;
var7 = "hello";

console.log(typeof var7); // -> string

// 3. 3항 연산자 (A ? B : C, 항응 3개 사용)
// 3-1. 조건식(A) 만족 여부에 따라 값(B or C)을 반환
let var8 = 10;
console.log(var8 % 2 === 0 ? "짝" : "홀");
