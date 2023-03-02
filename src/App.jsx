import React, { useContext, useEffect, useState } from "react";
import Header from "@features/Header/";
import Toolbar from "@features/Toolbar/";
import CountryCards from "@features/CountryCards/";
import ThemeContext from "@context/ThemeContext";
import CountriesContext from "@context/CountriesContext";
import useCountriesApi from "@hooks/useCountriesApi";
import "@assets/scss/global.scss";
export default function App() {
  const { theme } = useContext(ThemeContext);
  const [countriesData, setCountriesData] = useState([]);
  const { getAllCountries } = useCountriesApi();

  useEffect(() => {
    (async () => {
      setCountriesData(await getAllCountries());
    })();
  }, []);
  
  return (
    <main className={theme}>
      <Header />
      <div className="container">
        <CountriesContext.Provider value={{ countriesData, setCountriesData }}>
          <Toolbar />
          <CountryCards />
        </CountriesContext.Provider>
      </div>
    </main>
  );
}
