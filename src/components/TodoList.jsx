import { cls } from "../libs/cls";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext";

const TodoList = ({ list, setList, tab }) => {
  const { darkMode } = useContext(DarkModeContext);

  const tabfilter = (tab) => {
    if (tab === "해야 할 일") {
      return list.filter((item) => item.checked === false);
    } else if (tab === "완료") {
      return list.filter((item) => item.checked === true);
    } else {
      // 선택 값이 '선택' 또는 '안선택'이 아닌 경우 전체 list를 반환
      return list;
    }
  };
  const filterList = tabfilter(tab);

  // 리스트 삭제
  const handleTodoDelete = (id) => {
    setList(list?.filter((todos) => todos?.id !== id));
    toast.success("리스트가 삭제되었습니다.");
  };

  // 리스트 생성

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

  /* 리스트 수정*/
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
    } else {
      setCheckedList((prev) => prev.filter((item) => item !== value));
    }

    // list의 checked 값을 변경
    setList((prevList) =>
      prevList.map((item) =>
        item.id === value.id ? { ...item, checked: isChecked } : item
      )
    );
  };

  const checkHandler = (e, value) => {
    setIsChecked(e.target.checked);
    checkedItemHandler(value, e.target.checked);
  };

  return (
    <main className="w-full h-full relative">
      <ul className="w-full h-full rounded-[1rem] overflow-auto relative p-[1rem]">
        {filterList?.length === 0 ? (
          <div className="flex justify-center items-center m-auto h-full w-full space-x-[10px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
            <p>리스트가 없습니다.</p>
          </div>
        ) : (
          <>
            {filterList?.map((item, idx) => (
              <li
                key={idx}
                className={cls(
                  "list-none flex items-center justify-between w-full py-[7px]",
                  item?.checked ? "line-through" : ""
                )}
              >
                <label
                  htmlFor={item?.todo}
                  className="flex items-center justify-center text-[20px]"
                >
                  <input
                    className={cls(
                      `mr-[8px] w-[18px] h-[18px] relative top-[1px] ${
                        item?.checked ? " accent-orange-400" : ""
                      }`
                    )}
                    id={item?.todo}
                    text={item?.todo}
                    type="checkbox"
                    checked={item?.checked}
                    onChange={(e) => {
                      checkHandler(e, item);
                    }}
                  />

                  {item?.todo}
                </label>

                <div
                  className="flex hover:text-orange-400 w-[24px] h-[24px] rounded-full justify-center items-center bg-[#b1b1b1]"
                  onClick={() => handleTodoDelete(item?.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
      {/*리스트 생성 */}
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
    </main>
  );
};

export default TodoList;
