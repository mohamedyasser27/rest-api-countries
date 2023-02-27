import React from "react";
import "./Toolbar.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import "./Toolbar.scss";
import DropDown from "./components/DropDown/DropDown";
export default function Toolbar() {
  return (
    <div className="toolbar">
      <SearchBar />
      <DropDown />
    </div>
  );
}
