import React, { useState } from "react";
import useToggle from "@src/hooks/useToggle";
import ExpandLogo from "@src/components/ExpandLogo/ExpandLogo";
import "./DropDown.scss";
import useCountriesApi from "@hooks/useCountriesApi";

export default function DropDown({ setCountriesData }) {
  const [isToggled, switchToggle] = useToggle();
  const [lastRequest, setLastRequest] = useState("");
  const { filterCountries } = useCountriesApi();
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function createDropDownList(list) {
    return list.map((listValue) => {
      return (
        <li key={listValue} className="drop-down__list-item">
          <button
            value={listValue}
            className="drop-down__btn"
            onClick={async ({ target }) => {
              setLastRequest(target.value);
              target.value !== lastRequest &&//to stop the request if it's the same
                setCountriesData(await filterCountries("region", target.value));
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
