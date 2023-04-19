import React, { useState, useContext, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import { mapContext } from "../providers/mapProvider";
import { LocationDetails } from "./LocationDetails";

export function MapList() {

  const { markers, selectedMarker, selectedPlaceDetails, mapInstance } = useContext(mapContext)

  const [places, setPlaces] = useState([]);


  useEffect(() => {
    console.log('useEffect happening within Maplist here')
    fetchPlaces();
  }, []);

  const fetchPlaces = () => {

    setPlaces(markers);
  };

  const locations = places.map((place, index) => {
    return (
      <div>
        <li key={index}>
          <Link to={place.name}>
            <h3>{place.name}</h3>
            <p>{place.address}</p>
          </Link>
        </li>
      </div>
    )
  })
  return (
    <div>
      <ul>
        {locations}
      </ul>

      <Routes>
        <Route path=":id" element={<LocationDetails />} />
      </Routes>
    </div>


  );
}