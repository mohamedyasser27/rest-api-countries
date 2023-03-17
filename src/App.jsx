import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import CountriesContext from "@context/CountriesContext";
import ThemeContext from "@context/ThemeContext";
import CountryCards from "@features/CountryCards/";
import CountryDetails from "@features/CountryDetails/";

import Header from "@features/Header/";
import Toolbar from "@features/Toolbar/";
import useCountries from "./hooks/useCountries";
import "@assets/scss/global.scss";
import MapSection from "./features/MapSection";

function Home() {
  const [countries, dispatch] = useCountries();

  return (

      <CountriesContext.Provider value={[countries, dispatch]}>
        <Toolbar />
        <CountryCards />
      </CountriesContext.Provider>
  );
}

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:countryName" element={<CountryDetails />}></Route>
          <Route path="*"></Route>
        </Routes>
      </div>
    </main>
  );
}

// const [countriesData, setCountriesData] = useState([]);
{
  /* <CountriesContext.Provider
    value={{ countriesData, setCountriesData }}
  ></CountriesContext.Provider> */
}
