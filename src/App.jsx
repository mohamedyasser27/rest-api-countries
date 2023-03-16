import React, { useContext, useEffect, useReducer, useState } from "react";
import Header from "@features/Header/";
import Toolbar from "@features/Toolbar/";
import CountryCards from "@features/CountryCards/";
import ThemeContext from "@context/ThemeContext";
import CountriesContext from "@context/CountriesContext";
import { Routes, Route } from "react-router-dom";
import useCountries from "./hooks/useCountries";
import "@assets/scss/global.scss";

function Home() {
  const [countries, dispatch] = useCountries();

  return (
    <div className="container">
      <CountriesContext.Provider value={[countries, dispatch]}>
        <Toolbar />
        <CountryCards />
      </CountriesContext.Provider>
    </div>
  );
}

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*"></Route>
      </Routes>
    </main>
  );
}

// const [countriesData, setCountriesData] = useState([]);
{
  /* <CountriesContext.Provider
    value={{ countriesData, setCountriesData }}
  ></CountriesContext.Provider> */
}
