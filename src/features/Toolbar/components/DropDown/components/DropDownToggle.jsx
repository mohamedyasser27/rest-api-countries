import React, { useContext } from "react";
import toggleContext from "@context/ToggleContext";
import DropDownIcon from "./DropDownIcon";

export default function DropDownToggle() {
  const [isToggled, toggleDropDown] = useContext(toggleContext);
  
  return (
    <button
      className="drop-down__toggle"
      onClick={toggleDropDown}
      onBlur={() => {
        isToggled && toggleDropDown();
      }}
    >
      Filter By A Region
      <DropDownIcon  />
    </button>
  );
}
