import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();

  return (
    <div className="my-16">
      <h1 className="text-2xl">
        {state}
      </h1>
    </div>
  );
};
export default Details;
