import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

/*
  getMonthlyData
  - pivotDate(기준 날짜)가 포함된 월의 기간을 계산하고
    해당 범위(beginTime ~ endTime)에 속하는 일기만 필터링하여 반환하는 함수
*/
const getMonthlyData = (pivotDate, data) => {
  // 해당 월의 시작 시각: YYYY-MM-01 00:00:00
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  // 해당 월의 마지막 시각: YYYY-MM-(마지막날) 23:59:59
  // month + 1, date = 0 → 이번 달의 마지막 날짜가 되는 JS Date 특성 활용
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  // createdDate(타임스탬프)가 위 범위 안에 포함되는 데이터만 반환
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  /* 
    useSearchParams()
    - 현재 URL의 쿼리스트링을 읽고 수정할 수 있게 해주는 훅
    - 예시 URL: https://example.com/home?value=hello&user=reo
      → 여기서 `?value=hello&user=reo` 부분이 쿼리스트링에 해당함
    - 반환값은 [searchParams, setSearchParams] 형태의 배열임
      - searchParams: URLSearchParams 인스턴스
        - get, set, has 등 메서드를 통해 쿼리스트링 값을 읽거나 조작할 수 있음
      - setSearchParams: 쿼리스트링 전체를 교체하는 함수
        - 내부적으로 history push/replace를 사용하여 주소창의 쿼리스트링을 변경함
  */
  // const [params, setParams] = useSearchParams();

  /*
    DiaryStateContext
    - App 전체에서 관리되는 일기 데이터 전역 상태
    - props 없이도 어디에서든 useContext로 접근 가능
  */
  const data = useContext(DiaryStateContext);

  /*
    pivotDate
    - 현재 화면에서 보고 있는 기준 날짜
    - ex) pivotDate가 2025년 2월이면 → 해당 월의 일기만 필터링됨
  */
  const [pivotDate, setPivotDate] = useState(new Date());

  /*
    monthlyData
    - 전체 일기 목록(data) 중에서
      pivotDate가 속한 월의 일기만 추린 결과
  */
  const monthlyData = getMonthlyData(pivotDate, data);

  /*
    onIncreaseMonth / onDecreaseMonth
    - 기준 날짜를 한 달 뒤, 혹은 한 달 앞으로 이동시키는 함수
    - 연도는 유지하고 month만 +1 / -1 하여 새로운 Date 객체 생성
  */
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      {/*
        Header
        - 상단 영역에서 현재 연/월을 제목으로 표시
        - 좌우 버튼 클릭 시 이전 달/다음 달로 이동
      */}
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftchild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightchild={<Button onClick={onIncreaseMonth} text={">"} />}
      />

      {/*
        DiaryList
        - 월별로 필터링된 일기 데이터만 전달하여 렌더링
      */}
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
