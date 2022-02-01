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
