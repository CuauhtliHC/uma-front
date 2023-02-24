import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Geocode from 'react-geocode';

const MapContainer = ({ address }) => {
  const [marker, setMarker] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [errorMarker, setErrorMarker] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    Geocode.setApiKey(apiKey);
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setMarker({ lat, lng });
      },
      (error) => {
        setErrorMarker(error);
      },
    );
  }, [address]);
  const options = {
    disableDefaultUI: true,
    zoomControl: false,
  };
  return (
    <>
      {isLoaded ? (
        <>
          {!errorMarker ? (
            <GoogleMap
              options={options}
              mapContainerStyle={{
                height: '30vh',
                width: '100%',
                margin: '5%',
              }}
              center={marker}
              zoom={15}>
              {marker && <Marker position={marker} />}
            </GoogleMap>
          ) : (
            <p style={{ color: 'red', margin: '5%' }}>
              Direccion no encontrada, agregar mas detalle de la misma
            </p>
          )}{' '}
        </>
      ) : (
        <p>{loadError}</p>
      )}
    </>
  );
};

export default MapContainer;
