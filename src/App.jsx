import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "@context/ThemeContext";
import CountryDetails from "@routes/CountryDetails";
import Header from "@features/Header/";
import Home from "@routes/Home";
import "@assets/scss/global.scss";
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
