import React, { useState, useContext, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { mapContext } from "../providers/mapProvider";
import { LocationDetails } from "./LocationDetails";
import './MapList.css'

export function MapList() {

  const { markers, selectedMarker, selectedPlaceDetails, mapInstance } = useContext(mapContext)

  const [places, setPlaces] = useState([]);


  const location = useLocation();
  console.log(location)

  useEffect(() => {
    console.log('useEffect happening within Maplist here')
    fetchPlaces();
  }, []);

  const fetchPlaces = () => {

    setPlaces(markers);
  };

  const locations = places.map((place, index) => {
    return (

      <li key={index} className="MapList_div-styling">
        <Link to={place.name}>
          <h3>{place.name}</h3>
          <p>{place.address}</p>
        </Link>
      </li>

    )
  })
  return (
    <div>
      {location.pathname === "/MapList" ?
        <ul>
          {locations}
        </ul> :
        null
      }
      {/* <ul>
        {locations}        
      </ul> */}

      <Routes>
        <Route path=":id" element={<LocationDetails />} />
      </Routes>
    </div>


  );
}