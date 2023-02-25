import ThemeContext from "@src/context/ThemeContext";
import { useState } from "react";
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  function switchTheme() {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
