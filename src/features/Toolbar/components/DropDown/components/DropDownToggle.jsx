import React from "react";
import DropDownIcon from "./DropDownIcon";

export default function DropDownToggle({ isToggled, switchToggle }) {
  return (
    <button
      className="drop-down__toggle"
      onBlur={() => {
        isToggled && switchToggle();
      }}
      onClick={switchToggle}
    >
      Filter By A Region
      <DropDownIcon isToggled={isToggled} />
    </button>
  );
}
