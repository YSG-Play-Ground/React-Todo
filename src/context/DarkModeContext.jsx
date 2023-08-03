import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkmode = () => setDarkMode((mode) => !mode);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    console.log("isDark", isDark);

    setDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
