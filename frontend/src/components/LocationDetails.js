import { Link, Route, Routes } from "react-router-dom"
import React from 'react';
import { useParams } from "react-router-dom"
import './LocationDetails.css'
import { mapContext } from "../providers/mapProvider";

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
            // src={place.results[index]}
            width='100%'
            height="200"
          />
        </div>
        <div className='div_locationDetails-description'>
          {/* <li key={index} className="MapList_div-styling"> */}
          <h3>{params.id}</h3>
          <p>address</p>
          <p>rating</p>
          {/* <h3>{place.name}</h3>
            <p>{place.results[index].vicinity}</p>
            <p>{place.results[index].rating} stars</p> */}
          {/* </li> */}
        </div>
        <div className='div_locationDetails-reviews'>

          <i>1 week ago</i>

          <span>
            They had lots of comfortable seating and the wifi was fast!
          </span>


        </div>
      </div>


      <Routes>
        <Route path="/findalocation" element={<LocationDetails />} />
      </Routes>

    </div>
  )
}