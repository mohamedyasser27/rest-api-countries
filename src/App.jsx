import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CountryDetails from "@features/CountryDetails";
import ThemeContext from "@context/ThemeContext";
import useCountries from "@hooks/useCountries";
import Header from "@features/Header/";
import Home from "@routes/Home";
import "@assets/scss/global.scss";
export default function App() {
  const { theme } = useContext(ThemeContext);
  const [countries, setCountries] = useCountries();

  return (
    <BrowserRouter>
      <main className={theme}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home countries={countries} setCountries={setCountries} />}></Route>
            <Route path="/:countryName" element={<CountryDetails />}></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}
