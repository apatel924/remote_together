import { Button, TextField } from "@mui/material";
import "./styles/Search.css";
import React, { useState, useContext } from 'react';
import Map from './components/Map';
import PlaceList from './components/PlaceList';
import { Link, Route, Routes, BrowserRouter, useLocation } from "react-router-dom"
import { FindALocation } from "./components/FindALocation"
import { Login } from "./components/Login"
import { Counter } from "./components/Counter"

import { Signup } from "./components/Signup"
import { MapList } from "./components/MapList"
import MapProvider from './providers/mapProvider';
import CounterProvider from './providers/CounterProvider';
//import { Page } from "./components/Page"
//import Search from "./components/Search"
import './App.css';
import Axios from "axios";
import { Favorites } from "./components/Favorites";
import LHL from "./docs/LHL.jpeg"
import AuthProvider, { authContext } from "./providers/authProvider";
import TestingPage from "./components/Logout"
import { AuthContext } from "./providers/authProvider";

import Home from "./components/Home"
import { mapContext } from "./providers/mapProvider";
import { Logout } from './components/Logout'



const Search = () => {
  const {
    handleSearch,
    searchInput,
    setSearchInput
  } = useContext(mapContext)

  const location = useLocation();
  const {auth, user} = useContext(AuthContext)

  return (

    <CounterProvider>
      <div className="desktop-2">
        <img className="desktop-2-child"/>
        <h1 className="remotetogether" id="logo">
          <Link to="/">RemoteTogether</Link>
        </h1>
        <nav className="divinner" id="nav-bar">
          <div className="ulmenu">
            <h3 className="find-a-location"><Link to="/findalocation">Find a Location</Link></h3>
            <h3 className="add-review"><Link to="/addreview">Add Review</Link></h3>
            <h3 className="favourites"><Link to="/Favorites">Favorites</Link></h3>
            {location.pathname === '/' ?
              null
              :
              <h3 className="placeholderlink">
                
                <TextField
                  color="primary"
                  variant="outlined"
                  type="search"
                  label="Find Workspace In"
                  size="medium"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button
                  variant="contained"
                  name="SearchButton"
                  color="primary"
                  size="large"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </h3>
            }
          </div>
          <div className="divmenu-wrapper-secondary" id="chat-login">
            <Button className="contact-us" variant="outlined" color="primary">
              Start Chat
            </Button>
            {!auth && <h3 className="member-log-in"><Link to="/Login">Member Log In</Link></h3>}
            {auth && <Logout />}
          </div>
        </nav>
        <div>
          {location.pathname === '/' ?
            <Home />

            :
            <div>

              <div className="div_main">
                <div className="div_main_left">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/path" element={<PlaceList />} />
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/findalocation/*" element={<MapList />} />
                    <Route path="/findalocation" element={<MapList />} />
                    <Route path="/path2" element={<Search />} />

                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                  </Routes>
                </div>

                <div className="div_main_right">
                  <Map />
                      {/* {!auth && <Login/>}
                      {auth && <TestingPage />} */}
                </div>


              </div>
            </div>
          }
        </div>
      </div>
    </CounterProvider>


  );
};

export default Search;