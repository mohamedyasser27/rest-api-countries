import React, { useMemo } from "react";
import "./assets/scss/CountryCards.scss";
import CountryCard from "./components/CountryCard/CountryCard";
export default function CountryCards({ countriesData }) {
  const countriesList = useMemo(() => {
    return countriesData.map((countryData) => {
      return (
        <CountryCard
          key={`${countryData.name}+${countryData.capital}`}
          countryData={countryData}
        />
      );
    });
  }, [countriesData]);

  console.log(countriesList);
  return <div className="country-cards">{countriesList}</div>;
}
