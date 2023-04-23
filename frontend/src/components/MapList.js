import React, { useState, useContext, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { mapContext } from "../providers/mapProvider";
import { LocationDetails } from "./LocationDetails";
import './MapList.css'

export function MapList() {


  const { markers, selectedMarker, selectedPlaceDetails, mapInstance } = useContext(mapContext)
  const [places, setPlaces] = useState([]);

  const location = useLocation();
  const locations = markers.map((result, index) => {

    return (
      <Link to={result.name} key={index}>
        <div className='div_mapList-locations'>
          <div className='div_mapList-location-image'>
            {console.log('result', result.photos)}
            <img
              src={result.photos && result.photos[0].getUrl()}
              alt="Picture of the location"
              width="150px"
              height="100%"
            />
          </div>
          <div className='div_mapList-location-description'>
            <div className='div_mapList-location-description-splitdiv'>
              <li key={index} className="MapList_div-styling">
                <p>{result.name}</p>
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
      {/* <div className='div_MapList-search'>
        need a search function here
      </div> */}
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