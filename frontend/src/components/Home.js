import React, {useState} from 'react';
import { Button, TextField } from "@mui/material";
import Axios from 'axios';




import LHL from "../docs/LHL.jpeg"

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

const handleSearch = () => {
  // Call the Google Maps API with the search input value
  // and handle the search results
  Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchInput}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    .then((response) => {
      // Handle the response data
      console.log(response.data.results[0].geometry.location);
      // Update the UI with the search results
      // Can set the response data to another state variable
      // and use it in UI components
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
};
  return (
    <div className="sectionhome-hero-section">
      <img
        className="divglide-container-icon"
        alt=""
        src={LHL}
      />
      <div className="divhome-hero-left-container" id="searchandtext">
        <div className="divray-show-tablet">
          <div className="h1ray-text-h1">
            <h2 className="for-all-the-container" id="search-heading">
              <span className="for-all-the-container1">
                <p className="for-all-the">For all the ways you</p>
                <p className="for-all-the">work, we’re here</p>
              </span>
            </h2>
          </div>
          <div className="pray-text-body">
            <p className="find-a-location1" id="search-p">
              Find a location near you. Explore memberships and
            </p>
            <div className="move-in-ready-offices">
              move-in ready offices for individuals or companies
            </div>
            <p className="of-all-sizes" id="search-p">
              of all sizes.
            </p>
          </div>
        </div>
        <div className="formhero-form">
          <TextField
            className="divlocations-dropdown-select-"
            sx={{ width: 387.9800109863281 }}
            color="primary"
            variant="outlined"
            type="search"
            label="Find Workspace In"
            size="medium"
            margin="none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}

          />
          <Button
            className="buttonselect-location-btn"
            sx={{ width: 387.9800109863281 }}
            variant="contained"
            name="SearchButton"
            color="primary"
            size="large"
            onClick={handleSearch}
          >
            Search
          </Button>

        </div>

      </div>
    </div>

  )
}
