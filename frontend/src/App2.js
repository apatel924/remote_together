import { Button, TextField } from "@mui/material";
import "./styles/Search.css";
import React, { useState, useContext } from 'react';
import Map from './components/Map';
import PlaceList from './components/PlaceList';
import { Link, Route, Routes, BrowserRouter, useLocation } from "react-router-dom"
import { FindALocation } from "./components/FindALocation"
import { Login } from "./components/login"
import { Counter } from "./components/Counter"

import { Signup } from "./components/Signup"
import { MapList } from "./components/MapList"
import MapProvider from './providers/mapProvider';
import CounterProvider from './providers/CounterProvider';
//import { Page } from "./components/Page"
//import Search from "./components/Search"
import './App.css';
import Axios from "axios";
import { Favourites } from "./components/Favourites";

import  Home  from "./components/Home"



const Search = () => {


  const location = useLocation();

  return (
    <MapProvider>
      <CounterProvider>
        <div className="desktop-2">
          <img className="desktop-2-child" alt="" src="{}" />
          <h1 className="remotetogether" id="logo">
            <Link to="/">RemoteTogether</Link>
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
                <Home />
              
              :
              <div>

                <div className="div_main">
                  <div className="div_main_left">
                    <Routes>
                      <Route path="/" element={ <Home />} />
                      <Route path="/path" element={<PlaceList />} />
                      <Route path="/favourites" element={<Favourites />} />
                      <Route path="/findalocation/*" element={<MapList />} />
                      <Route path="/findalocation" element={<MapList />} />
                      <Route path="/path2" element={<Search />} />

                      <Route path="/login" element={<Login />} />
                      <Route path="/path5" element={<Signup />} />
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