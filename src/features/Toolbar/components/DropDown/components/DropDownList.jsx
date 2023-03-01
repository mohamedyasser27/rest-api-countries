import React from "react";
import useCountriesApi from "@hooks/useCountriesApi";
export default function DropDownList({ isToggled, setCountriesData }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const { filterCountries } = useCountriesApi();
  return (
    <ul className={`drop-down__list ${isToggled ? "visible" : ""}`}>
      {regions.map((listValue) => {
        return (
          <li key={listValue} className="drop-down__list-item">
            <button
              value={listValue}
              className="drop-down__btn"
              onClick={async ({ target }) => {
                setCountriesData(await filterCountries("region", target.value));
              }}
            >
              {listValue}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
