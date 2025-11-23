function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// 1. 모듈 시스템
// 1-1. CommonJS
// - type: "commonjs" 설정 필수
// module.exports = {
//   add: add,
//   sub: sub,
// };

// 1-2. ESModule
// - type: "module" 설정 필수
// 1-2-1. export { }
export { add, sub };

// 1-2-2. export function () {}
// export function add(a, b) {
//   return a + b;
// }

// export function sub(a, b) {
//   return a - b;
// }

// 1-2-3. export default function () {}
export default function multifly(a, b) {
  return a * b;
}
