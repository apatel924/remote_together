import React, { useState,useContext } from 'react';
import { Button, TextField } from "@mui/material";
import Axios from 'axios';
import { mapContext } from "../providers/mapProvider";

import LHL from "../docs/LHL.jpeg"

export default function Home() {
  // const [searchInput, setSearchInput] = useState("");
  
  const {   
    handleSearch,
    searchInput,
    setSearchInput
  } = useContext(mapContext)

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
            // value=''
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
