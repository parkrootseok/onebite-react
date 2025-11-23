import "./App.css";
import HookExam from "./components/HookExam";
import Register from "./components/Register";

// Component : HTML 태그를 반환하는 자바스크립트 함수
// - Component는 대문자로 시작
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
  };

  return (
    <>
      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        children prop으로 컴포넌트 전달 가능
        <Header />
      </Button>

      <Bulb />
      <Counter /> */}

      {/* <Register /> */}
      <HookExam />
    </>
  );
}

export default App;
