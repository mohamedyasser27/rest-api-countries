import React from "react";
import "./CountryCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
export default function CountryCard({ countryData }) {
  return (
    <Link className="country-card" to={`/${countryData.name}`}>
      <div className="country-card__flag-container">
        <LazyLoadImage
          className="country-card__flag-img"
          src={countryData.flagImgPng}
        />
      </div>
      <div className="country-card__details">
        <h2 className="country-card__name">{countryData.name}</h2>
        <p className="country-card__population">
          <span> population</span> {countryData.population}
        </p>
        <p className="country-card__region">
          <span> region:</span> {countryData.region}
        </p>
        <p className="country-card__capital">
          <span> capital:</span> {countryData.capital}
        </p>
      </div>
    </Link>
  );
}
