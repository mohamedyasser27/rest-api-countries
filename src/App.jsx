import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import CountryDetails from "@features/CountryDetails";
import ThemeContext from "@context/ThemeContext";
import useCountries from "@hooks/useCountries";
import Header from "@features/Header/";
import Home from "@routes/Home";
import "@assets/scss/global.scss";
function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
export default function App() {
  const [countries, setCountries] = useCountries();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
