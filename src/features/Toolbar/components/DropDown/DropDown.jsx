import React from "react";
import useToggle from "@src/hooks/useToggle";
import ExpandLogo from "@src/components/ExpandLogo/ExpandLogo";
import "./DropDown.scss";

export default function DropDown() {
  const [isToggled, switchToggle] = useToggle();
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  function createDropDownList(list) {
    return list.map((listValue) => {
      return (
        <li key={listValue} className="drop-down__list-item">
          <button
            className="drop-down__btn"
            onClick={() => {
              console.log("make Api Call");
            }}
          >
            {listValue}
          </button>
        </li>
      );
    });
  }

  return (
    <div className="drop-down">
      <button
        className="drop-down__toggle"
        onBlur={({ target }) => {
          document.activeElement != target && isToggled && switchToggle();
        }}
        onClick={switchToggle}
      >
        Filter By A Region
        <ExpandLogo isToggled={isToggled} />
      </button>
      <ul className={`drop-down__list ${isToggled && "visible"}`}>
        {createDropDownList(regions)}
      </ul>
    </div>
  );
}
