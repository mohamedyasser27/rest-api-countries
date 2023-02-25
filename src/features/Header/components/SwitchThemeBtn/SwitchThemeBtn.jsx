import React, { useContext } from "react";
import ThemeContext from "@src/context/ThemeContext";
import "./switchThemeBtn.scss";
export default function SwitchThemeBtn() {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <button className="switch-theme-btn" onClick={switchTheme}>
      {theme == "dark" ? "light" : "dark"} Mode
    </button>
  );
}
