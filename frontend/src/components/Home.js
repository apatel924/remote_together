import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";
import { mapContext } from "../providers/mapProvider";

import LHL from "../docs/LHL.jpeg";

export default function Home() {
  const { handleSearch, setSearchInput } = useContext(mapContext);

  return (
    <div className="relative">
      <div className="text-right" id="img">
        <img
          className="divglide-container-icon static w-8/12 ml-96 rounded-xl"
          alt=""
          src={LHL}
        />
      </div>
      <div className="w-1/3 h-96 ml-20 absolute top-24 bg-white rounded-xl">
        <div>
          <div className="p-4 flex flex-col items-center place-content-center justify-center">
            <p className="font-bold text-4xl tracking-wide leading-tight">
              Making remote life better, together
            </p>

            <p className="mt-4 ">
              Discover the perfect remote work or study spot with ease.
              From cozy coffee shops to serene libraries and more, find the ideal environment that meets your needs.
            </p>
            <div className="p-4 flex flex-col items-center place-content-center justify-center">
              <div className="mb-2">
                <TextField
                  className="divlocations-dropdown-select- flex justify-center m-10"
                  sx={{ width: 387.9800109863281 }}
                  color="primary"
                  variant="outlined"
                  type="search"
                  label="Find Workspace In"
                  size="large"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <Button
                className="m-10"
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

      </div>
    </div>
  );
}
