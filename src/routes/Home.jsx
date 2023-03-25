import React from "react";
import Toolbar from "@features/Toolbar/";
import CountryCards from "@features/CountryCards";
import CountriesContext from "@context/CountriesContext";

export default function Home({ countries, setCountries }) {
  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      <Toolbar />
      <CountryCards />
    </CountriesContext.Provider>
  );
}
