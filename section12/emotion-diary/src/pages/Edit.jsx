import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const diary = useDiary(params.id);
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
    }

    nav("/", { replace: true });
  };

  return (
    <div>
      {" "}
      <Header
        title={"일기 수정하기"}
        leftchild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightchild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor diary={diary} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
