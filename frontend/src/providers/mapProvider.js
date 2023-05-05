import react, { createContext, useState, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow, MarkerClusterer, MapContext } from '@react-google-maps/api';
import { debounce } from 'lodash';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'


// Create a Context
export const mapContext = createContext();

// Create a Component wrapper from Context.Provider
export default function MapProvider(props) {
  // Set up state variables for markers, selected marker, place details, places service, and center
  const googleMapsLibraries = ['places']
  const mapContainerStyle = { width: '100%', height: '100%', marginBottom: '16px' }
  const initialLocation = { lat: 53.5461, lng: -113.4937 }

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const [center, setCenter] = useState(initialLocation);

  //state for search bar
  const [searchInput, setSearchInput] = useState(undefined);
  const Navigate = useNavigate();

  //handleSearch for search bar
  const handleSearch = () => {
    // Call the Google Maps API with the search input value
    // and handle the search results
    Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchInput}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      .then((response) => {
        // Handle the response data
        // Update the UI with the search results
        // Can set the response data to another state variable
        // and use it in UI components
        if (response.data.results.length > 0) {
          setSearchInput(response.data.results[0].geometry.location)
          // console.log('state after axios', searchInput)
          Navigate('/findalocation')
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }

  // Use the browser's geolocation API to get the user's current location, or use the default location if geolocation is not available
  useEffect(() => {
    if (searchInput) {
      // navigator.geolocation.getCurrentPosition(
      // (position) => {
      setCenter(
        searchInput
        // searchInput ? searchInput : center
        // lat: position.coords.latitude,
        // lng: position.coords.longitude,
        // lat: searchInput.lat,
        // lng: searchInput.lng
      );

    }
  }, [searchInput]);

  // When the map loads, initialize the PlacesService and call searchPlaces function to search for places
  const onLoad = (map) => {
    const service = new window.google.maps.places.PlacesService(map);
    setPlacesService(service);
    searchPlaces(service, map);
    // Debounce the searchPlaces function to only call it once every 500ms when the map stops moving
    const debouncedSearchPlaces = debounce(() => searchPlaces(service, map), 500);
    // Add an event listener to the map to call debouncedSearchPlaces function when the map stops moving
    map.addListener('idle', () => {
      debouncedSearchPlaces();
    });
  };


  // Use the PlacesService to search for nearby places
  const searchPlaces = (service, map, nextPageToken) => {
    const request = {
      location: map.getCenter(),
      radius: '5000',
      type: ['cafe', 'library'],
      keyword: ['library', 'coffee']
    };
    //need to add more keywords like 'bakery', 'cafe', 'internet' or types

    // Call the nearbySearch method of the PlacesService and update the markers state variable with the results
    service.nearbySearch(request, (results, status, pagination) => {
      // console.log(status); // log the status to the console
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Update the markers state variable with the new results
        setMarkers((prevMarkers) => {

          const existingPlaceIds = new Set(prevMarkers.map((marker) => marker.place_id));
          const currentBounds = map.getBounds();
          const uniqueResults = results.filter((result) => !existingPlaceIds.has(result.place_id));

          // Filter the markers to only show the ones within the current map bounds
          const filteredMarkers = prevMarkers.filter((marker) => currentBounds && currentBounds.contains(marker.geometry.location));
          // Add the new markers to the filteredMarkers array
          const newMarkers = uniqueResults.map((result) => ({ ...result, visible: false }));
          return [...filteredMarkers, ...newMarkers];
        });
        // If there are more pages of results, wait 2 seconds and then call searchPlaces function again with the nextPageToken

        if (pagination.hasNextPage) {
          setTimeout(() => {
            searchPlaces(service, map, pagination.nextPageToken);
          }, 100000);
        }
      }
    });
  };


  // Handle when a marker is clicked by setting the selectedMarker state variable and calling getPlaceDetails function
  const handleMarkerClick = (place) => {
    setSelectedMarker(place);
    getPlaceDetails(place.place_id);
  };


  // Use the PlacesService to get details for a specific place and update the selectedPlaceDetails state variable
  const getPlaceDetails = (place_id) => {
    const request = {
      placeId: place_id,
      fields: ['name', 'formatted_address', 'geometry', 'photos', 'rating', 'types', 'reviews'],
    };
    placesService.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSelectedPlaceDetails(place);
      }
    });
  };

  // const initialLocation = searchInput

  const providerData = {
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
    handleSearch,
    searchInput,
    setSearchInput
  };

  return (
    <>
      <mapContext.Provider value={providerData}>
        {props.children}
      </mapContext.Provider>
    </>
  );
};