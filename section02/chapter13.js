console.log("chapter13 - 비동기 작업 처리하기(Promise)");

// 1. Promise: 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 내장 객체
// - 비동기 작업을 Wrapping하는 객체
// - 3가지 상태 존재
//   - 대기(Pending): 작업 미완료 [영상 로딩]
//      - 대기 -> 성공: 해결(resolve) 되었다. [영상 로딩 완료]
//      - 대기 -> 실패: 거부(reject) 되었다. [영상 로딩 실패]
//   - 성공(Fulfilled): 성공적으로 마무리 된 상태 [시청 가능]
//   - 실패(Rejected): 실패한 상태 [시청 불가능]
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // executor: 비동기 작업을 실행하는 함수
    setTimeout(() => {
      if (typeof num === "number") {
        // resolve(): 성공 상태를 알리고 싶을 때 호출
        resolve(num + 10);
      } else {
        // reject(): 실패 상태를 알리고 싶을 때 호출
        reject("num이 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// 2. Promise Chaining
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
