import { Route, Routes } from "react-router-dom";
import "./App.css";
import Diary from "./pages/diary";
import Home from "./pages/home";
import New from "./pages/new";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import {
  act,
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

/* 
  reducer(state, action)
  - useReducer에서 사용할 상태 변경 로직을 담당하는 함수
  - 인자
    - state: 현재 일기 배열 상태
    - action: 상태 변경을 설명하는 객체
      - action.type: 어떤 동작을 할지 나타내는 문자열
      - action.data 또는 action.id: 동작에 필요한 추가 데이터
*/
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

/* 
  DiaryStateContext
  - 일기 데이터 배열 자체를 내려주는 Context
  - 어떤 컴포넌트에서든 이 Context를 구독하면 현재 일기 목록을 읽을 수 있음
*/
export const DiaryStateContext = createContext();

/* 
  DiaryDispatchContext
  - 일기 관련 액션 함수(onCreate, onUpdate, onDelete)를 내려주는 Context
  - 상태 읽기와 액션 호출을 분리하기 위해 상태용 Context와 분리해서 설계함
  - 이렇게 분리하면 불필요한 리렌더를 줄이는 데도 도움이 됨
*/
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  /* 
    useNavigate()
    - react-router-dom에서 제공하는 훅
    - 자바스크립트 코드(이벤트 핸들러 등) 안에서 특정 경로로 이동하고 싶을 때 사용함
    - 기존의 window.location.href처럼 페이지 전체를 새로고침하지 않고 SPA 방식으로 부드럽게 화면 전환을 수행함
  */
  // const nav = useNavigate();

  /* 
    onClickButton
    - 버튼 클릭 시 호출되는 이벤트 핸들러 함수
    - nav("/new")를 호출하여 프로그래밍 방식으로 "/new" 경로로 이동함
    - Link 컴포넌트를 쓰지 않고, 
      특정 로직 처리 후 이동해야 할 때 주로 이런 패턴을 사용함
  */
  // const onClickButton = () => {
  //   nav("/new");
  // };

  /* 
    idRef
    - 새 일기를 생성할 때 사용할 다음 id 값을 관리하는 useRef
    - 초기값 4
      - mockData에 1,2,3까지 있으므로 다음 새 데이터는 4부터 시작하도록 하기 위함
    - useRef는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는 특징이 있음
      - 단순히 증가만 시키고 화면에 직접 그리지 않을 때 적합한 방식
  */
  const idRef = useRef(0);

  /* 
    useReducer(reducer, mockData)
    - 상태 관리 로직을 reducer에 위임하여 data 상태를 관리함
    - data: 현재 일기 목록 상태
    - dispatch: reducer에 action을 전달하는 함수
      - dispatch({ type: "...", data: {...} }) 형태로 사용

    이 구조를 쓰는 이유
    - 일기 생성, 수정, 삭제처럼 서로 연관된 상태 변경 로직을 한 곳(reducer)에서 깔끔하게 관리하기 위함
    - 상태 변경 패턴이 복잡해질수록 useState 여러 개보다 useReducer가 가독성이 좋음
  */
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const storedDiary = localStorage.getItem("diary");
    if (!storedDiary) {
      return;
    }

    const parsedDiary = JSON.parse(storedDiary);
    if (!Array.isArray(parsedDiary)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedDiary.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedDiary,
    });

    setIsLoading(false);
  }, []);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중..!</div>;
  }

  return (
    <>
      {/* 
      <div>
        Link 컴포넌트를 활용한 라우팅
        - a 태그 대신 사용되는 컴포넌트
        - SPA 방식으로 페이지를 전환하므로 전체 새로고침이 일어나지 않음
        - to 속성에 이동할 경로를 문자열로 전달함

        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div> 
      */}

      {/* 
      버튼을 활용한 라우팅
       - onClick 이벤트에서 onClickButton을 호출
       - onClickButton 안에서 useNavigate로 라우팅 처리

      <button onClick={onClickButton}>New 페이지로 이동</button> 
      */}

      {/* 
        Context Provider 구조

        DiaryStateContext.Provider
        - value에 data를 전달하여 하위 컴포넌트에서 일기 목록을 읽을 수 있게 함

        DiaryDispatchContext.Provider
        - value에 onCreate, onUpdate, onDelete를 객체로 전달
        - 하위 컴포넌트에서 일기 생성/수정/삭제 액션을 호출할 수 있게 함

        이 두 Provider로 감싼 영역 안의 모든 컴포넌트는 별도의 props 전달 없이도 Context를 통해 일기 데이터와 액션에 접근 가능함
      */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
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
              - "/diary/1", "/edit/2" 등 다양한 id 값에 대응 가능
              - Diary 컴포넌트에서는 useParams()로 id 값을 읽어올 수 있음
            */}
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />

            {/* 
              와일드카드 라우트
              - "*"는 위에 정의된 어떤 경로와도 매칭되지 않을 때 실행됨
              - 보통 404 Not Found 페이지로 사용함
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
