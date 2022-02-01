import { PropTypes } from 'prop-types';

const Country = ({ country, TotalConfirmed }) => (
  <div className="border m-5 p-4">
    <h1>{country}</h1>
    <p>{TotalConfirmed}</p>
  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  TotalConfirmed: PropTypes.string.isRequired,
};

export default Country;
