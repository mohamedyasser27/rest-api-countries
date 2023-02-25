import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./hooks/useThemeProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
