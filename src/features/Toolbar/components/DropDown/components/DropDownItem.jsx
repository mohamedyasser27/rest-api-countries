import React, { useContext } from "react";
import CountriesContext from "@src/context/CountriesContext";
export default function DropDownItem({ listValue }) {
  const [countriesData, dispatch] = useContext(CountriesContext);

  return (
    <li className="drop-down__list-item">
      <button
        value={listValue}
        className="drop-down__btn"
        onMouseDown={({ target }) => {
          dispatch({
            type: "filter",
            filterName: "region",
            filterValue: target.value,
          });
        }}
      >
        {listValue}
      </button>
    </li>
  );
}
