console.log("chapter 3 - React App 구동원리 살펴보기");

// 1. 왜, localhost:5173으로 접속 가능?
// - React App 내부에 웹 서버가 내장되어 있음
// - npm rum dev는 내장되어 있는 웹 서버를 실행하는 명령어

// 2. 화면을 어떻게 렌더링할끼?
// 1. index.html 브라우저로 전송
//  - index.html Body 태그엔 아무것도 없음
//  - main.js 파일을 불러와 렌더링
// 2. main.js
//  - createRoot(document.getElementById('root')) : 인수로 받은 HTML 요소를 ReactDOM의 Root로 생성
//  - 이후 App 컴포넌트를 렌더링    