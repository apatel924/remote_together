import { TextField } from "@mui/material";
import React, { useContext } from 'react';
import Map from './components/Map';
import PlaceList from './components/PlaceList';
import { Route, Routes, useLocation } from "react-router-dom"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { MapList } from "./components/MapList"
import CounterProvider from './providers/CounterProvider';
import { Favorites } from "./components/Favorites";
import Home from "./components/Home"
import { mapContext } from "./providers/mapProvider";
import Chat from "./components/Chat";
import './index.css';
import Navbar from "./components/Navbar";
import { BsSearch } from 'react-icons/bs';
import { LocationDetails } from "./components/LocationDetails";

const App = () => {
  const {
    handleSearch,
    setSearchInput
  } = useContext(mapContext)

  const location = useLocation();

  return (
    <CounterProvider>
      <div >
        <div className="bg-slate-400">
          <Navbar />
        </div>
        <div>
          <div className="flex items-center place-content-center p-4 shadow-lg"> {location.pathname === "/" ? null : (
            <div className="flex flex-row " >
              <div >
                <TextField
                  sx={{ width: 387.9800109863281 }}
                  color="primary"
                  type="search"
                  label="Find Workspace In"
                  size="medium"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>

              <div className="flex flex-row items-center place-content-center p-4 hover:bg-slate-200 rounded-3xl
    transition-all duration-300 ease-linear">
                <BsSearch size="28" onClick={handleSearch} />
              </div>
            </div>
          )}</div>

          {location.pathname === '/' ?
            <Home />
            :
            <div>
              <div className="div_main">
                {location.pathname !== "/chat" && (
                  <div className="div_main_left">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/path" element={<PlaceList />} />
                      <Route path="/Favorites" element={<Favorites />} />
                      <Route path="/findalocation" element={<MapList />} />
                      <Route path="/findalocation/*" element={<MapList />} />
                      <Route path="/findalocation/:id/*" element={<LocationDetails />} />

                      <Route path="/path2" element={<App />} />

                      <Route path="/Login" element={<Login />} />
                      <Route path="/Signup" element={<Signup />} />
                      <Route path="/chat" element={<Chat />} />
                    </Routes>
                  </div>
                )}
                {location.pathname === "/chat" && (
                  <div className="div_main_fullwidth">
                    <Chat />
                  </div>
                )}
                {location.pathname !== "/chat" && (
                  <div className="div_main_right mt-4 mr-10">
                    <Map />
                  </div>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    </CounterProvider>
  );
};

export default App;