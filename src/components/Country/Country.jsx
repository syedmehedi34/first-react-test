import { useState } from "react";
import "./Country.css";
import CountryDetails from "../Countries/CountryDetails/CountryDetails";

const Country = (props) => {
  const { country, handleVisitedCountry } = props;
  const { name, flags, population, area, cca3 } = country;
  //   console.log(name);
  //   console.log(handleVisitedCountry);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h4>Name : {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button
        onClick={() => {
          handleVisited();
          handleVisitedCountry(country);
        }}
      >
        {visited ? "Visited" : "Not visited"}
      </button>
      <br />

      <hr />
      <CountryDetails {...props}></CountryDetails>
    </div>
  );
};

export default Country;
