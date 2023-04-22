import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './App2';
import { BrowserRouter } from "react-router-dom"
import { LoadScriptNext} from '@react-google-maps/api';


const googleMapsLibraries = ['places']

ReactDOM.render(
  <BrowserRouter>
    <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <Search />
    </LoadScriptNext>
  </BrowserRouter>,
  document.getElementById('root'));