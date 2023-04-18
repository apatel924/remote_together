import React, {useContext} from "react";
import { mapContext } from "../providers/mapProvider";

export function MapList() {

  const {markers, selectedMarker, selectedPlaceDetails, mapInstance, showthesewords} = useContext(mapContext)

  // const locations = props.days.map((location) => {
  //   return (
  //     <MapListItem
  //       key={location.id}
  //       name={location.name}
  //       address={location.address}
  //       rating={location.rating}
  //       // selected={location.name === props.value}
  //       // setLocation={location.onChange}
  //     />
  //   )
  // });

  console.log('why wont you show',showthesewords)
  return (
    <ul>
      {showthesewords}
      {/* {locations} */}
      map List
      {selectedMarker}
    </ul>
  );
}