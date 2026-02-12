'use client';

import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { MapConfig } from '../model/types';
import { useEffect, useState } from 'react';

interface NaverMapViewProps {
  config: MapConfig;
}

function MyMap({ config }: NaverMapViewProps) {
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(config.lat, config.lng)}
      defaultZoom={config.zoom}
    >
      <Marker
        defaultPosition={new navermaps.LatLng(config.lat, config.lng)}
      />
    </NaverMap>
  );
}

export function NaverMapView({ config }: NaverMapViewProps) {
  	const [isClient, setIsClient] = useState(false);
    useEffect(() => { 
      setIsClient(true);
    }, []);
  return (
    <MapDiv
      style={{
        width: '100%',
        height: '400px',
      }}
      className="rounded-lg overflow-hidden"
    >
      {isClient && <MyMap config={config} />}
    </MapDiv>
  );
}
