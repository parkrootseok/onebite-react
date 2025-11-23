import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

// useReducer(리듀서 함수, 초기값)
// - 컴포넌트 내부에서 상태를 생성하고 관리하기 위한 React Hook
// - 복잡한 상태 전환 로직을 한 곳으로 모아서 관리하고 싶을 때 유용함
// - 컴포넌트는 UI 렌더링에 집중하고, 상태 전환 로직은 리듀서로 분리하여
//   가독성과 유지 보수성을 높일 수 있음
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      const newTodo = {
        id: action.data.id,
        isDone: action.data.isDone,
        content: action.data.content,
        date: action.data.date,
      };

      // 새 할 일을 기존 state 앞에 추가한 새로운 배열을 반환
      return [newTodo, ...state];
    }

    case "UPDATE": {
      // 특정 id의 isDone 값을 토글한 새로운 배열을 반환
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    }

    case "DELETE": {
      // 특정 id를 가진 할 일을 제외한 새로운 배열을 반환
      return state.filter((todo) => todo.id !== action.targetId);
    }

    default: {
      // 정의되지 않은 action type일 경우 기존 state를 그대로 반환
      return state;
    }
  }
}

// Context
// - 컴포넌트 트리 전반에 걸쳐 데이터를 전달하기 위한 또 다른 방법
// - 기존 Props 방식은 부모 → 자식 방향으로만 전달 가능하여
//   중간 컴포넌트들이 실제로는 사용하지 않는 props를 계속 전달해야 하는 문제가 있음
// - 이런 불필요한 props 전달 체인을 Props Drilling이라고 부름
// - Context를 사용하면 상위에서 한 번 제공한 값을 하위에서 바로 꺼내 쓸 수 있어
//   Props Drilling 문제를 완화할 수 있음
// export const TodoContext = createContext()

// Context 분리
// - 하나의 Context에 상태와 액션(함수)을 모두 넣으면
//   그 중 하나만 바뀌어도 해당 Context를 구독하는 모든 컴포넌트가 리렌더링됨
// - 예를 들어 상태 값만 변경되어도, 액션만 필요로 하는 컴포넌트까지 리렌더링될 수 있음
// - 이를 줄이기 위해 "변경되는 값"과 "자주 변하지 않는 값"을 서로 다른 Context로 분리함
//   - TodoStateContext  : 실제 투두 목록 상태를 제공
//   - TodoDispatchContext: 투두를 조작하는 함수(onCreate, onUpdate, onDelete)를 제공
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const idRef = useRef(1);

  // useCallback(콜백 함수, 의존성 배열)
  // - 리렌더링 시마다 새로운 함수 객체가 생성되는 것을 방지하기 위한 Hook
  // - 동일한 로직을 가진 함수에 대해 안정적인 참조를 유지해 주므로
  //   이 함수를 props나 Context를 통해 하위 컴포넌트에 전달할 때
  //   불필요한 리렌더링을 줄이는 데 도움이 됨
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // useMemo를 활용하여 Context에 전달할 value 객체의 참조를 안정화함
  // - useCallback은 각 핸들러 함수(onCreate, onUpdate, onDelete)의 "함수 참조"만 고정함
  // - 하지만 Context.Provider는 value prop 전체를 기준으로 변경 여부를 판단함
  //   즉, value에 넘기는 객체가 리렌더링마다 새로 생성되면
  //   함수 참조는 같더라도 객체 참조가 달라졌다고 판단하여
  //   해당 Context를 구독하는 모든 컴포넌트가 리렌더링됨
  // - 따라서 value로 넘길 객체를 useMemo로 감싸
  //   의존성 배열에 있는 값들이 실제로 변경될 때만 새 객체를 생성하고
  //   그렇지 않을 때는 이전 객체 참조를 재사용하도록 하여
  //   불필요한 리렌더링을 방지함
  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, [onCreate, onUpdate, onDelete]);

  return (
    <div className="App">
      <Header />
      {/* Context를 활용하여 Props 전달 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor
          // onCreate={onCreate}
          />
          <List
          // todos={todos} onUpdate={onUpdate} onDelete={onDelete}
          />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
