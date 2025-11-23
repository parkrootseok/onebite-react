import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 올 수 있음
// 2. 숫자, 문자열, 배열 값만 렌더링 가능 (객체 X)
// 3. 모든 태그는 반드시 닫혀야 함
// 4. 최상위 태그는 하나여야 함 (Fragment 사용 가능)
const Main = () => {
  const user = {
    name: "홍길동",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  //   return <> {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>} </>;
};

export default Main;
