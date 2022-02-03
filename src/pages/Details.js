import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const countryData = useSelector((state) => state.covidReducer.covidData);
  const params = useParams();

  const country = countryData.find((item) => item.Country === params.id);

  return (
    <div>
      <div className="py-5 hero text-white">
        <h1 className="text-xl md:text-2xl lg:text-3xl">{country.Country}</h1>
      </div>
      <div className="mt-16 mb-32 main-bg p-10">
        <p>{country.TotalDeaths}</p>
      </div>
    </div>
  );
};
export default Details;
