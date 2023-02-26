import React, { useContext } from "react";
import ThemeContext from "@context/ThemeContext";
import darkIcon from "/public/icon-dark.svg";
import lightIcon from "/public/icon-light.svg";

import "./switchThemeBtn.scss";
export default function SwitchThemeBtn() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const isThemeDark = theme == "dark";
  return (
    <button className="switch-theme-btn" onClick={switchTheme}>
      <img
        className={`${isThemeDark && "visible"} icon`}
        src={lightIcon}
        alt="button icon"
      />
      <img
        className={`${!isThemeDark && "visible"} icon`}
        src={darkIcon}
        alt="button icon"
      />
      {isThemeDark ? "light" : "dark"} Mode
    </button>
  );
}
