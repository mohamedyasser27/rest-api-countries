import React, { useContext } from "react";
import ThemeContext from "@context/ThemeContext";
import "./switchThemeBtn.scss";

export default function SwitchThemeBtn() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const isThemeDark = theme == "dark";
  return (
    <button className="switch-theme-btn" onClick={switchTheme}>
      <img
        className="icon"
        src={isThemeDark ? "/icon-light.svg" : "/icon-dark.svg"}
        alt="button icon"
      />
      {isThemeDark ? "light" : "dark"} Mode
    </button>
  );
}
