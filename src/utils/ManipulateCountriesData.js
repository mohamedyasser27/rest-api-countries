import axios from "axios";
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
    alpha3Code="",
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
    alpha3Code,
    lat: latlng[0],
    lng: latlng[1],
  };
}
function formulateCountriesOutput(countries) {
  return countries.map((country) => extractCountryRequiredData(country));
}
async function getCountries(filterName, filterValue) {
  const { data: allCountries } = await axios("/data.json");
  return formulateCountriesOutput(
    filterName
      ? allCountries.filter((country) => {
          return country[filterName].toLowerCase() == filterValue.toLowerCase();
        })
      : allCountries
  );
}

export { getCountries };
