import React from "react";
import "./assets/scss/CountryCards.scss";
import CountryCard from "./components/CountryCard/CountryCard";
export default function CountryCards({ countriesData }) {
  function createCountriesList() {
    return countriesData.map((countryData) => {
      return (
          <CountryCard countryData={countryData} />
      );
    });
  }
  return <div className="country-cards">{createCountriesList()}</div>;
}
