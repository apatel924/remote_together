import React, { useContext } from 'react';
import { GoogleMap, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import { mapContext } from "../providers/mapProvider";

const Map = () => {
  const {
    markers,
    selectedMarker,
    setSelectedMarker,
    selectedPlaceDetails,
    setSelectedPlaceDetails,
    center,
    onLoad,
    handleMarkerClick,
    mapContainerStyle,
  } = useContext(mapContext)

  // Render the Google Map component with markers and an InfoWindow for the selected marker
  return (
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





