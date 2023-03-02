import React, { useContext } from "react";
import CountriesContext from "@src/context/CountriesContext";
import useCountriesApi from "@hooks/useCountriesApi";
export default function DropDownItem({ listValue }) {
  const { filterCountries } = useCountriesApi();
  const { setCountriesData } = useContext(CountriesContext);

  return (
    <li className="drop-down__list-item">
      <button
        value={listValue}
        className="drop-down__btn"
        onMouseDown={async ({ target }) => {
          setCountriesData(await filterCountries("region", target.value));
        }}
      >
        {listValue}
      </button>
    </li>
  );
}
