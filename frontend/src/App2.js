import { Button, TextField } from "@mui/material";
import "./styles/Search.css";
import React, { useState, useContext } from 'react';
import Map from './components/Map';
import PlaceList from './components/PlaceList';
import { Link, Route, Routes, BrowserRouter, useLocation } from "react-router-dom"
import { FindALocation } from "./components/FindALocation"
import { Login } from "./components/login"
import { Counter } from "./components/Counter"
import Review from "./components/Review"
import { Signup } from "./components/Signup"
import { MapList } from "./components/MapList"
import MapProvider from './providers/mapProvider';
import CounterProvider from './providers/CounterProvider';
//import { Page } from "./components/Page"
//import Search from "./components/Search"
import './App.css';
import Axios from "axios";
import { Favourites } from "./components/Favourites";


const Search = () => {
  const location = useLocation();

  return (
    <MapProvider>
      <CounterProvider>
        <div className="desktop-2">
          <img className="desktop-2-child" alt="" src="/line-1.svg" />
          <h1 className="remotetogether" id="logo">
            RemoteTogether
          </h1>
          <nav className="divinner" id="nav-bar">
            <div className="ulmenu">
              <h3 className="find-a-location"><Link to="/findalocation">Find a Location</Link></h3>
              <h3 className="add-review"><Link to="/addreview">Add Review</Link></h3>
              <h3 className="favourites"><Link to="/favourites">Favourites</Link></h3>
              <h3 className="placeholderlink">PlaceholderLink</h3>
            </div>
            <div className="divmenu-wrapper-secondary" id="chat-login">
              <Button className="contact-us" variant="outlined" color="primary">
                Start Chat
              </Button>
              <h3 className="member-log-in"><Link to="/login">Member Log In</Link></h3>
            </div>
          </nav>
          <div>
            {location.pathname === '/' ?

              <div className="sectionhome-hero-section">
                <img
                  className="divglide-container-icon"
                  alt=""
                  src="/divglidecontainer.svg"
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
                      defaultValue="Vancouver"
                      type="search"
                      label="Find Workspace In"
                      size="medium"
                      margin="none"
                    />
                    <Button
                      className="buttonselect-location-btn"
                      sx={{ width: 387.9800109863281 }}
                      variant="contained"
                      name="SearchButton"
                      color="primary"
                      size="large"
                    >
                      Search
                    </Button>

                  </div>

                </div>
              </div>
              :
              <div>

                <div className="div_main">
                  <div className="div_main_left">
                    <Routes>
                      <Route path="/path" element={<PlaceList />} />
                      <Route path="/favourites" element={<Favourites />} />
                      <Route path="/findalocation" element={<FindALocation />} />
                      <Route path="/path2" element={<Search />} />
                      <Route path="/addreview" element={<Review />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/path5" element={<Signup />} />
                      <Route path="/MapList/*" element={<MapList />} />
                    </Routes>
                  </div>


                  <div className="div_main_right">
                    <Map />
                  </div>


                </div>
              </div>
            }
          </div>
        </div>
      </CounterProvider>
    </MapProvider>

  );
};

export default Search;