import ThemeContext from "@src/context/ThemeContext";
import { useContext } from "react";

export default function useDarkTheme() {
  let { theme, switchTheme } = useContext(ThemeContext);
  return [theme, switchTheme];
}
