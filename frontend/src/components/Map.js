import React, { useState } from 'react';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api';

const Map = () => {
  const initialLocation = { lat: 53.5461, lng: -113.4937 };
  const mapContainerStyle = { width: '100%', height: '400px', marginBottom: '16px' };

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  const onLoad = (map) => {
    setMapInstance(map);
    const service = new window.google.maps.places.PlacesService(map);
    searchPlaces(service, map);
  };

  const searchPlaces = (service, map) => {
    const request = {
      location: map.getCenter(),
      radius: '1000',
      type: ['cafe', 'library'],
      keyword: ['lounge', 'coffee shop'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const newMarkers = results.map((result) => {
          return {
            position: result.geometry.location,
            name: result.name,
            placeId: result.place_id,
          };
        });
        setMarkers(newMarkers);
      }
    });
  };

  const fetchPlaceDetails = (service, placeId) => {
    const request = {
      placeId: placeId,
      fields: ['name', 'formatted_address'],
    };

    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSelectedPlaceDetails(place);
      }
    });
  };

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
    const service = new window.google.maps.places.PlacesService(mapInstance);
    fetchPlaceDetails(service, marker.placeId);
  };

  return (
    <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={initialLocation} zoom={14} onLoad={onLoad}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} onClick={() => onMarkerClick(marker)} />
        ))}

        {selectedMarker && selectedPlaceDetails && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => {
              setSelectedMarker(null);
              setSelectedPlaceDetails(null);
            }}
          >
            <div>
              <h2>{selectedPlaceDetails.name}</h2>
              <p>Address: {selectedPlaceDetails.formatted_address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Map;
