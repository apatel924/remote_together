import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { mapContext } from "../providers/mapProvider";

import "./MapList.css";

import no_image from "../docs/no_image.png";

export function MapList() {
  const { markers } = useContext(mapContext);

  const location = useLocation();
  const locations = markers.map((result, index) => {
    return (
      <Link to={result.name} key={index}>
        <div className="div_mapList-locations mb-6 mt-4 mx-10  border-2 border-slate-200 rounded-md ring-2 ring-slate-200 hover:ring-8">
          <div className="div_mapList-location-image">
            <img
              className="rounded-md"
              src={result.photos ? result.photos[0].getUrl() : no_image}
              alt=""
              width="150px"
              height="100%"
            />
          </div>
          <div className="div_mapList-location-description">
            <div className="div_mapList-location-description-splitdiv">
              <li key={index} className="MapList_div-styling">
                <p className="font-bold">{result.name}</p>
                <p>{result.vicinity}</p>
                <p>
                  {result.rating} stars ({result.user_ratings_total})
                </p>
              </li>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <div>
        {location.pathname === "/findalocation" ? (
          <ul className="div_MapList-ul-itemList">{locations}</ul>
        ) : null}
      </div>
    </div>
  );
}
