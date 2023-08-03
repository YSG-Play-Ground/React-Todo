import React, { useState, useContext } from "react";
import { cls } from "./libs/cls";
import Header from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { DarkModeContext } from "./context/DarkModeContext";

// <--- TODO --->
// 전체아이템  리스트
// 필터링  (완료, 미완료)
// 아이템 생성, 삭제   >> 완료
// 아이템 체크박스  완료시  >  체크
// 다크모드 지원
// 로컬스트로지 저장

const ToDo = () => {
  // 탭, 다크모드 제어,
  const [tab, setTab] = useState("all");
  const { darkMode, toggleDarkmode } = useContext(DarkModeContext);

  const [list, setList] = useState([
    { id: 0, todo: "강의보기", checked: true },
    { id: 1, todo: "카페가기", checked: false },
    { id: 2, todo: "청소하기", checked: false },
  ]);

  // 체크박스 아이템 제어 핸들러

  return (
    <div className="w-full h-screen">
      <section
        className={cls(
          "w-[50%] h-full m-auto  relative border border-grey",
          darkMode ? "bg-[black] text-[white]" : "bg-[white] text-[black]"
        )}
      >
        <Header
          tab={tab}
          setTab={setTab}
          darkMode={darkMode}
          toggleDarkmode={toggleDarkmode}
        />
        <TodoList list={list} setList={setList} tab={tab} />
        <TodoCreate list={list} setList={setList} darkMode={darkMode} />
      </section>
    </div>
  );
};

export default ToDo;
