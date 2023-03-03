import React, { useState, useEffect } from 'react';
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';
import { containerStyle } from '../../statics/styles/currentDistribution/currentDistributionStyle.jsx';

const GoogleMaps = ({ destination }) => {
  const options = {
    disableDefaultUI: true,
    zoomControl: false,
  };
  const [origin, setOrigin] = useState(null);
  const [response, setResponse] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setOrigin(latLng);
        },
        (error) => {
          console.error(error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={origin}
          zoom={15}
          options={options}>
          {origin && <Marker position={origin} />}
          {origin !== null && (
            <DirectionsService
              options={{
                destination,
                origin,
                travelMode: 'DRIVING',
              }}
              callback={directionsCallback}
            />
          )}
          {response !== null && (
            <DirectionsRenderer options={{ directions: response }} />
          )}
        </GoogleMap>
      ) : (
        <p>{loadError}</p>
      )}
    </>
  );
};

export default GoogleMaps;
