import React from "react";
import { ReactComponent as ExpandIcon } from "/public/icon-expand.svg";
import { ReactComponent as MinimizeIcon } from "/public/icon-minimize.svg";
import './dropDownIcon.scss'
export default function DropDownIcon({ isToggled }) {
  return (
    <>
      {isToggled ? (
        <MinimizeIcon className="drop-down__icon" />
      ) : (
        <ExpandIcon className="drop-down__icon" />
      )}
    </>
  );
}
