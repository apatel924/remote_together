import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './App2';
import { BrowserRouter } from "react-router-dom"
import AuthProvider, { AuthContext } from "./providers/authProvider";
import { LoadScriptNext } from '@react-google-maps/api';
import MapProvider from './providers/mapProvider';
import './index.css';

const googleMapsLibraries = ['places']

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <MapProvider>
        <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
          <Search />
        </LoadScriptNext>
      </MapProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'));