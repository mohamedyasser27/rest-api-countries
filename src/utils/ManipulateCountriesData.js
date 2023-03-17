import axios, { all } from "axios";
function extractCountryRequiredData(country) {
  const {
    flags: { svg: flagImgSvg, png: flagImgPng } = {},
    name = "",
    nativeName = "",
    capital = "",
    topLevelDomain = "",
    region = "",
    population = 0,
    currencies = [],
    languages = [],
    borders = [],
    latlng = [],
  } = country;
  return {
    flagImgSvg,
    flagImgPng,
    name,
    nativeName,
    capital,
    topLevelDomain: topLevelDomain[0],
    region,
    population,
    currencies,
    language: languages[0].name || "",
    borders,
    lat: latlng[0],
    lng: latlng[1],
  };
}
function formulateCountriesOutput(countries) {
  return countries.map((country) => extractCountryRequiredData(country));
}
async function getCountries(filterName, filterValue) {
  const { data: allCountries } = await axios("/data.json");
  console.log(allCountries)
  return formulateCountriesOutput(
    filterName
      ? allCountries.filter((country) => {
          return country[filterName].toLowerCase() == filterValue.toLowerCase();
        })
      : allCountries
  );
}

export { getCountries };
