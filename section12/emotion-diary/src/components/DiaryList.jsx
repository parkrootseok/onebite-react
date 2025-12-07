import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";

const DiaryList = ({ data = [] }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  /*
    onChangeSortType
    - 셀렉트 박스에서 정렬 기준이 변경될 때 호출되는 핸들러
    - e.target.value를 통해 선택된 옵션 값을 읽고 sortType 상태를 갱신
  */
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  /*
    getSortedData
    - 전달받은 data를 sortType 기준에 따라 정렬한 새로운 배열을 반환
    - Array.prototype.toSorted를 사용하여 원본 배열을 건드리지 않고 정렬된 복사본을 생성
    - createdDate는 숫자 또는 문자열일 수 있으므로 Number()로 감싸서 비교
  */
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        // 오래된 순: 과거 → 최근 순으로 오름차순 정렬
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        // 최신 순: 최근 → 과거 순으로 내림차순 정렬
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        {/*
          정렬 기준 선택 셀렉트 박스
          - onChange 시 sortType 상태를 변경
          - value를 sortType과 묶어 현재 선택값이 유지되도록 설정
        */}
        <select onChange={onChangeSortType} value={sortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>

        {/*
          "새 일기 쓰기" 버튼
          - 클릭 시 /new 경로로 이동
          - type="POSITIVE"는 스타일링 용도라고 가정
        */}
        <Button
          onClick={() => {
            nav("/new");
          }}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>

      {/* 일기 아이템 리스트 영역 */}
      <div className="list_wrapper">
        {sortedData.map((item) => (
          // DiaryItem에는 각 일기의 모든 필드를 그대로 props로 전달
          // key는 React가 리스트 렌더링 시 각 요소를 구분하는 데 사용
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
