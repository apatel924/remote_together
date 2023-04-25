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
import no_image from "../docs/no_image.png"


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
        <Link to="/findalocation">Back to Find A Location</Link>
      </div>

      <div className='div_locationDetails-container' >
        <div className='locationDetails-image'>
          {/* there a bug here if you refresh and it's undefined page will crash */}
          <img
            src={currentMarker && currentMarker.photos ? currentMarker.photos[0].getUrl() : no_image}
            alt='no picture'
            // width='100%'
            height='100%'
          />
        </div>
        <div className='div_locationDetails-description'>
          <h2>{params.id}</h2>
          <p>{currentMarker && currentMarker.vicinity}</p>
          <p>{currentMarker && currentMarker.rating} stars ({currentMarker && currentMarker.user_ratings_total})</p>
          {console.log('currentMarker', currentMarker)}

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