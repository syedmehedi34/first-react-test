/* eslint-disable no-unused-vars */
import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
  const { country, handleVisitedCountry } = props;
  //   console.log(country, handleVisitedCountry);
  return (
    <div>
      <h5>passing data</h5>
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
