import axios from "axios";
export default function useCountriesApi() {
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

  async function getAllCountries() {
    const { data: allCountries } = await axios("/data.json");
    return formulateCountriesOutput(allCountries);
  }

  async function filterCountries(filterName, filterValue) {
    const { data: allCountries } = await axios("/data.json");
    return formulateCountriesOutput(
      allCountries.filter(
        (country) =>
          country[filterName].toLowerCase() == filterValue.toLowerCase()
      )
    );
  }
  return { getAllCountries, filterCountries };
}
