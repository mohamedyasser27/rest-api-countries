import React, { useState } from "react";
import "./SearchBar.scss";
import useCountriesApi from "@hooks/useCountriesApi";
export default function SearchBar({ setCountriesData }) {
  const [countryName, setCountryName] = useState("");
  const { filterCountries } = useCountriesApi();

  function onChange(e) {
    setCountryName(e.target.value);
  }
  async function dataFetch() {
    await setCountriesData(await filterCountries("name", countryName));
    setCountryName("");
  }
  function onSubmit(e) {
    e.preventDefault();
    dataFetch();
  }

  return (
    <form onSubmit={onSubmit} action="" className="search-bar">
      <label htmlFor="search-bar__input">
        <svg
          className="search-bar__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="none"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </label>
      <input
        id="search-bar__input"
        name="countryName"
        type="text"
        value={countryName}
        onChange={onChange}
        placeholder="search for a country..."
        autoComplete="off"
      />
    </form>
  );
}
