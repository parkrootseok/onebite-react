import { useState } from "react";

// 리-렌더링 조건
// 1. props 변경
// 2. state 변경
// 3. 부모 컴포넌트 리-렌더링
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  return (
    <div>
      <h1>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
      </h1>

      <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
