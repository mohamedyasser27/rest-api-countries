import React, { useState, useContext } from "react";
import CountriesContext from "@src/context/CountriesContext";
import { ReactComponent as SearchIcon } from "/public/icon-search.svg";
import "./SearchBar.scss";
export default function SearchBar() {
  const [countrynameInput, setCountrynameInput] = useState("");
  const [countriesData,dispatch] = useContext(CountriesContext);

  function onChange({ target }) {
    setCountrynameInput(target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "filter",
      filterName: "name",
      filterValue: countrynameInput,
    });
    setCountrynameInput("");
  }

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <SearchIcon className="search-bar__icon" />
      <input
        id="search-bar__input"
        name="countryname"
        type="text"
        value={countrynameInput}
        onChange={onChange}
        placeholder="search for a country..."
        autoComplete="off"
      />
    </form>
  );
}
