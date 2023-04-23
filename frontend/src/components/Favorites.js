import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { mapContext } from "../providers/mapProvider";
import './MapList.css';
import Axios from "axios";

export function Favorites() {
  // get request to DB for favorites list
  const [favoriteList, setFavoriteList] = useState();

  useEffect(() => {
    Axios.get('/api/favorites')
      .then(response => {
        console.log(response.data.favorites);
        setFavoriteList(response.data.favorites);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const { markers } = useContext(mapContext);

  const favoriteLocations =
  favoriteList &&
  markers &&
  markers.length > 0 &&
  favoriteList
    .filter((favorite, index, self) => {
      const firstIndex = self.findIndex(
        (fav) => fav.place_id === favorite.place_id
      );

      return index === firstIndex;
    })
    .map((favorite, index) => {
      const marker = markers.find(
        (marker) => marker.place_id === favorite.place_id
      );

      if (!marker) {
        return null; 
      }

    return (
      <Link to={`../findalocation/${marker.name}`} key={index}>
        <div className='div_mapList-locations'>
          <div className='div_mapList-location-image'>
            <img
              src={marker.photos && marker.photos[0].getUrl()}
              alt="Picture of the location"
              width="150px"
              height="100%"
            />
          </div>
          <div className='div_mapList-location-description'>
            <div className='div_mapList-location-description-splitdiv'>
              <li key={index} className="MapList_div-styling">
                <p>{marker.name}</p>
                <p>{marker.vicinity}</p>
                <p>{marker.rating} stars</p>
              </li>
              <div>
                distance
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div>
        <ul className="div_MapList-ul-itemList">
          {favoriteLocations}
        </ul>
      </div>
    </div>
  );
}
