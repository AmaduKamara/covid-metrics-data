import { PropTypes } from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const Country = ({ country, TotalConfirmed }) => (
  <div className="border border-pink-600 p-5">
    <div className="flex justify-end items-end">
      <BsArrowRightCircle />
    </div>
    <div className="flex flex-col justify-end items-end mt-5">
      <h1 className="text-xs sm:text-lg md:text-xl lg:text-2xl  uppercase text-white">{country}</h1>
      <p className="text-white text-xs sm:text-sm md:text-lg mt-1">{TotalConfirmed}</p>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  TotalConfirmed: PropTypes.string.isRequired,
};

export default Country;
