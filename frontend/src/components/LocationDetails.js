import { Link, Route, Routes, useLocation } from "react-router-dom"
import React, { useState, useContext } from 'react';
import { useParams } from "react-router-dom"
import './LocationDetails.css'
import { mapContext } from "../providers/mapProvider";
import { LocationDetailsReviews } from "./LocationDetailsReviews";
import { LocationDetailsOverview } from "./LocationDetailsOverview"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import axios from 'axios';


import office from "../docs/office.jpeg";
import starbucks from "../docs/starbucks.png";


export function LocationDetails() {

  const { markers, selectedMarker, getPlaceDetails, placesService } = useContext(mapContext)
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams()
  const location = useLocation();
  console.log(location)

  const [select, setSelect] = useState('Overview');
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    axios.post('/api/favorites', {
      place_id: currentMarker.place_id,
      is_favorite: !isFavorite,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });    
  };

  const currentMarker = markers.find(marker =>
    (marker.name === params.id))

  return (
    <div>

      <div>
        <Link to="/findalocation">go back</Link>
      </div>
      <div className='div_locationDetails-container' >
        <div className='locationDetails-image'>
          {/* <img
            src={starbucks}
            width='100%'
            height="200"
          /> */}
          {currentMarker.photos &&
            <img
              src={currentMarker.photos[0].getUrl()}
              alt={currentMarker.name}
              width='100%'
              height='150px'
            />
          }
        </div>
        <div className='div_locationDetails-description'>
          <h2>{params.id}</h2>
          <p>{currentMarker.vicinity}</p>
          {console.log('currentMarker', currentMarker)}
          
          {currentMarker.opening_hours.isOpen() &&
            <div>
              <h3>Opening Hours:</h3>
              <ul>

                {/* {markers.opening_hours.weekday_text.map((day, i) => (
              <li key={i}>{day}</li>
            ))}  */}

              </ul>


            </div>
          }
          {/* <h3>{params.id}</h3>
          <p>address</p>
          <p>rating</p> */}


        </div>
        <div className="div_locationDetails-Nav">
          <div>
          {isFavorite ? (
              <AiFillHeart size={24} onClick={handleFavoriteClick} />
            ) : (
              <AiOutlineHeart size={24} onClick={handleFavoriteClick} />
          )}
          </div>
          <div className="div_locationDetails-Nav-item">

            <button type="button" onClick={() => { setSelect('Overview') }}>Overview</button>
          </div>
          <div className="div_locationDetails-Nav-item">
            <button type="button" onClick={() => { setSelect('Reviews') }}>Review</button>

          </div>

        </div>

        <div className='div_locationDetails-reviews'>

          {/* using setState to conditionally render */}
          {select === 'Overview' && <LocationDetailsOverview placeDetails={selectedPlaceDetails} />}
          {select === 'Reviews' && <LocationDetailsReviews />}
        </div>
      </div>


      <Routes>
        {/* <Route path="/reviews" element={<LocationDetailsReviews />} /> */}

        <Route path="/findalocation" element={<LocationDetails />} />
      </Routes>

    </div>
  )
}