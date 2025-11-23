console.log("chapter12 - 비동기 작업 처리하기(콜백 함수)");

// 1. 콜백 함수를 활용해 비동기 작업 결과값 활용하기
// function add(a, b, callback) {
//   // 1-2. 비동기 함수 호출
//   setTimeout(() => {
//     // 1-3. 비동기 작업 수행
//     const sum = a + b;
//     // 1-4. 콜백 함수에 비동기 함수 결과값 전달
//     callback(sum);
//   }, 3000);
// }

// // 1-1. 함수 호출
// add(1, 2, (value) => {
//   // 1-5. 파라미터로 받은 결과값을 출력
//   console.log(value);
// });

// 2. 비동기 작업의 결과를 또 다른 비동기 작업의 결과로 활용하기
// - 해당 방법은 인덴트가 늘어날수록 가독성 저하 -> 콜백 지옥
// - Promise라는 객체를 활용하여 해결할 수 있음
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
