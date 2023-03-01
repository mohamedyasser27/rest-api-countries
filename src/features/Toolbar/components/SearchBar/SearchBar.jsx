import React, { useState } from "react";
import useCountriesApi from "@hooks/useCountriesApi";
import { ReactComponent as SearchIcon } from "/public/icon-search.svg";
import "./SearchBar.scss";
export default function SearchBar({ setCountriesData }) {
  const [countrynameInput, setCountrynameInput] = useState("");
  const { filterCountries } = useCountriesApi();

  function onChange({ target }) {
    setCountrynameInput(target.value);
  }


  
  async function onSubmit(e) {
    e.preventDefault();
    await setCountriesData(await filterCountries("name", countrynameInput));
    setCountrynameInput("");
  }

  return (
    <form onSubmit={onSubmit} action="" className="search-bar">
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
