import React, { useState, useEffect } from 'react';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    const examplePlaces = [
      { name: 'Example Coffee Shop', address: '123 Example St' },
      { name: 'Example Library', address: '456 Example St' },
      { name: 'Example Coworking Space', address: '789 Example St' },
    ];

    setPlaces(examplePlaces);
  };

  return (
    <div>
      <h2>Places</h2>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <h3>{place.name}</h3>
            <p>{place.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceList;
