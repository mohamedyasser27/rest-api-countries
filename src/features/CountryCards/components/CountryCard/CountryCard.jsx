import React from "react";
import "./CountryCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function CountryCard({ countryData }) {
  return (
    <div
      className="country-card"
      draggable={true}
      onDragEnter={(e) => console.log(e)}
      // onDragLeave={(e) => console.log("onDragLeave")}
      // onDragOver={(e) => {
      //   e.preventDefault();
      //   console.log("onDragOver");
      // }}
      // onDragStart={(e) => console.log("onDragStart")}
      // onDragEnd={(e) => console.log("onDragEnd")}
      onDrop={(e) => console.log(1)}
    >
      <div className="country-card__flag-container">
        <LazyLoadImage
          className="country-card__flag-img"
          src={countryData.flagImg}
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
    </div>
  );
}
