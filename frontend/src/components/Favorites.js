import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { mapContext } from "../providers/mapProvider";
import "./MapList.css";
import Axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import no_image from "../docs/no_image.png";

export function Favorites() {
  // get request to DB for favorites list
  const [favoriteList, setFavoriteList] = useState();

  useEffect(() => {
    Axios.get("/api/favorites")
      .then((response) => {
        console.log(response.data.favorites);
        setFavoriteList(response.data.favorites);
      })
      .catch((err) => {
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
            <div className="div_mapList-locations mb-6 mt-4 mx-10  border-2 border-slate-200 rounded-md ring-2 ring-slate-200 hover:ring-8">
              <div className="div_mapList-location-image">
                <img
                  src={marker.photos ? marker.photos[0].getUrl() : no_image}
                  alt=""
                  width="150px"
                  height="100%"
                />
              </div>
              <div className="div_mapList-location-description">
                <div className="div_mapList-location-description-splitdiv">
                  <li key={index} className="MapList_div-styling">
                    <div className="flex flex-row">
                    
                      <p className="font-bold">{marker.name} </p>
                      <AiFillHeart size={24} />
                    </div>
                    <p>{marker.vicinity}</p>
                    <p>
                      {marker.rating} stars ({marker.user_ratings_total})
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
        <ul className="div_MapList-ul-itemList">{favoriteLocations}</ul>
      </div>
    </div>
  );
}
