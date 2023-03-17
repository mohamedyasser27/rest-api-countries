import React, { useState, useContext } from "react";
import CountriesContext from "@src/context/CountriesContext";
import { ReactComponent as SearchIcon } from "@assets/images/icon-search.svg";
import "./SearchBar.scss";
import { getCountries } from "@src/utils/ManipulateCountriesData";
export default function SearchBar() {
  const [countrynameInput, setCountrynameInput] = useState("");
  const [countriesData, setCountries] = useContext(CountriesContext);

  function onChange({ target }) {
    setCountrynameInput(target.value);
  }

   function onSubmit(e) {
    e.preventDefault();
    getCountries("name", countrynameInput).then((data) => {
      setCountries(data);
    });
    setCountrynameInput("");
  }

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <SearchIcon alt="search icon" className="search-bar__icon" />
      <label htmlFor="search-bar__input">Search for a country:</label>
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
