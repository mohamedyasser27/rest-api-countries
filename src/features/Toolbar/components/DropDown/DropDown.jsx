import React from "react";
import useToggle from "@src/hooks/useToggle";
import toggleContext from "@context/ToggleContext";
import DropDownList from "./components/DropDownList";
import DropDownToggle from "./components/DropDownToggle";
import "./DropDown.scss";

export default function DropDown() {
  return (
    <div className="drop-down">
      <toggleContext.Provider value={useToggle()}>
        <DropDownToggle />
        <DropDownList />
      </toggleContext.Provider>
    </div>
  );
}
