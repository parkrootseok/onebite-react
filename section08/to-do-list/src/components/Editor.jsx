import { useContext, useRef, useState } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  // 기존 Props를 활용하여 주입받는 요소를 useContext에서 주입을 받아 사용
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 To do..."
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
