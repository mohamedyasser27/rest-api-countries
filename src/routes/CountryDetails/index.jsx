import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as ArrowIcon } from "@assets/images/icon-arrow.svg";
import MapSection from "@features/MapSection/";
import "./assets/scss/CountryDetails.scss";
import { getCountries } from "@src/utils/ManipulateCountriesData";
export default function CountryDetails() {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    getCountries("name", countryName).then((data) => {
      setCountryData(data[0]);
    });
  }, [countryData]);

  return (
    <>
      <button
        className="back-btn"
        onClick={() => {
          navigate('/');
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
                <li className="country__info-item" id="country-borders">
                  <span>Borders: </span>
                  {countryData.borders.map( (border, index) => {
                  
                    return (
                      <button key={border} className="border-btn" onClick={() => {
                        getCountries("alpha3Code", border).then(([data]) => {
                             navigate(`/${data.name}`);
                          });
                      }}>
                        {border}
                      </button>
                    );
                  })}
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
