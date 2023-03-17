import { Routes, Route } from 'react-router-dom';
import HouseCard from '../../house-category/house-card';

const HouseRoutes = ({ houses }) => {
  return (
    <Routes>
      {houses.map((house) => (
        <Route key={house.id} path={`/houses/${house.id}`}>
          <HouseCard house={house} />
        </Route>
      ))}
    </Routes>
  );
};

export default HouseRoutes;
