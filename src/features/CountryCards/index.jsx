import React from "react";
import "./assets/scss/CountryCards.scss";
import CountryCard from "./components/CountryCard/CountryCard";
export default function CountryCards({ countriesData }) {
  function createCountriesList() {
    return countriesData.map((countryData) => {
      return (
        <CountryCard
          key={`${countryData.name}+${countryData.capital}`}
          countryData={countryData}
        />
      );
    });
  }
  return <div className="country-cards">{createCountriesList()}</div>;
}
