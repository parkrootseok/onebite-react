import "./List.css";
import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {
  // 기존 Props를 활용하여 주입받는 요소를 useContext에서 주입을 받아 사용
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // useMemo(콜백 함수, 의존성 배열)
  // - 메모이제이션 기법을 통해 불필요한 연산 수행을 막기 위해 사용하는 React Hook
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  // const getAnalyzedData = () => {
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return { totalCount, doneCount, notDoneCount };
  // };
  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>To do List 🌱</h4>

      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              // onUpdate={onUpdate}
              // onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
