import React, { useContext, useEffect, useState } from "react";
import Header from "@features/Header/";
import Toolbar from "@features/Toolbar/";
import CountryCards from "@features/CountryCards/";
import useCountriesApi from "@hooks/useCountriesApi";
import ThemeContext from "@context/ThemeContext";
import CountriesContext from "./context/CountriesContext";
import "@assets/scss/global.scss";
export default function App() {
  const { theme } = useContext(ThemeContext);
  const [countriesData, setCountriesData] = useState([]);

  const { getAllCountries } = useCountriesApi();

  useEffect(() => {
    async function dataFetch() {
      setCountriesData(await getAllCountries());
    }
    dataFetch();
  }, []);
  return (
    <main className={theme}>
      <Header />
      <div className="container">
        <CountriesContext.Provider value={{ countriesData, setCountriesData }}>
          <Toolbar  />
          <CountryCards />
        </CountriesContext.Provider>
      </div>
    </main>
  );
}
