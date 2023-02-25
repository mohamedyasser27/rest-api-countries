import React, { useState, useContext } from "react";
import Header from "@features/Header/";
import "@assets/scss/global.scss";
import useDarkTheme from "./hooks/useDarkTheme";
export default function App() {
  const [theme] = useDarkTheme();
  return (
      <main className={theme}>
        <Header />
      </main>
  );
}
