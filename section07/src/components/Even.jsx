import { useEffect } from "react";

const Even = () => {
  // 4-3. 언마운트
  useEffect(() => {
    // 클린업(정리 함수)
    // - useEffect가 끝나는 시점에 실행
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
