import { useParams } from "react-router-dom";

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

  /*
    params.id
    - URL 경로에서 id 파라미터를 꺼낸 값
    - ex) "/diary/10" → params.id === "10"

    - 숫자로 사용하고 싶은 경우 Number(params.id) 또는 parseInt(params.id)로 변환해야 함
      ex) const diaryId = Number(params.id)

    - params 객체에는 라우트에서 정의한 모든 파라미터가 들어있음
      ex) /user/:userId/post/:postId
          → params = { userId: "...", postId: "..." }
  */
  console.log(params);

  return <div>{params.id}번 Diary</div>;
};

export default Diary;
