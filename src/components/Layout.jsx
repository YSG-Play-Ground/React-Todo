import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { cls } from "../libs/cls";

const Layout = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={cls(
        "w-full min-w-[400px] max-w-[500px] h-[50vh] m-auto relative border border-grey  rounded-[1rem] flex flex-col  shadow-[11px_12px_5px_-6px_rgba(0,0,0,0.48)]",
        darkMode ? "bg-[#22243b] text-[white]" : "bg-[white] text-[#222]"
      )}
    >
      {children}
    </section>
  );
};

export default Layout;
