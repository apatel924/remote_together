import './LocationDetailsOverview.css'
import { FiMap, FiShare2 } from 'react-icons/fi';
import { BsSave, BsFillTelephoneForwardFill } from 'react-icons/bs';

export function LocationDetailsOverview() {
  return (
    <div>
      <div className="
      flex flex-row
      text-white 
      shadow-lg
      py-6
      rounded-xl
      ">
        <MiddleBarIcon icon={<FiMap size="24" />} text="Directions" />
        <MiddleBarIcon icon={<BsFillTelephoneForwardFill size="26" />} text="Phone" />
        <MiddleBarIcon icon={<BsSave size="24" />} text="Save" />
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
