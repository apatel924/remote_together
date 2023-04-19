import { Link, Route, Routes } from "react-router-dom"
import React from 'react';
import { useParams } from "react-router-dom"
import './LocationDetails.css'

export function LocationDetails() {

  const params = useParams()

  return (
    <div>
      <Link to="/MapList">go back</Link>
      
      <h1>LocationDetails for location #{params.id} </h1>
      <Routes>
        <Route path="/MapList" element={<LocationDetails />} />
      </Routes>

    </div>
  )
}