import { useState, useEffect } from 'react';
import { db } from '../utils/firebase'; // Import your Firebase configuration

const HouseDetails = ({ houseId }) => {
  const [houseDetails, setHouseDetails] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      const houseRef = db.collection('houses').doc(houseId);
      const houseDoc = await houseRef.get();
      if (houseDoc.exists) {
        setHouseDetails(houseDoc.data());
      } else {
        console.log('House not found');
      }
    };
    fetchHouseDetails();
  }, [houseId]);

  if (!houseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{houseDetails.name}</h2>
      <p>{houseDetails.description}</p>
      <p>Price: {houseDetails.price}</p>
      {/* Display other house details as needed */}
    </div>
  );
};

export default HouseDetails;
