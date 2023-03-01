import React from "react";
import useToggle from "@src/hooks/useToggle";
import DropDownList from "./components/DropDownList";
import DropDownToggle from "./components/DropDownToggle";
import "./DropDown.scss";

export default function DropDown({ setCountriesData }) {
  const [isToggled, switchToggle] = useToggle();

  return (
    <div className="drop-down">
      <DropDownToggle isToggled={isToggled} switchToggle={switchToggle} />
      <DropDownList isToggled={isToggled} setCountriesData={setCountriesData} />
    </div>
  );
}
