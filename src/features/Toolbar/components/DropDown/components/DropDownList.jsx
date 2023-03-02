import React, { useContext } from "react";
import toggleContext from "@context/ToggleContext";
import DropDownItem from "./DropDownItem";

export default function DropDownList({ setCountriesData }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [isToggled] = useContext(toggleContext);

  return (
    <ul className={`drop-down__list ${isToggled ? "visible" : ""}`}>
      {regions.map((listValue) => {
        return (
          <DropDownItem
            key={listValue}
            listValue={listValue}
            setCountriesData={setCountriesData}
          />
        );
      })}
    </ul>
  );
}
