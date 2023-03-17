import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./assets/scss/CountryDetails.scss";
import formulateCountriesOutput from "@src/utils/ManipulateCountriesData";
import { ReactComponent as ArrowIcon } from "/public/icon-arrow.svg";
import MapSection from "@features/MapSection/";
export default function CountryDetails() {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data: allCountries = {} } = await axios("/data.json");
      setCountryData(
        formulateCountriesOutput(
          allCountries.filter((country) => country.name == countryName)
        )[0]
      );
    })();
  }, []);

  return (
    <>
      <button
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowIcon />
        Back
      </button>
      {Object.keys(countryData).length != 0 && (
        <>
          <section className="country">
            <img
              src={countryData.flagImgSvg}
              className="country__flag"
              alt=""
            />

            <div className="country__details">
              <h3 className="country__name">{countryData.name}</h3>
              <ul className="country__info-list">
                <li className="country__info-item">
                  <span>native name: </span>
                  {countryData.name}
                </li>
                <li className="country__info-item">
                  <span>population: </span>
                  {countryData.population}
                </li>
                <li className="country__info-item">
                  <span>Region: </span>
                  {countryData.region}
                </li>
                <li className="country__info-item">
                  <span>sub Region: </span>
                  {countryData.region}
                </li>
                <li className="country__info-item">
                  <span>capital: </span>
                  {countryData.capital}
                </li>
                <li className="country__info-item">
                  <span>Top Level Domain: </span>
                  {countryData.topLevelDomain}
                </li>
                <li className="country__info-item">
                  <span>currencies: </span>
                  {countryData.currencies.map((currency) => {
                    return `${currency.name}`;
                  })}
                </li>
                <li className="country__info-item">
                  <span>Languages: </span>
                  {countryData.language}
                </li>
              </ul>
            </div>
          </section>
          <MapSection lat={countryData.lat} lng={countryData.lng} />
        </>
      )}
    </>
  );
}
