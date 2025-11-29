import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Diary from "./pages/diary";
import Home from "./pages/home";
import New from "./pages/new";
import NotFound from "./pages/NotFound";

function App() {
  /* 
    useNavigate()
    - react-router-dom에서 제공하는 훅
    - 자바스크립트 코드(이벤트 핸들러 등) 안에서 특정 경로로 이동하고 싶을 때 사용함
    - 기존의 window.location.href처럼 페이지 전체를 새로고침하지 않고 SPA 방식으로 부드럽게 화면 전환을 수행함
  */
  const nav = useNavigate();

  /* 
    onClickButton
    - 버튼 클릭 시 호출되는 이벤트 핸들러 함수
    - nav("/new")를 호출하여 프로그래밍 방식으로 "/new" 경로로 이동함
    - Link 컴포넌트를 쓰지 않고, 
      특정 로직 처리 후 이동해야 할 때 주로 이런 패턴을 사용함
  */
  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        {/* 
          Link 컴포넌트를 활용한 라우팅
          - a 태그 대신 사용되는 컴포넌트
          - SPA 방식으로 페이지를 전환하므로 전체 새로고침이 일어나지 않음
          - to 속성에 이동할 경로를 문자열로 전달함
        */}
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>

      {/* 
        버튼을 활용한 라우팅
        - onClick 이벤트에서 onClickButton을 호출
        - onClickButton 안에서 useNavigate로 라우팅 처리
      */}
      <button onClick={onClickButton}>New 페이지로 이동</button>

      {/* 
        Routes, Route 설정
        - Routes
          - 여러 Route들을 감싸는 컨테이너 역할
          - 내부에서 현재 URL과 매칭되는 단 하나의 Route를 선택해 렌더링함
        - Route
          - path: 매칭할 URL 경로
          - element: 해당 경로와 매칭될 때 렌더링할 컴포넌트
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />

        {/* 
          동적 라우팅
          - :id 부분이 동적 세그먼트
          - "/diary/1", "/diary/2" 등 다양한 id 값에 대응 가능
          - Diary 컴포넌트에서는 useParams()로 id 값을 읽어올 수 있음
        */}
        <Route path="/diary/:id" element={<Diary />} />

        {/* 
          와일드카드 라우트
          - "*"는 위에 정의된 어떤 경로와도 매칭되지 않을 때 실행됨
          - 보통 404 Not Found 페이지로 사용함
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
