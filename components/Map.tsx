"use client";

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapData } from '@/lib/siteData';

interface MapContainerStyle {
  width: string;
  height: string;
  borderRadius: string;
  boxShadow: string;
  transition: string;
  marginTop: string;
}

interface MapCenter {
  lat: number;
  lng: number;
}

const containerStyle: MapContainerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '0.5em',
  boxShadow: '0 8px 26px 0 rgba(22, 24, 26, 0.11)',
  transition: 'ease-out 0.16s',
  marginTop: '1.5rem',
};

const center: MapCenter = {
  lat: mapData.mainData.lat,
  lng: mapData.mainData.lng
};

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  const [, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* You can add markers or other map elements here */}
    </GoogleMap>
  ) : null;
};

export default Map;