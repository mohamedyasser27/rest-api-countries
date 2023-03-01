import React, { useContext } from "react";
import ThemeContext from "@context/ThemeContext";
import { ReactComponent as DarkIcon } from "/public/icon-dark.svg";
import { ReactComponent as LighIcon } from "/public/icon-light.svg";

export default function SwitchThemeBtn() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const isThemeDark = theme == "dark";
  return (
    <button className="switch-theme-btn" onClick={switchTheme}>
      {isThemeDark ? (
        <LighIcon className="drop-down__icon" />
      ) : (
        <DarkIcon className="drop-down__icon" />
      )}
      {isThemeDark ? "light" : "dark"} Mode
    </button>
  );
}
