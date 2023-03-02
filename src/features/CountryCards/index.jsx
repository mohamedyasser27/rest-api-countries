import React, { useMemo } from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import "./CountryCards.scss";
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

  return <div className="country-cards">{countriesList}</div>;
}
