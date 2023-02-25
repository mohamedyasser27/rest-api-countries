import React from "react";
import "./Toolbar.scss";
import SearchBar from "./components/SearchBar/SearchBar";
export default function Toolbar() {
  return (
    <div className="toolbar">
     <SearchBar/>
    </div>
  );
}
