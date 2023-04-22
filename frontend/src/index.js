import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './App2';
import { BrowserRouter } from "react-router-dom"
import AuthProvider, { AuthContext } from "./providers/authProvider";


{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=REACT_APP_GOOGLE_MAPS_API_KEY&callback=initMap&libraries=places"></script> */ }


ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>

    <Search />
  </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'));