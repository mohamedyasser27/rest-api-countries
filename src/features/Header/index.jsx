import React from "react";
import "./header.scss";
import SwitchThemeBtn from "./components/SwitchThemeBtn/SwitchThemeBtn";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__logo">where in the world?</h1>
        <SwitchThemeBtn />
      </div>
    </header>
  );
}
