import { useReducer, useEffect, useRef } from "react";
import axios from "axios";
export default function useCountries() {
  function extractCountryRequiredData(country) {
    const {
      flags: { png: flagImg } = {},
      name = "",
      nativeName = "",
      capital = "",
      topLevelDomain = "",
      region = "",
      population = 0,
      currencies = [],
      languages = [],
      borders = [],
    } = country;
    return {
      flagImg,
      name,
      nativeName,
      capital,
      topLevelDomain,
      region,
      population,
      currencies,
      language: languages[0].name || "",
      borders,
    };
  }
  function formulateCountriesOutput(countries) {
    return countries.map((country) => extractCountryRequiredData(country));
  }
  function reducer(state, action) {
    switch (action.type) {
      case "initialize": {
        return formulateCountriesOutput(initialCountries.current);
      }

      case "filter": {
        let newState = [...initialCountries.current];

        return formulateCountriesOutput(
          newState.filter(
            (country) =>
              country[action.filterName].toLowerCase() ==
              action.filterValue.toLowerCase()
          )
        );
      }
    }
    throw Error("Unknown action: " + action.type);
  }

  const initialCountries = useRef([]);
  const [countries, dispatch] = useReducer(reducer, initialCountries.current);

  useEffect(() => {
    async function getData() {
      const { data: allCountries } = await axios("/data.json");
      initialCountries.current = allCountries;
      dispatch({ type: "initialize" });
    }
    getData();
  }, []);

  return [countries, dispatch];
}
