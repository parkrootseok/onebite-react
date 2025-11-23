// CommonJS 시스템을 활용해 가져오기
// const { add, sub } = require("./math");

// ESModule 시스템을 활용해 가져오기
import { add, sub } from "./math.js";
import multifly from "./math.js"; // export default 방식을 사용한 경우

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multifly(2, 3));

import randomColor from "randomcolor";
const color = randomColor();
console.log(color);
