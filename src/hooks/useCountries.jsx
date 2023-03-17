import { useEffect, useState } from "react";
import { getCountries } from "@src/utils/ManipulateCountriesData";
export default function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  return [countries, setCountries];
}
