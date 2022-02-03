import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();

  return (
    <div>
      <div className="py-5 hero text-white">
        <h1 className="text-xl md:text-2xl lg:text-3xl">{state}</h1>
      </div>
    </div>
  );
};
export default Details;
