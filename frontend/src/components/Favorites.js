import React, { useState, useContext, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { mapContext } from "../providers/mapProvider";
import { LocationDetails } from "./LocationDetails";
import './MapList.css'
import Axios from "axios";
import no_image from "../docs/no_image.png"

export function Favorites() {
  // get request to DB for favorites list

  const [favoriteList, setFavoriteList] = useState();

  // Axios.get('/api/favorites')
  //   .then((response) => {
  //     console.log(response.data.review)
  //     setFavoriteList(response.data.review)
  //   }
  // .catch((err) => {
  //   console.log(err.message);
  // })
  // )

  const { markers } = useContext(mapContext)
  const [places, setPlaces] = useState({});

  const location = useLocation();

  // populate locations saved in DB
  // AXIOS calls
  useEffect(() => {
    Axios.get('/api/fav123')
      .then((response) => {
        console.log('response.data from axios', response.data)
        setPlaces(response.data)
      }).catch((error) => {
        console.error(error);
      })
  }, []);

console.log("places",places)
  console.log('markers',markers)
  
  const locations = 
  (places.length > 0 ?
    places.map((result, index) => {
      return (
        <Link to={`../findalocation/${result.business_name}`} key={index}>
          <div className='div_mapList-locations'>
            <div className='div_mapList-location-image'>
                          <img
                src={result.photos ? result.photos[0].getUrl() : no_image}
                alt={"Picture of the location"}
                width="150px"
                height="100%"
              />
            </div>
            <div className='div_mapList-location-description'>
              <div className='div_mapList-location-description-splitdiv'>
                <li key={index} className="MapList_div-styling">
                  <p>{result.business_name}</p>
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
    : (<p> You currently have no favorite locations </p>))
  
  
  
  return (
    <div>

      <div>
        {/* {location.pathname === "/findalocation" ? */}
        <ul className="div_MapList-ul-itemList">
          {locations}
        </ul>
        {/* : null
      } */}

        {/* <Routes> */}
        {/* probably have the update this route */}
        {/* <Route path="findalocation/:id/*" element={<LocationDetails />} /> */}
        {/* </Routes> */}
      </div>
    </div>)
}