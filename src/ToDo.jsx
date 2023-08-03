import React, { useState } from "react";
import Header from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import Layout from "./components/Layout";

const ToDo = () => {
  const [tab, setTab] = useState("all"); // 탭상태값 'all', 'active', 'completed'
  const [list, setList] = useState([
    { id: 0, todo: "강의보기", checked: true },
    { id: 1, todo: "카페가기", checked: false },
    { id: 2, todo: "청소하기", checked: false },
  ]);

  return (
    <Layout>
      <Header tab={tab} setTab={setTab} />
      <TodoList list={list} setList={setList} tab={tab} />
      <TodoCreate list={list} setList={setList} />
    </Layout>
  );
};

export default ToDo;

// Components
// TodoList   > 리스트
// TodoCreate > 리스트 생성   / List에 겹치는 게 더 나을거같요
// TodoCreate
