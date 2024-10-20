import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedcountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //   console.log(countries);

  const handleVisitedCountry = (country) => {
    // console.log(country);
    // setVisitedcountries(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedcountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries : {countries.length}</h3>

      <div>
        <h5>Visited countries : {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
