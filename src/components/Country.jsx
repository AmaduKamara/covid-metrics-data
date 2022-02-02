import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';

const Country = ({ country, TotalConfirmed }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-pink-400 p-5 country">
      <div className="flex justify-end items-end">
        <BsArrowRightCircle
          onClick={() => navigate('/details', { state: country })}
          className="text-white text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-end items-end mt-5">
        <h1 className="text-xs sm:text-lg md:text-xl lg:text-2xln font-semibold uppercase text-white">
          {country}
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-lg mt-1">
          {TotalConfirmed}
        </p>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
  TotalConfirmed: PropTypes.number.isRequired,
};

export default Country;
