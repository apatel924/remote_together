/*import React, { useState, useContext } from 'react';
import Map from './components/Map';
import PlaceList from './components/PlaceList';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import { Main } from "./components/FindALocation"
import { Login } from "./components/login"
import { Counter } from "./components/Counter"
import { Page2 } from "./components/Page2"
import { Signup } from "./components/Signup"
import { MapList } from "./components/MapList"
import MapProvider from './providers/mapProvider';
import CounterProvider from './providers/CounterProvider';
//import { Page } from "./components/Page"
import Search from "./components/Search"
import './App.css';
import Axios from "axios";
// import { LocationDetails } from "./components/LocationDetails"

function App() {


  // SET STATES HERE
  const [state, setState] = useState({ message: 'Click the button to load data!' })
  const [business, setBusiness] = useState({ address: 'no address here click the button' })

  // FETCH DATA FROM DB HERE
  const fetchData = () => {
    Axios.get('/api') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        setState({
          message: response.data.message
        });
      })
      .catch(err => {
        console.log({ error: err.message });
      });
  }


  const fetchDataBusiness = () => {
    Axios.get('/api/business') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response) // The entire response from the API

        // console.log(response.data.message) // Just the message

        //set state
        setBusiness({ address: response.data.businessList[0].address })
      })
  }

  return (
    <BrowserRouter>
      <MapProvider>
        <CounterProvider>
          <nav className="navbar" >
            {/* links to inject other pages */
           /* <div className="navbar_container">
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
                    <Link to="/path2">Counter</Link>
                  </li>
                  <li className="navbar_container-il">
                    <Link to="/path3">another link</Link>
                  </li>
                  <li className="navbar_container-il">
                    <Link to="/MapList">MapList</Link>
                  </li>
                </ul>
              </div>
              {/* links to login registration */
             /* <div>
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
          {/* main section under nav */
        /*  <div className="div_main">
            {/* left side */
          /*  <div className="div_main_left">
              {/* STATIC FUNCTIONS HERE ABOVE THE RESULTS */
          /*    <div>
                <div>
                  ADD A BACK BUTTON HERE
                </div>
                <div>
                  PUT A SEARCH BAR HERE
                </div>
                <div>
                  PUT ANY OTHER FUNCTIONS HERE
                </div>
              </div>
              {/*  DYNAMIC CONTENT HERE.  */
          /*    <div>
                main area
                <h1>{state.message}</h1>
                <button onClick={fetchData} >
                  Fetch Data
                </button>
                <h1>{business.address}</h1>
                <button onClick={fetchDataBusiness} >
                  business address
                </button>
              </div>

              {/* ROUTES */
            /*  <Routes>
                <Route path="/path" element={<PlaceList />} />
                <Route path="/path1" element={<Main />} />
                <Route path="/path2" element={<Counter />} />
                <Route path="/path3" element={<Page2 />} />
                <Route path="/MapList/*" element={<MapList />}>
                  {/* <Route path=":id" element={<LocationDetails />} />    */
              /*  </Route>
                <Route path="/path4" element={<Login />} />
                <Route path="/path5" element={<Signup />} />


              </Routes>
            </div>
          </div>
          {/* main section under nav */
       /*   <div className="div_main">
            {/* left side */
        /*    <div className="div_main_left">
              main area
              <h1>{state.message}</h1>
              <button onClick={fetchData} >
                Fetch Data
              </button>
              <h1>{business.address}</h1>
              <button onClick={fetchDataBusiness} >
                business address
              </button>
              <Routes>
                <Route path="/path" element={<PlaceList />} />
                <Route path="/path1" element={<Main />} />
                <Route path="/path2" element={<Search />} />
                <Route path="/path3" element={<Page2 />} />
                <Route path="/path4" element={<Login />} />
                <Route path="/path5" element={<Signup />} />
              </Routes>
            </div>

            {/* right side where map is */
          /*  <div className="div_main_right">
              map should be here
              <Map />
            </div>

          </div>
        </CounterProvider>
      </MapProvider>
    </BrowserRouter>
  );
}
export default App; */