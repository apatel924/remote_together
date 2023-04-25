import { Button, TextField } from "@mui/material";
// import "./styles/Search.css";
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
//import './App.css';
import Axios from "axios";
import { Favorites } from "./components/Favorites";
import LHL from "./docs/LHL.jpeg"
import AuthProvider, { authContext } from "./providers/authProvider";
import TestingPage from "./components/Logout"
import { AuthContext } from "./providers/authProvider";

import Home from "./components/Home"
import { mapContext } from "./providers/mapProvider";
import { Logout } from './components/Logout'

import Chat from "./components/Chat";
import './index.css';
import Navbar from "./components/Navbar";


const Search = () => {
  const {
    handleSearch,
    searchInput,
    setSearchInput
  } = useContext(mapContext)

  const location = useLocation();
  const { auth, user } = useContext(AuthContext)

  return (

    <CounterProvider>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <img />
        <h1 className="font-bold italic p-8 flex justify-start ">
          <Link to="/">RemoteTogether</Link>
        </h1>
        <Navbar />
        <div>
          
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
                      <Route path="/findalocation/*" element={<MapList />} />
                      <Route path="/findalocation" element={<MapList />} />
                      <Route path="/path2" element={<Search />} />

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
                <div className="div_main_right">
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

export default Search;