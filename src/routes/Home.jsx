import React from "react";
import useCountries from "@hooks/useCountries";
import CountriesContext from "@context/CountriesContext";
import Toolbar from "@features/Toolbar/";
import CountryCards from "@features/CountryCards";

export default function Home() {
  const [countries, setCountries] = useCountries();

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      <Toolbar />
      <CountryCards />
    </CountriesContext.Provider>
  );
}
