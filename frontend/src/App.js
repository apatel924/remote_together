import React, {useState} from 'react';
import Map from './components/Map';
import PlaceList from './components/PlaceList';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import { Main } from "./components/main"
import { Login } from "./components/login"
import { Page } from "./components/Page"
import { Page2 } from "./components/Page2"
import { Signup } from "./components/Signup"
import './App.css';
import Axios from "axios";

function App() {
// SET STATES HERE
  // const [state, useState] = useState('')

// FETCH DATA FROM DB HERE


  return (
    <BrowserRouter>
        <nav className="navbar" >
            {/* links to inject other pages */}
          <div className="navbar_container">
            <div>
              <ul className="navbar_container-ul">
                <li className="navbar_container-il">
                  <Link to="/">ROOT PATH LOGO HERE</Link>
                </li>
                <li className="navbar_container-il">
                  <Link to="/path">PlaceList</Link>
                </li>
                <li className="navbar_container-il">
                  <Link to="/path1">search</Link>
                </li>
                <li className="navbar_container-il">
                  <Link to="/path2">favorites</Link>
                </li>
                <li className="navbar_container-il">
                  <Link to="/path3">another link</Link>
                </li>
                <li className="navbar_container-il">
                  <Link to="/Map">Map</Link>
                </li>
              </ul>
            </div>
            {/* links to login registration */}
            <div>
              <ul className="navbar_container-ul">
                <li className="navbar_container-il">
                <Link to="/path4">Login</Link>
                </li>
                <li className="navbar_container-il" >
                <Link to="/path5">registration</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* main section under nav */}
        <div className="div_main">
          {/* left side */}
          <div className="div_main_left">
            main area
            <Routes>
              <Route path="/path" element={<PlaceList />} />
              <Route path="/path1" element={<Main />} />
              <Route path="/path2" element={<Page />} />
              <Route path="/path3" element={<Page2 />} />
              <Route path="/path4" element={<Login />} />
              <Route path="/path5" element={<Signup />} />
            </Routes>
          </div>

          {/* right side where map is */}
          <div className="div_main_right">
            map should be here
            <Map />
          </div>

        </div>
      </BrowserRouter>
    // <div className="App">
    //   <h1>Remote Together</h1>
    //   <PlaceList />
    // </div>
   );
}
export default App;