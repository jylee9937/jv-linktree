'use client';

import { useEffect, useRef } from 'react';
import { MapConfig } from '../model/types';

interface NaverMapViewProps {
  config: MapConfig;
}

export function NaverMapView({ config }: NaverMapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Naver Maps API is loaded
    if (!window.naver || !window.naver.maps) {
      console.error('Naver Maps API not loaded');
      return;
    }

    if (!mapRef.current) return;

    // Initialize map
    const location = new window.naver.maps.LatLng(config.lat, config.lng);

    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: config.zoom,
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);

    // Add marker
    new window.naver.maps.Marker({
      position: location,
      map: map,
    });
  }, [config]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-lg overflow-hidden"
    />
  );
}
