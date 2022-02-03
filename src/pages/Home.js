import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../store/covid/covid';
import Country from '../components/Country';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const covidData = useSelector((state) => state.covidReducer.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid());
  }, []);

  const searchFilter = (event) => {
    setSearchText(event.target.value);
  };

  const filtered = covidData.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  return (
    <div>
      <div className="h-40 md:h-56 flex items-center justify-center hero sticky top-0">
        <div className="w-2/3 md:w-3/4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
            COVOID-19 Metrics
          </h1>
          <p className="text-xs sm:text-lg font-thin text-white">
            Get to know the latest updates on current COVID-19 metrics around
            the world
          </p>
          <input
            type="text"
            placeholder="Search by country name"
            className="py-3 px-5 mt-3 focus:outline-pink-500 rounded-full w-full md:3/4 lg:w-2/5"
            value={searchText}
            onChange={searchFilter}
          />
        </div>
      </div>
      <div className="container mx-auto md:mt-16 md:mb-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((country) => (
          <Country
            key={country.ID}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
