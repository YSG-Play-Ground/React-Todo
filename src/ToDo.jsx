import React, { useState } from "react";

// <--- TODO --->
// 전체아이템  리스트
// 필터링  (완료, 미완료)
// 아이템 생성, 삭제   >> 완료
// 아이템 체크박스  완료시  >  체크
// 다크모드 지원
// 로컬스트로지 저장

const ToDo = () => {
  const [tab, setTab] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  const [todoName, setTodoName] = useState("");

  const onNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const [list, setList] = useState([
    { id: 0, todo: "강의보기", checked: true },
    { id: 1, todo: "카페가기", checked: false },
    { id: 2, todo: "청소하기", checked: false },
  ]);

  console.log("list", list);

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
    } else {
      setList([newList]);
    }
  };

  const handleTodoDelete = (e, name) => {
    e.preventDefault();
    setList(list?.filter((todos) => todos?.todo !== name));
  };

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
          setDarkMode={setDarkMode}
        />
        <ul className="w-full p-[10px]">
          {list.map((item, idx) => (
            <li
              key={idx}
              className={cls(
                "text-center list-none flex justify-between w-full py-[5px]",
                item?.checked ? "line-through" : ""
              )}
            >
              <label htmlFor={item} className="flex space-x-[5px]">
                <input
                  className={cls(
                    `mr-[5px] ${item?.checked ? "checked:bg-green-500" : ""}`
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
                onClick={() => {
                  handleTodoDelete(item?.todo);
                }}
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

        <form
          className="absolute bottom-[3%] w-full flex px-[20px]"
          onSubmit={handleTodoCreate}
        >
          <input
            className={cls(
              "w-[70%] text-[black] px-[10px] border border-black"
            )}
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
      </section>
    </div>
  );
};

export default ToDo;

const Header = ({ tab, setTab, darkMode, setDarkMode }) => {
  return (
    <div
      className={cls(
        "py-[10px] px-[10px] bg-[] w-full flex justify-between border-b",
        darkMode ? "border-b-[white]" : "border-b-[black]"
      )}
    >
      <div>
        {darkMode ? (
          <div onClick={() => setDarkMode(!darkMode)}>
            {/* 다크 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transform duration-200 hover:text-orange-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
        ) : (
          <div onClick={() => setDarkMode(!darkMode)}>
            {/* 라이트 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transform duration-200 hover:text-orange-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex space-x-[10px] text-[13px]">
        <p
          onClick={() => setTab("all")}
          className={cls(
            "cursor-pointer transform duration-200",
            !darkMode && tab === "all"
              ? "text-orange-300 font-[600]  border-b-[2px] border-b-orange-300"
              : "",

            darkMode && tab === "all"
              ? "text-orange-300 font-[600]  border-b-[2px] border-b-orange-300"
              : ""
          )}
        >
          All
        </p>
        <p
          onClick={() => setTab("active")}
          className={cls(
            "cursor-pointer transform duration-200",
            !darkMode && tab === "active"
              ? "text-orange-300 font-[600]  border-b-[2px] border-b-orange-300"
              : "",

            darkMode && tab === "active"
              ? "text-orange-300 font-[600]  border-b-[2px] border-b-orange-300"
              : ""
          )}
        >
          Active
        </p>
        <p
          onClick={() => setTab("completed")}
          className={cls(
            "cursor-pointer transform duration-200",

            !darkMode && tab === "completed"
              ? "text-orange-300 font-[600]  border-b-[2px] border-b-orange-300"
              : "",

            darkMode && tab === "completed"
              ? "text-orange-300 font-[600]  border-b-[2px] border-b-orange-300"
              : ""
          )}
        >
          Completed
        </p>
      </div>
    </div>
  );
};

function cls(...classnames) {
  return classnames.join(" ");
}
