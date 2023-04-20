import { Link, Route, Routes } from "react-router-dom"
import React from 'react';
import { useParams } from "react-router-dom"
import './LocationDetails.css'
import { mapContext } from "../providers/mapProvider";
import { LocationDetails_Reviews } from "./LocationDetails_Reviews";



export function LocationDetails() {
  const params = useParams()


  return (
    <div>

      <div>
        <Link to="/findalocation">go back</Link>
      </div>
      <div className='div_locationDetails-container' >
        <div className='locationDetails-image'>
          <img
            src={'https://cdn.wework.com/locations/image/ac403e3a-1ab7-11ea-b9c4-0a5bc5747799/Web_72DPI-20191125_WeWork_Station_Square_Vancouver_010.jpg?auto=format+compress&fit=crop&q=50&w=3000&h=1250'}
            width='100%'
            height="200"
          />
        </div>
        <div className='div_locationDetails-description'>
          {/* <li key={index} className="MapList_div-styling"> */}
          <h3>{params.id}</h3>
          <p>address</p>
          <p>rating</p>
    
          {/* need to import mapProvider for the below  */}
          {/* <h3>{place.name}</h3>
            <p>{place.results[index].vicinity}</p>
            <p>{place.results[index].rating} stars</p> */}
          {/* </li> */}
        </div>
        <div className="div_locationDetails-Nav">
          <div className="div_locationDetails-Nav-item">Overview</div>
          <div className="div_locationDetails-Nav-item">
            <Link to="LocationDetails_Reviews">Reviews</Link>
          </div>
          
          <div className="div_locationDetails-Nav-item">About</div>
        </div>
        <div className='div_locationDetails-reviews'>

          <i>1 week ago</i>

          <span>
            They had lots of comfortable seating and the wifi was fast!
          </span>



            {/* {newReviews} */}
        <Routes>
          <Route path="/" element={<LocationDetails_Reviews />}></Route>

        </Routes>
            
        </div>
      </div>


      <Routes>
        <Route path="/findalocation" element={<LocationDetails />} />
      </Routes>

    </div>
  )
}