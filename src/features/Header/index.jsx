import React from "react";
import SwitchThemeBtn from "./components/SwitchThemeBtn";
import "./header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__logo">Where in the world?</h1>
        <SwitchThemeBtn />
      </div>
    </header>
  );
}
