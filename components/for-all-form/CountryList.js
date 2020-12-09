import React, { useState, useEffect } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const countryData = await fetch(
      "https://restcountries.eu/rest/v2/all"
    ).then((response) => response.json());

    setCountries(countryData);
  }, []);

  return (
    <div>
      <label htmlFor="countryList">Pays</label>
      <select id="countryList">
        {countries.map((country) => (
          <option value="{country.name}">{country.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;
