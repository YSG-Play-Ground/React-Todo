import React, { useState, useEffect } from "react";
import Header from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import Layout from "./components/Layout";

const ToDo = () => {
  const tabTitle = ["전체", "해야 할 일", "완료"];
  const [tab, setTab] = useState(tabTitle[0]);
  const [list, setList] = useState(readTodoFromLocalStroage);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Layout>
      <Header tab={tab} setTab={setTab} />
      <TodoList list={list} setList={setList} tab={tab} />
    </Layout>
  );
};

export default ToDo;

const readTodoFromLocalStroage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};
