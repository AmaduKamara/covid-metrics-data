import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../store/covid/covid';
import Country from '../components/Country';

const Home = () => {
  const covidData = useSelector((state) => state.covidReducer.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid());
  }, []);

  return (
    <div>
      {/* <Hero /> */}
      <div className="h-56 flex items-center justify-center hero sticky top-0">
        <div className="w-2/3 md:w-3/4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white mb-2">
            COVOID-19 Metrics
          </h1>
          <p className="text-xs sm:text-lg font-thin text-white">
            Get to know the latest updates on current COVID-19 metrics around
            the world
          </p>
          <input
            type="text"
            placeholder="Search by country name"
            className="py-3 px-5 mt-3 focus:outline-pink-500 rounded-full w-2/4 md:3/4 lg:w-2/5"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
        {covidData.map((country) => (
          <Country
            key={country.ID}
            country={country.Country}
            TotalConfirmed={country.TotalConfirmed}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
