import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;

// - Header 컴포넌트와 같은 단순한 컴포넌트의 경우 최적화가 필요한지는 고민 필요
// - memo 함수를 실행하기 연산(props 값 비교, 컴포넌트 값 저장 등등)이 추가적으로 필요
// - 위 연산을 수행하는 비용을 지불할만큼 유의미한지 고민하고 적용해야 함
// export default memo(Header);
