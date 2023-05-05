import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./providers/authProvider";
import { LoadScriptNext } from '@react-google-maps/api';
import MapProvider from './providers/mapProvider';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <MapProvider>
        <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
          <App />
        </LoadScriptNext>
      </MapProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'));