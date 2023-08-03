import { cls } from "../libs/cls";
import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext";
import React, { useContext } from "react";

const Header = ({ tab, setTab }) => {
  const { darkMode, toggleDarkmode } = useContext(DarkModeContext);

  return (
    <header
      className={cls(
        "py-[1.4rem] px-[1rem] w-full flex justify-between border-b rounded-t-[1rem] font-[600] ",
        darkMode
          ? "border-b-[white] bg-[#1a1c35] text-[white]"
          : "border-b-[#222] bg-[#fdfffd] text-[#222]"
      )}
    >
      <div>
        {darkMode ? (
          <div
            onClick={() => {
              toggleDarkmode();
              toast.warning("다크모드 Off");
              localStorage.removeItem("theme", "dark");
            }}
          >
            {/* 다크 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transform duration-200 hover:text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={() => {
              toggleDarkmode();
              toast.warning("다크모드 On");
              localStorage.setItem("theme", "dark");
            }}
          >
            {/* 라이트 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transform duration-200 hover:text-orange-400"
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

      <div className="flex space-x-[10px] text-[14px]">
        <p
          onClick={() => setTab("전체")}
          className={cls(
            "cursor-pointer transform duration-200",
            !darkMode && tab === "전체"
              ? "text-orange-400 font-[600]  border-b-[2px] border-b-orange-400"
              : "",

            darkMode && tab === "전체"
              ? "text-orange-400 font-[600]  border-b-[2px] border-b-orange-400"
              : ""
          )}
        >
          전체
        </p>
        <p
          onClick={() => setTab("해야 할 일")}
          className={cls(
            "cursor-pointer transform duration-200",
            !darkMode && tab === "해야 할 일"
              ? "text-orange-400 font-[600]  border-b-[2px] border-b-orange-400"
              : "",

            darkMode && tab === "해야 할 일"
              ? "text-orange-400 font-[600]  border-b-[2px] border-b-orange-400"
              : ""
          )}
        >
          해야 할 일
        </p>
        <p
          onClick={() => setTab("완료")}
          className={cls(
            "cursor-pointer transform duration-200",

            !darkMode && tab === "완료"
              ? "text-orange-400 font-[600]  border-b-[2px] border-b-orange-400"
              : "",

            darkMode && tab === "완료"
              ? "text-orange-400 font-[600]  border-b-[2px] border-b-orange-400"
              : ""
          )}
        >
          완료
        </p>
      </div>
    </header>
  );
};

export default Header;
