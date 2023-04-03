import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CountryDetails from "@pages/CountryDetails";
import useCountries from "@hooks/useCountries";
import Home from "@src/pages/Home"
import "@assets/scss/global.scss";
import Main from "@layouts/Main";

export default function App() {
  const [countries, setCountries] = useCountries();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={<Home countries={countries} setCountries={setCountries} />}
          ></Route>
          <Route path="/:countryName" element={<CountryDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
