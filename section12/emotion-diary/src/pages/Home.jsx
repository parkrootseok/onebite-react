import { useSearchParams } from "react-router-dom";

const Home = () => {
  /* 
    useSearchParams()
    - react-router-dom에서 제공하는 훅으로, 현재 URL의 쿼리스트링을 읽고 수정할 수 있게 해주는 역할을 함
    - 예시 URL: https://example.com/home?value=hello&user=reo
      → 여기서 `?value=hello&user=reo` 부분이 쿼리스트링에 해당함
    - 반환값은 [searchParams, setSearchParams] 형태의 배열임
      - searchParams: URLSearchParams 인스턴스
        - get, set, has 등 메서드를 통해 쿼리스트링 값을 읽거나 조작할 수 있음
      - setSearchParams: 쿼리스트링 전체를 교체하는 함수
        - 내부적으로 history push/replace를 사용하여 주소창의 쿼리스트링을 변경함
  */
  const [params, setParams] = useSearchParams();

  /*
    params.get("value")
    - 현재 URL의 쿼리스트링에서 key가 "value"인 값을 가져옴
    - 예시
      URL: https://example.com/home?value=hello
      → params.get("value") 결과: "hello"

    - key가 존재하지 않을 경우 null을 반환함
      → ex) 쿼리스트링에 value가 없을 때 params.get("value")는 null이 됨

    - 콘솔에 현재 value 값을 출력하여 디버깅용으로 확인할 수 있음
  */
  console.log(params.get("value"));

  /*
    setParams 사용 예시
    - 아래와 같이 호출하면 URL이 `/home?value=new-value` 형태로 변경됨
    - 컴포넌트 렌더링 시점에는 사용하지 않았지만, 
      버튼 클릭 등 이벤트 핸들러 안에서 사용하면 동적으로 쿼리스트링을 변경할 수 있음

    예시
    const handleClick = () => {
      setParams({ value: "new-value" })
    }

    이때 setParams에 전달하는 값은 객체, URLSearchParams, 문자열 형태 모두 가능함
    - 객체 예시: setParams({ value: "hello", page: "1" })
    - 문자열 예시: setParams("value=hello&page=1")
  */

  return <div>Home</div>;
};

export default Home;
