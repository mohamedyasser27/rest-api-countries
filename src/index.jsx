import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./hooks/useDarkTheme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
