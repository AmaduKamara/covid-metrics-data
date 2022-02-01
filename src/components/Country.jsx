import { PropTypes } from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const Country = ({ country, TotalConfirmed }) => (
  <div className="border border-pink-400 p-5 country">
    <div className="flex justify-end items-end">
      <BsArrowRightCircle className="text-white text-2xl cursor-pointer" />
    </div>
    <div className="flex flex-col justify-end items-end mt-5">
      <h1 className="text-xs sm:text-lg md:text-xl lg:text-2xln font-semibold uppercase text-white">{country}</h1>
      <p className="text-white text-xs sm:text-sm md:text-lg mt-1">{TotalConfirmed}</p>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  TotalConfirmed: PropTypes.string.isRequired,
};

export default Country;
