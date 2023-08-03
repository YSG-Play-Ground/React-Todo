import React, { useState, useEffect } from "react";
import Header from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import Layout from "./components/Layout";

const ToDo = () => {
  const [tab, setTab] = useState("all"); // 탭상태값 'all', 'active', 'completed'
  const [list, setList] = useState(readTodoFromLocalStroage);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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

const readTodoFromLocalStroage = () => {
  console.log("하하핳");
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};
