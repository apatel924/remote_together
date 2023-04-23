import React, { useContext, useState } from 'react';
import { mapContext } from "../providers/mapProvider";
import { useParams } from "react-router-dom";

//import overview from "../docs/overview.png";

// export function LocationDetailsOverview() {
//   return (
//     <div>
//       <img src={overview}></img>
//     </div>
//   )
// }
//{markers[0].name}

export function LocationDetailsOverview() {
  const params = useParams()

  const { markers, selectedMarker, getPlaceDetails, placesService } = useContext(mapContext)
  console.log('markers', markers);
  console.log('useParams', params.id);
  console.log('just Params', params);
  console.log('placesService', placesService);
  console.log('selectedMarker', selectedMarker);
  console.log('getPlaceDetails', getPlaceDetails);
  const [currentIndex, setCurrentIndex] = useState('')

  //do find or filter instead of map
  //marker.name
  //run use effect when overview first loads
  //state.
  //component thats just rendering info it should have it avail with its props

  const currentMarker = markers.find(marker =>
    (marker.name === params.id))

  // console.log(index)
  // console.log("we got a match" + `${result.name} = ${params.id}`)
  // setCurrentIndex(index)
  // return index;

  // console.log('result', result)
  // console.log('params.id', params.id)
  // console.log('result.name', result.name)
  // console.log('index after index', index)
  // return index;

  // findIndex();
  // console.log(findIndex);


  return (
    <div>

      <h2>{params.id}</h2>
      <p>{currentMarker.vicinity}</p>
      {console.log('currentMarker', currentMarker)}
      {currentMarker.photos &&
        <img
          src={currentMarker.photos[0].getUrl()}
          alt={currentMarker.name}
          width='100%'
          height='200'
        />
      }
      {console.log('current Marker', currentMarker)}
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
    </div>
  )
}



