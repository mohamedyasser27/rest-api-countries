import React from "react";
import useCountriesApi from "@hooks/useCountriesApi";
export default function DropDownList({
  isToggled,
  toggleDropDown,
  setCountriesData,
}) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { filterCountries } = useCountriesApi();

  async function fetchData(regionName) {
    setCountriesData(await filterCountries("region", regionName));
  }

  return (
    <ul className={`drop-down__list ${isToggled ? "visible" : ""}`}>
      {regions.map((listValue) => {
        return (
          <li key={listValue} className="drop-down__list-item">
            <button
              value={listValue}
              className="drop-down__btn"
              onMouseDown={async ({ target }) => {
                await fetchData(target.value);
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
