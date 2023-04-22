import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow, MarkerClusterer, MapContext } from '@react-google-maps/api';
import { debounce } from 'lodash';
import { mapContext } from "../providers/mapProvider";

// // Set initial location to Edmonton, Canada
// const initialLocation = { lat: 53.5461, lng: -113.4937 };
// // Set the size and margin of the map container
// const mapContainerStyle = { width: '100%', height: '400px', marginBottom: '16px' };
// // Load the 'places' library from the Google Maps API
// const googleMapsLibraries = ['places'];


const Map = () => {

  const {   
    markers, 
    setMarkers, 
    selectedMarker,
    setSelectedMarker, 
    selectedPlaceDetails,
    setSelectedPlaceDetails,
    placesService,
    setPlacesService,
    center,
    setCenter,
    onLoad,
    searchPlaces,
    handleMarkerClick,
    initialLocation,
    mapContainerStyle,
    getPlaceDetails,
    googleMapsLibraries,
    searchInput
  } = useContext(mapContext)

    console.log('from Mapjs page',searchInput)
 // Render the Google Map component with markers and an InfoWindow for the selected marker
 return (
  //  <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={googleMapsLibraries}>
     <GoogleMap
       mapContainerStyle={mapContainerStyle}
       center={center}
       zoom={14}
       onLoad={onLoad}
     >
       <MarkerClusterer>
         {(clusterer) =>
           markers.map((marker) => (
             <Marker
               key={marker.place_id}
               position={marker.geometry.location}
               onClick={() => handleMarkerClick(marker)}
               clusterer={clusterer}
             />
           ))
         }
       </MarkerClusterer>


       {/* Show an InfoWindow for the selected marker */}
       {selectedMarker && selectedPlaceDetails && (
         <InfoWindow
           position={selectedMarker.geometry.location}
           onCloseClick={() => {
             setSelectedMarker(null);
             setSelectedPlaceDetails(null);
           }}
         >
           <div>
             <h2>{selectedPlaceDetails.name}</h2>
             <p>{selectedPlaceDetails.formatted_address}</p>
           </div>
         </InfoWindow>
       )}
     </GoogleMap>
  //  </LoadScriptNext>
 );
};


export default Map;





