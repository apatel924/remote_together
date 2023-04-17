import React from 'react';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api';


const Map = () => {
  // geo encoding to bring to current location
  const initialLocation = { lat: 53.5461, lng: -113.4937 };
  const mapContainerStyle = { width: '100%', height: '400px', marginBottom: '16px' };

  const onLoad = (map) => {
    const service = new window.google.maps.places.PlacesService(map);
    searchPlaces(service, map);
  };

  const searchPlaces = (service, map) => {
    const request = {
      location: map.getCenter(),
      radius: '5000',
      // how to get this working?
      type: ['cafe', 'library'],
      keyword: ['lounge', 'coffee shop'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i], map);
        }
      }
    });
  };

  const createMarker = (place, map) => {
    const marker = new Marker({
      position: place.geometry.location,
      map: map,
    });

    const infowindow = new InfoWindow();
    marker.addListener('click', () => {
      infowindow.setContent(place.name);
      infowindow.open(map, marker);
    });
  };

  
  return (
    <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={initialLocation}
        zoom={14}
        onLoad={onLoad}
      ></GoogleMap>
    </LoadScriptNext>
  );
};

export default Map;
