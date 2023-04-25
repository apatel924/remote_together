import React, { useState,useContext } from 'react';
import { Button, TextField } from "@mui/material";
import Axios from 'axios';
import { mapContext } from "../providers/mapProvider";

import LHL from "../docs/LHL.jpeg"
import { Container } from 'postcss';

export default function Home() {
  // const [searchInput, setSearchInput] = useState("");
  
  const {   
    handleSearch,
    searchInput,
    setSearchInput
  } = useContext(mapContext)

  return (
    <container className="container mx-auto md:w-full h-screen flex justify-center bg-gradient-to-r ">
      {/* <img
        className="divglide-container-icon"
        alt=""
        src={LHL}
      /> */}
      <div>
        <div>
          
          <div className="p-40 flex justify-center font-bold">
            <p className="find-a-location1">
              Find a location near you. 
            </p>
            
            </div>
            
        </div>
        <div className="formhero-form">
          <TextField
            className="divlocations-dropdown-select- flex justify-center"
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
    </container>

  )
}
