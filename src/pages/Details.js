import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BiArrowBack } from 'react-icons/bi';

const Details = () => {
  const countryData = useSelector((state) => state.covidReducer.covidData);
  const params = useParams();

  const country = countryData.find((item) => item.Country === params.id);

  return (
    <div>
      <div className="py-5 hero text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <BiArrowBack className="text-4xl" />
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              {country.Country}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-32 main-bg  container mx-auto">
        <div className="flex justify-between items-center text-white border border-pink-400 p-8">
          <h3 className="text-2xl font-semibold">New Comfirmed</h3>
          <p className="text-xl">{country.NewConfirmed}</p>
        </div>
        <div className="flex justify-between items-center text-white border border-pink-400 p-8">
          <h3 className="text-2xl font-semibold">Total Comfirmed</h3>
          <p className="text-xl">{country.TotalConfirmed}</p>
        </div>
        <div className="flex justify-between items-center text-white border border-pink-400 p-8">
          <h3 className="text-2xl font-semibold">New Death</h3>
          <p className="text-xl">{country.NewDeaths}</p>
        </div>
        <div className="flex justify-between items-center text-white border border-pink-400 p-8">
          <h3 className="text-2xl font-semibold">Total Death</h3>
          <p className="text-xl">{country.TotalDeaths}</p>
        </div>
        <div className="flex justify-between items-center text-white border border-pink-400 p-8">
          <h3 className="text-2xl font-semibold">New Recovered</h3>
          <p className="text-xl">{country.NewRecovered}</p>
        </div>
        <div className="flex justify-between items-center text-white border border-pink-400 p-8">
          <h3 className="text-2xl font-semibold">Total Recovered</h3>
          <p className="text-xl">{country.TotalRecovered}</p>
        </div>
      </div>
    </div>
  );
};
export default Details;
