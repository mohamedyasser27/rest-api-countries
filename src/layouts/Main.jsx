import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "@layouts/Header/";
import ThemeContext from "@context/ThemeContext";

export default function Main() {
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
