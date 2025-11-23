console.log("chapter 7 - 연산자1");

// 1. 대입 연산자 (=)
let var1 = 1;

// 2. 산술 연산자 (+, -, /, *, %)
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합(산술 + 대입) 대입 연산자 (+=, -=, /=, *=, %=)
let num7 = 10;

num7 += 20;
num7 -= 20;
num7 /= 20;
num7 *= 20;
num7 %= 20;

// 4. 증갑 연산자 (++, --)
let num8_1 = 8;
let num8_2 = 8;

console.log(++num8_1); // -> 9 (전위 연산)
console.log(num8_2++); // -> 8 (후위 연산)

// 5. 논리 연산자 (&&, ||, !)
let and = true && false;
let or = true || false;
let not = !true;
console.log(and, or, not);

// 6. 비교 연산자 (===, !==, <, <=, >, >=)
// -> ==는 값의 자료형은 비교 X, ===의 경우 자료형까지 비교
let comp1 = 1 === "1";
let comp2 = 1 == "1";
console.log(comp1, comp2); // -> false true

let comp3 = 2 > 1;
let comp4 = 2 > 1;
console.log(comp3, comp4);
