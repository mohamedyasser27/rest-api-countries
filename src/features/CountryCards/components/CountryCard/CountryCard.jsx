import React from "react";
import "./CountryCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function CountryCard({ countryData }) {
  return (
    <div className="country-card">
      <LazyLoadImage className="country-card__flag" src={countryData.flagImg} />
      <div className="country-card__details">
        <h2 className="country-card__name">{countryData.name}</h2>
        <p className="country-card__population">
          <span> population</span> {countryData.population}
        </p>
        <p className="country-card__region">
          <span> region:</span> {countryData.region}
          <span></span>
        </p>
        <p className="country-card__capital">
          <span> capital:</span> {countryData.capital}
          <span></span>
        </p>
      </div>
    </div>
  );
}
