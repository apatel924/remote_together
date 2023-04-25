import React, { useContext, useState } from 'react';
import { mapContext } from "../providers/mapProvider";
import { useParams } from "react-router-dom";
import './LocationDetailsOverview.css'

export function LocationDetailsOverview() {
  const params = useParams()

  const { markers } = useContext(mapContext)


  const currentMarker = markers.find(marker =>
    (marker.name === params.id))

  console.log(currentMarker)
  return (
    <div className="locationDetails_main-container-wrapper">
      <div className='locationDetails_main-container-upper'>
        <div className='locationDetails_main-container-upper-item'><span>🗺</span><div>Direction</div></div>
        <div className='locationDetails_main-container-upper-item'>🛟 <br /> Save</div>
        <div className='locationDetails_main-container-upper-item'>📲 <br /> Send to phone</div>
        <div className='locationDetails_main-container-upper-item'>📤 <br /> Share</div>
      </div>
      <div className='locationDetails_main-container-lower'>
        <div className='locationDetails_main-container-lower-item'>
          ⌚︎ Open - Closes 8:30p.m.
        </div>
        <div className='locationDetails_main-container-lower-item'>
          🌏 www.starbucks.ca
        </div>
        <div className='locationDetails_main-container-lower-item'>
          ☎️ (780) 904-5793
        </div>
      </div>

    </div>
  )
}



