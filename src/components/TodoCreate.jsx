import { cls } from "../libs/cls";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext";

const TodoCreate = ({ list, setList }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [todo, setTodo] = useState("");
  const onNameChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTodoCreate = (e) => {
    e.preventDefault();
    const newList = {
      id: list?.length + 1 ?? 0,
      todo,
      checked: false,
    };

    if (todo.trim().length === 0) {
      return;
    } else if (todo.trim().length > 0) {
      setList((prev) => [...prev, newList]);
      setTodo("");
      toast.success("리스트가 생성되었습니다.");
    }
  };

  return (
    <form
      className={cls(
        "absolute bottom-[0%] w-full flex py-[1.4rem] px-[1rem] rounded-b-[1rem]",
        darkMode
          ? "border-t-[white] border bg-[#1a1c35] text-[white]"
          : "border-t-[#222] border bg-[#fdfffd] text-[#222]"
      )}
      onSubmit={handleTodoCreate}
    >
      <input
        className={cls(
          "w-[70%] text-[#222] text-[13px] p-[0.4rem] rounded-tl-[8px] rounded-bl-[8px] outline-none",
          darkMode ? "" : "border border-[#d1d1d1]"
        )}
        type="text"
        value={todo}
        placeholder="할일을 추가해주세요"
        onChange={(e) => onNameChange(e)}
      />
      <button
        type="button"
        className={cls(
          "w-[30%] p-[0.4rem] text-[13px] rounded-tr-[8px] rounded-br-[8px] hover:brightness-125 bg-orange-500 text-[#f5f5f5] font-[700] "
        )}
        onClick={handleTodoCreate}
      >
        추가
      </button>
    </form>
  );
};

export default TodoCreate;
