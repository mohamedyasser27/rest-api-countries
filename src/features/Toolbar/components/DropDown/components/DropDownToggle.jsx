import React from "react";
import DropDownIcon from "./DropDownIcon";

export default function DropDownToggle({ isToggled, toggleDropDown }) {
  return (
    <button
      className="drop-down__toggle"
      onClick={toggleDropDown}
      onBlur={() => {
        isToggled && toggleDropDown();
      }}
    >
      Filter By A Region
      <DropDownIcon isToggled={isToggled} />
    </button>
  );
}
