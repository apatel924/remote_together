import { Link, Route, Routes, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./LocationDetails.css";
import { mapContext } from "../providers/mapProvider";
import { LocationDetailsReviews } from "./LocationDetailsReviews";
import { LocationDetailsOverview } from "./LocationDetailsOverview";
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import no_image from "../docs/no_image.png";

export function LocationDetails() {
  const { markers } =
    useContext(mapContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const [select, setSelect] = useState("Overview");
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    axios
      .post("/api/favorites", {
        place_id: currentMarker && currentMarker.place_id,
        is_favorite: !isFavorite,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const currentMarker = markers.find((marker) => marker.name === params.id);

  return (
    <div className="pt-2">
      <div className="relative flex flex-row items-center justify-center mx-10 w-20 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl
    transition-all duration-300 ease-linear">
        <AiOutlineArrowLeft />
        <Link to="/findalocation"> Back</Link>
      </div>

      <div className="div_locationDetails-container flex items-center place-content-center">
        <div className="locationDetails-image">
          {/* there a bug here if you refresh and it's undefined page will crash */}
          <img
            className="rounded-md mt-10"
            width="300px"
            height="300px"
            src={
              currentMarker && currentMarker.photos
                ? currentMarker.photos[0].getUrl()
                : no_image
            }
            alt="Not available"
          />
        </div>
        <div className="div_locationDetails-description">
          <h2 className="font-bold">{params.id}</h2>
          <p>{currentMarker && currentMarker.vicinity}</p>
          <p>
            {currentMarker && currentMarker.rating} stars (
            {currentMarker && currentMarker.user_ratings_total})
          </p>
          {console.log("currentMarker", currentMarker)}
        </div>

        <div className="flex border-b-4">
          <div className="mx-20">
            {isFavorite ? (
              <AiFillHeart size={24} onClick={handleFavoriteClick} />
            ) : (
              <AiOutlineHeart size={24} onClick={handleFavoriteClick} />
            )}
          </div>
          <div>
            <button
              className="mx-20 text-lg"
              type="button"
              onClick={() => {
                setSelect("Overview");
              }}
            >
              Overview
            </button>
          </div>
          <div>
            <button
              className="mx-20 text-lg"
              type="button"
              onClick={() => {
                setSelect("Reviews");
              }}
            >
              Reviews
            </button>
          </div>
        </div>

        <div className="div_locationDetails-reviews">
          {/* using setState to conditionally render */}
          {select === "Overview" && (
            <LocationDetailsOverview placeDetails={selectedPlaceDetails} />
          )}
          {select === "Reviews" && <LocationDetailsReviews />}
        </div>
      </div>

      <Routes>


        <Route path="/findalocation" element={<LocationDetails />} />
      </Routes>
    </div>
  );
}
