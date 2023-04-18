import React from "react";
import MapListItem from "components/MapListItem";

export default function MapList(props) {
  const locations = props.days.map((location) => {
    return (
      <MapListItem
        key={location.id}
        name={location.name}
        address={location.address}
        rating={location.rating}
        // selected={location.name === props.value}
        // setLocation={location.onChange}
      />
    )
  });

  return (
    <ul>
      {locations}
    </ul>
  );
}