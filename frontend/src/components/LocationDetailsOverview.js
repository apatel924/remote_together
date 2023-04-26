import React, { useContext, useState } from 'react';
import { mapContext } from "../providers/mapProvider";
import { useParams } from "react-router-dom";
import './LocationDetailsOverview.css'
import { FaDirections } from 'react-icons/fa';
import { FiMap, FiShare2 } from 'react-icons/fi';
import { BsSave, BsFillTelephoneForwardFill } from 'react-icons/bs';

export function LocationDetailsOverview() {
  // const params = useParams()
  // const { markers } = useContext(mapContext)
  // const currentMarker = markers.find(marker =>
  //   (marker.name === params.id))
  // console.log(currentMarker)


  return (
    <div>
      {/* <div className="locationDetails_main-container-wrapper"> */}
      <div className="
      flex flex-row
      text-white 
      shadow-lg
      py-6
      rounded-xl
      ">
        <MiddleBarIcon icon={<FiMap size="24" />} text="Direction" />
        <MiddleBarIcon icon={<BsFillTelephoneForwardFill size="26"/>} text="Phone" />
        <MiddleBarIcon icon={<BsSave size="24" />} text="Save"/>
        <MiddleBarIcon icon={<FiShare2 size="24" />} text="Share" />

      </div>
      <div className='locationDetails_main-container-lower-item pt-10'>
        ⌚︎ Open 9:00a.m. - Closes 9:00p.m.
      </div>
      <div className='locationDetails_main-container-lower-item py-2'>
        🌏 https://www.vpl.ca
      </div>
      <div className='locationDetails_main-container-lower-item'>
        ☎️ (780) 904-5793
      </div>
    </div>
  )
}

const MiddleBarIcon = ({ icon, text }) => (
  <div className="middleBar-icon flex flex-col">
    <div>
      {icon}
    </div>
    <div>
      {text}
    </div>

  </div>

)

    // </div>
    //   <div className='locationDetails_main-container-lower'>
    // <div className="locationDetails_main-container-wrapper">
    //   <div className='locationDetails_main-container-upper'>
    //     <div className='locationDetails_main-container-upper-item'><span>🗺</span><div>Direction</div></div>
    //     <div className='locationDetails_main-container-upper-item'>🛟 <br /> Save</div>
    //     <div className='locationDetails_main-container-upper-item'>📲 <br /> Send to phone</div>
    //     <div className='locationDetails_main-container-upper-item'>📤 <br /> Share</div>
      // </div>
      //   <div className='locationDetails_main-container-lower-item'>
      //     ⌚︎ Open - Closes 8:30p.m.
      //   </div>
      //   <div className='locationDetails_main-container-lower-item'>
      //     🌏 www.starbucks.ca
      //   </div>
      //   <div className='locationDetails_main-container-lower-item'>
      //     ☎️ (780) 904-5793
      //   </div>
    //   </div>

    // </div>