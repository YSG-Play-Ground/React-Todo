import { cls } from "../libs/cls";
import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoCreate = ({ list, setList, darkMode }) => {
  const [todoName, setTodoName] = useState("");
  const onNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoCreate = (e) => {
    e.preventDefault();
    const newList = {
      id: list?.length + 1 ?? 0,
      todo: todoName,
      checked: false,
    };

    if (list?.length > 0) {
      setList((prev) => [...prev, newList]);
      setTodoName("");
      toast.success("리스트가 생성되었습니다.");
    } else {
      setList([newList]);
      toast.success("리스트가 생성되었습니다.");
    }
  };

  return (
    <form
      className="absolute bottom-[3%] w-full flex px-[20px]"
      onSubmit={handleTodoCreate}
    >
      <input
        className={cls("w-[70%] text-[black] px-[10px] border border-black")}
        type="text"
        value={todoName}
        onChange={(e) => onNameChange(e)}
      />
      <button
        type="button"
        className={cls(
          "w-[30%]  text-[13px]",
          darkMode ? "bg-orange-300 text-[black]" : "bg-black text-white "
        )}
        onClick={handleTodoCreate}
      >
        추가
      </button>
    </form>
  );
};

export default TodoCreate;
