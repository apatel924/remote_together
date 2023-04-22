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
  // useEffect(() => {
  //   console.log('useEffect happening within Maplist here')
  //   console.log(markers)
  //   fetchPlaces();
  // }, []);

  // const fetchPlaces = () => {
  //   setPlaces(markers);
  // };
  //  console.log( markers)
  const locations = markers.map((result, index) => {

    return (
      <Link to={result.name}>
        <div className='div_mapList-locations' >
          <div className='div_mapList-location-image'>
            {console.log('result', result.photos)}
            <img
              src={result.photos}
              width="150px"
              height="100%"
            />
          </div>
          <div className='div_mapList-location-description'>
            <div className='div_mapList-location-description-splitdiv'>
              <li key={index} className="MapList_div-styling">
                <h3>{result.name}</h3>
                <p>{result.vicinity}</p>
                <p>{result.rating} stars</p>
              </li>
              <div>
                distance
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div>
      <div className='div_MapList-search'>
        need a search function here
      </div>
      <div>
        {location.pathname === "/findalocation" ?
          <ul className="div_MapList-ul-itemList">
            {locations}
          </ul>
          : null
        }

        <Routes>
          <Route path=":id/*" element={<LocationDetails />} />
          {/* <Route path=":id/review" element={<LocationDetailsReviews />} /> */}
        </Routes>
      </div>
    </div>


  );
}