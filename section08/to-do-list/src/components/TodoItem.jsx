import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  // 기존 Props를 활용하여 주입받는 요소를 useContext에서 주입을 받아 사용
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input checked={isDone} onChange={onChangeCheckBox} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// React.memo (고차 컴포넌트, HOC : Higher Order Compoent)
// - Props에 변화가 없다면, 리렌더링을 수행하지 않도록 하기 위한 내장 함수
// - 리렌더링 여부는 Props의 얉은 비교를 통해 결정됨
//   - 객체 타입(새롭게 생성될 때 마다 주소값이 변경됨)이 Props에 존재할 경우
//     의도한 대로 동작하지 않을 수 있음
//   - 이를 해결하는 방법은 2가지 존재
//    - 1안: 콜백 함수를 활용한 리렌더링 결정 로직 커스터마이징
//    - 2안: useCallback 활용

// 1안: 커스터마이징 콜백 함수 전달
// export default memo(TodoItem, (preProps, nextProps) => {
// 콜백 함수를 전달하여 리렌더링 여부 결정 로직을 커스터마이징하여 해결 가능
// - True (변환 X) / Fasle(변환 O)
//   if (preProps.id !== nextProps.id) {
//     return false;
//   }
//   if (preProps.isDone !== nextProps.isDone) {
//     return false;
//   }
//   if (preProps.content !== nextProps.content) {
//     return false;
//   }
//   if (preProps.date !== nextProps.date) {
//     return false;
//   }

//   return true;
// });

// 2안: useCallback 활용
export default memo(TodoItem);
