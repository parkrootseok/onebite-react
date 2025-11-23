// State : 현재 가지고 있는 형태나 모양을 정의 변화할 수 있는 데이터
// - React가 컴포넌트의 상태를 관리하고, 상태가 변경되면 UI를 자동으로 업데이트 (Re-render)
const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체 : 이벤트가 발생했을 때 자동으로 전달되는 객체
  // - 합성 이벤트 (Synthetic Event) : 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태
  //   - 브라우저 별로 다른 이벤트 객체를 일관된 API로 제공
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
