import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { cls } from "../libs/cls";

const Layout = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="w-full h-screen">
      <section
        className={cls(
          "w-[50%] h-full m-auto  relative border border-grey",
          darkMode ? "bg-[black] text-[white]" : "bg-[white] text-[black]"
        )}
      >
        {children}
      </section>
    </div>
  );
};

export default Layout;
