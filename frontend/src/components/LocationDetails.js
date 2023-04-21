import { Link, Route, Routes, useLocation } from "react-router-dom"
import React, { useState } from 'react';
import { useParams, } from "react-router-dom"
import './LocationDetails.css'
import { mapContext } from "../providers/mapProvider";
import { LocationDetails_Reviews } from "./LocationDetails_Reviews";
import { LocationDetails_Overview } from "./LocationDetails_Overiew"
import { LocationDetails_About } from "./LocationDetails_About";
import office from "../docs/office.jpeg";
import starbucks from "../docs/starbucks.png";




export function LocationDetails() {
  const params = useParams()
  const location = useLocation();
  console.log(location)

  const [select, setSelect] = useState('Reviews');

  return (
    <div>

      <div>
        <Link to="/findalocation">go back</Link>
      </div>
      <div className='div_locationDetails-container' >
        <div className='locationDetails-image'>
          <img
            src={starbucks}
            width='100%'
            height="200"
          />
        </div>
        <div className='div_locationDetails-description'>

          <h3>{params.id}</h3>
          <p>address</p>
          <p>rating</p>


        </div>
        <div className="div_locationDetails-Nav">
          <div className="div_locationDetails-Nav-item">

            <button type="button" onClick={() => { setSelect('Overview') }}>Overview</button>
          </div>
          <div className="div_locationDetails-Nav-item">
            <button type="button" onClick={() => { setSelect('Reviews') }}>Review</button>

          </div>
          <div className="div_locationDetails-Nav-item">
            <button type="button" onClick={() => { setSelect('About') }}>About</button>

          </div>
        </div>

        <div className='div_locationDetails-reviews'>
   
          {/* using setState to conditionally render */}
          {select === 'Overview' && <LocationDetails_Overview />}
          {select === 'Reviews' && <LocationDetails_Reviews />}
          {select === 'About' && <LocationDetails_About />}




        </div>
      </div>


      <Routes>
        {/* <Route path="/reviews" element={<LocationDetails_Reviews />} /> */}

        <Route path="/findalocation" element={<LocationDetails />} />
      </Routes>

    </div>
  )
}