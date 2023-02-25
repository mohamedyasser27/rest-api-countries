import ThemeContext from "@src/context/ThemeContext";
import { useState } from "react";

export default function ThemeProvider({ children }) {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(getCurrentTheme() ? "dark" : "light");
  function switchTheme() {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
