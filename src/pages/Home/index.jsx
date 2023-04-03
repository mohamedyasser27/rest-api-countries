import React from "react";
import Toolbar from "./Toolbar";
import CountryCards from "./CountryCards";
import CountriesContext from "@context/CountriesContext";

export default function Home({ countries, setCountries }) {
  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      <Toolbar />
      <CountryCards />
    </CountriesContext.Provider>
  );
}
