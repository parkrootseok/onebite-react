console.log("chapter14 - 비동기 작업 처리하기(async & await)");

// 1. async: 어떤 함수를 비동기 함수로 만들어주는 키워드
async function getData() {
  return {
    name: "reo",
    id: "parkrootseok",
  };
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({
  //       name: "reo",
  //       id: "parkrootseok",
  //     });
  //   }, 1500);
  // });
}

// 2, await: 비동기 함수가 다 처리되기를 기다리는 역할을 수행하는 키워드
// - async 함수 내부에서만 사용이 가능한 키워드
async function printData() {
  // await 사용 X
  // getData().then((result) => {
  //   console.log(result);
  // });
  // await 사용 O
  const data = await getData();
  console.log(data);
}

printData();
