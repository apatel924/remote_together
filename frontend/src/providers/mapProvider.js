import react, {createContext, useState} from 'react';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow} from '@react-google-maps/api';

// Create a Context
export const mapContext = createContext();

// Create a Component wrapper from Context.Provider
export default function MapProvider(props) {

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

  const showthesewords = 'hello? anybody home? HELLO OPEN THE DOOR'
  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = {markers, selectedMarker, selectedPlaceDetails, mapInstance, showthesewords};

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <mapContext.Provider value={providerData}>
      {props.children}
    </mapContext.Provider>
  );
};