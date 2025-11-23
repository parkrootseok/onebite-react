import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

// 1. 라이프사이클 (마운트 -> 업데이트 -> 언마운트)
// - 마운트 : 컴포넌트가 탄생하는 순간, 화면에 처음 렌더링되는 순간
// - 업데이트 : 컴포넌트가 리 렌더링 되는 순간
// - 언마운트 : 컴포넌트가 화면에서 사라지는 순간, 렌더링에서 제외되는 순간
// -> useEffect를 활용하여 라이프사이클을 제어할 수 있음

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 2. useEffect
  // - 2번째 인자(의존성 배열)인 배열에 전달된 값이 변경되면, 1번째 인자인 콜백 함수를 실행
  useEffect(
    // 콜백 함수
    () => {
      console.log(`count: ${count} / input: ${input}`);
    },
    // 의존성 배열 (dependency Array, deps)
    [count, input]
  );

  // 4. 라이프사이클 제어
  // 4-1. 마운트
  // - 마운트 단계에서 실행할 동작이 있다면, 의존생 배열을 빈 배열로 선언
  useEffect(() => {
    console.log("mount");
  }, []);

  // 4-2. 업데이트
  // - 리 렌더링 단계마다 실행할 동작이 있다면, 의존성 배열을 생략
  useEffect(() => {
    // 마운트 시점을 제외하고, 업데이트 순간에만 콜백 함수를 실행하고 싶을 경우 useRef를 활용
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClick = (value) => {
    // 3. setCount는 비동기 함수이기 때문에
    setCount(count + value);
    // 아래와 같이 할 경우, 변경되기 이전의 값이 출력됨
    // console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClick={onClick} />
      </section>
    </div>
  );
}

export default App;
