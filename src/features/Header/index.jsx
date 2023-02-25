import React, { useContext } from "react";
import darkIcon from "/icon-dark.svg";
import lightIcon from "/icon-light.svg";
import "./header.scss";
import ThemeContext from "@src/context/ThemeContext";
export default function Header() {
  const {theme, switchTheme} = useContext(ThemeContext);
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
