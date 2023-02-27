import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import DropDown from "./components/DropDown/DropDown";
import "./Toolbar.scss";
export default function Toolbar({ setCountriesData }) {
  return (
    <div className="toolbar">
      <SearchBar />
      <DropDown setCountriesData={setCountriesData} />
    </div>
  );
}
