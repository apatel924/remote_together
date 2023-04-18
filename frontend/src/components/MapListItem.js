import React from "react";
import "components/MapListItems.scss";

export default function MapListItem(props) {

  return (
    <li>
      <h2 >{props.name}</h2>

    </li>
  );
}