import { useState } from "react";

const Counter = () => {
  // State 선언
  // - state : 현재 컴포넌트가 가지고 있는 데이터
  // - setState : state를 변경하는 함수
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
};

export default Counter;
