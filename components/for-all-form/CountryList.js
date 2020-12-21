import React, { useState, useEffect, forwardRef } from "react";

const Countries = forwardRef(({ value, onChange }, ref) => {
  const [countries, setCountries] = useState([]);
  const handleChange = e => onChange(e);

  useEffect(async () => {
    const countryData = await fetch(
      "https://restcountries.eu/rest/v2/all"
    ).then(response => response.json());

    setCountries(countryData);
  }, []);

  return (
    <div>
      <label htmlFor="countryList">Pays</label>
      <select
        id="countryList"
        name="country"
        ref={ref}
        value={value}
        onChange={handleChange}
      >
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Countries;