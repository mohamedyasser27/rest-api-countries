import React, { useContext } from "react";
import Header from "@features/Header/";
import Toolbar from "@features/Toolbar/";
import ThemeContext from "./context/ThemeContext";
import "@assets/scss/global.scss";
export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <Header />
      <div className="container">
        <Toolbar />
      </div>
    </main>
  );
}
