import React, { useState, useContext, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { mapContext } from "../providers/mapProvider";
import { LocationDetails } from "./LocationDetails";
import './MapList.css'

export function MapList() {

  const { markers, selectedMarker, selectedPlaceDetails, mapInstance } = useContext(mapContext)
  const [places, setPlaces] = useState([]);

  const location = useLocation();

  // does not load if you click directly on find a location after root
  useEffect(() => {
    console.log('useEffect happening within Maplist here')
    fetchPlaces();
  }, []);

  const fetchPlaces = () => {
    setPlaces(markers);
  };




  const locations = places.map((place, index) => {
    // console.log('place',place)
    // console.log('places',places)
    // console.log('results',place.results[index].photos.geturl)
    return (
      <Link to={place.name}>
        <div className='div_mapList-locations' >
          <div className='div_mapList-location-image'>
            <img
              // src={place.results[index]}
              width="100"
              height="100"
            />
          </div>
          <div className='div_mapList-location-description'>
            <li key={index} className="MapList_div-styling">
              <h3>{place.name}</h3>
              <p>{place.results[index].vicinity}</p>
              <p>{place.results[index].rating} stars</p>
            </li>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div>
      {location.pathname === "/findalocation" ?
        <ul>
          {locations}
        </ul>
        : null
      }

      <Routes>
        <Route path=":id" element={<LocationDetails />} />
      </Routes>
    </div>


  );
}