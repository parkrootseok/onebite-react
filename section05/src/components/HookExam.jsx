import { useState } from "react";
import useInput from "../hooks/useInput";
// React Hooks (useState, useRef 등등)
// - 클래스 컴포넌트에서만 활용 가능한 리액트의 특별한 기능등을
//   함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드들
//
// - 과거 Function 컴포넌트는 UI 렌더링만 가능했고,
//   Class 컴포넌트는 모든 기능이 가능하지만, 문법이 매우 복잡

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState();
const HookExam = () => {
  // 2. 조건문, 반복문 내부 호출 불가
  // -> 서로 다른 훅들의 호출 순서가 엉망이 되는 상황이 발생
  // if (true) {
  //   const state = useState();
  // }
  // 3. Custom Hook 제작 가능 (useXXX)
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
