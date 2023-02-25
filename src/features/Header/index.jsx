import ThemeContext from "@src/context/ThemeContext";
import useDarkTheme from "@src/hooks/useDarkTheme";
import React, { useContext } from "react";
import "./header.scss";
import darkIcon from "/icon-dark.svg";
import lightIcon from "/icon-light.svg";
export default function Header() {
  const [theme,switchTheme] = useDarkTheme();
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-name">where in the world?</h1>
        <button className="switch-theme-btn" onClick={switchTheme}>
          <img src={theme == "dark" ? lightIcon : darkIcon} alt="theme icon" />
          {theme == "dark" ? "light" : "dark"} Mode
        </button>
      </div>
    </header>
  );
}
