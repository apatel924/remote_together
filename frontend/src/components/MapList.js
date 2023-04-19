import React, { useState, useContext, useEffect } from "react";
import { mapContext } from "../providers/mapProvider";

export function MapList() {

  const { markers, selectedMarker, selectedPlaceDetails, mapInstance} = useContext(mapContext)

  const [places, setPlaces] = useState([]);


  useEffect(() => {
    console.log('useEffect happening within Maplist here')
    fetchPlaces();
  }, []);

  // const fetchPlaces = () => {
  //   const examplePlaces = [
  //     { name: 'Example Coffee Shop', address: '123 Example St' },
  //     { name: 'Example Library', address: '456 Example St' },
  //     { name: 'Example Coworking Space', address: '789 Example St' },
  //   ];

  //   setPlaces(examplePlaces);
  // };

  const fetchPlaces = () => {

    setPlaces(markers);
  };

  
  console.log('markers', markers)
  console.log('selectedPlaceDetails', selectedPlaceDetails)
  console.log('selectedMarker', selectedMarker)
  console.log('mapInstance', mapInstance)

  const locations = places.map((place, index) => (
    <li key={index}>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
    </li>
  ))

  return (
    <ul>
      {locations}
    </ul>

  );
}