import React,{useContext} from "react";
import { ReactComponent as ExpandIcon } from "/public/icon-expand.svg";
import { ReactComponent as MinimizeIcon } from "/public/icon-minimize.svg";
import toggleContext from "@context/ToggleContext";
export default function DropDownIcon() {
  
  const [isToggled] = useContext(toggleContext);

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
