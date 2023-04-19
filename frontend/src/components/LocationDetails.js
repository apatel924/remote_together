
import React from 'react';
import {useParams} from "react-router-dom"
import './LocationDetails.css'

export function LocationDetails() {

  const params = useParams()

  return (
  <h1>LocationDetails for location #{params.id} </h1>
  )
}