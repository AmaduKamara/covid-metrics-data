import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';

const Country = (props) => {
  const navigate = useNavigate();
  const {
    country: { Country, TotalConfirmed },
  } = props;
  return (
    <div className="border border-pink-400 py-5 country pr-8">
      <div className="flex justify-end items-end">
        <BsArrowRightCircle
          onClick={() => navigate(`/details/${Country}`)}
          className="text-white text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-end items-end md:mt-16">
        <button
          type="button"
          onClick={() => navigate('/details')}
          className="text-xs sm:text-lg md:text-xl lg:text-2xln font-semibold uppercase text-white focus:outline-none"
        >
          {Country}
        </button>
        <p className="text-white text-xs sm:text-sm md:text-lg mt-1">
          {TotalConfirmed}
        </p>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    Country: PropTypes.string,
  }).isRequired,
};

export default Country;
