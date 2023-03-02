import React from "react";
import DropDownItem from "./DropDownItem";

export default function DropDownList({ isToggled }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <ul className={`drop-down__list ${isToggled ? "visible" : ""}`}>
      {regions.map((listValue) => {
        return <DropDownItem key={listValue} listValue={listValue} />;
      })}
    </ul>
  );
}
