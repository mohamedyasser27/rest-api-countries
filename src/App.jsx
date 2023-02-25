import React, { useContext } from "react";
import Header from "@features/Header/";
import "@assets/scss/global.scss";
import ThemeContext from "./context/ThemeContext";
export default function App() {
  const { theme } = useContext(ThemeContext)
  return (
      <main className={theme}>
        <Header />
      </main>
  );
}
