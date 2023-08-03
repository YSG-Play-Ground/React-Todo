import { cls } from "../libs/cls";
import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoList = ({ list, setList, tab }) => {
  // 탭  종류에 따라 리스트 필터 변경
  // active  >  체크박스 비활성화
  // completed  >  체크박스 활성화
  const tabfilter = (tab) => {
    if (tab === "active") {
      return list.filter((item) => item.checked === false);
    } else if (tab === "completed") {
      return list.filter((item) => item.checked === true);
    } else {
      // 선택 값이 '선택' 또는 '안선택'이 아닌 경우 전체 list를 반환
      return list;
    }
  };

  const filterList = tabfilter(tab);

  // 리스트 삭제
  const handleTodoDelete = (name) => {
    setList(list?.filter((todos) => todos?.todo !== name));
    toast.success("리스트가 삭제되었습니다.");
  };

  // 체크박스 아이템 핸들러
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
    <ul className="w-full p-[10px]">
      {filterList?.map((item, idx) => (
        <li
          key={idx}
          className={cls(
            "text-center list-none flex justify-between w-full py-[5px]",
            item?.checked ? "line-through" : ""
          )}
        >
          <label htmlFor={item} className="flex">
            <input
              className={cls(
                `mr-[5px] ${item?.checked ? " accent-orange-300" : ""}`
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
            className="flex hover:text-orange-300"
            onClick={() => handleTodoDelete(item?.todo)}
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
    </ul>
  );
};

export default TodoList;
