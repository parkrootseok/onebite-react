import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get_stringed_date";

const Diary = () => {
  /* 
    useParams()
    - react-router-dom에서 제공하는 훅으로, 현재 URL 경로(Path Parameter)에 포함된 값을 가져오는 역할을 함
    - 예시 라우팅
      - <Route path="/diary/:id" element={<Diary />} />
        → 위와 같이 :id 형태로 선언된 부분이 Path Parameter임

    - 예시 URL
      - https://example.com/diary/10
        → useParams() 결과: { id: "10" }

    - useParams()는 객체를 반환하며, key는 라우트 경로의 파라미터 이름, value는 URL에 실제 들어온 문자열 값이 됨
      - 모든 값은 문자열(string)로 반환된다는 점에 주의해야 함
  */
  const params = useParams();
  const nav = useNavigate();
  const diary = useDiary(params.id);

  if (!diary) {
    return <div>데이터 로딩중...!</div>;
  }

  return (
    <div>
      <Header
        title={`${getStringedDate(new Date(diary.createdDate))} 기록`}
        leftchild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightchild={
          <Button
            text={"수정 하기"}
            onClick={() => nav(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer emotionId={diary.emotionId} content={diary.content} />
    </div>
  );
};

export default Diary;
