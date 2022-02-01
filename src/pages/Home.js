import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../store/covid/covid';

const Home = () => {
  const covidData = useSelector((state) => state.covidReducer.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid());
  }, []);

  console.log(covidData.length);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
export default Home;
