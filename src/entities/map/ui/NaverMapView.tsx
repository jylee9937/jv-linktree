'use client';

import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { MapConfig } from '../model/types';
import { useEffect, useState } from 'react';

interface NaverMapViewProps {
  config: MapConfig;
}

function MyMap({ config }: NaverMapViewProps) {
  const navermaps = useNavermaps();

  const markerIcon = {
    content: `
      <div style="position: relative;">
        <div style="
          position: absolute;
          bottom: 45px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 6px 12px;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          white-space: nowrap;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        ">
          JesusVillage
        </div>
        <div style="
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid white;
          position: absolute;
          bottom: 37px;
          left: 50%;
          transform: translateX(-50%);
          filter: drop-shadow(0 2px 1px rgba(0,0,0,0.1));
        "></div>
        <svg width="40" height="40" viewBox="0 0 40 40" style="display: block;">
          <path d="M20 2c-5.5 0-10 4.5-10 10 0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z"
                fill="#4285F4" stroke="white" stroke-width="2"/>
          <circle cx="20" cy="12" r="4" fill="white"/>
        </svg>
      </div>
    `,
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 40),
  };

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(config.lat, config.lng)}
      defaultZoom={config.zoom}
    >
      <Marker
        defaultPosition={new navermaps.LatLng(config.lat, config.lng)}
        title="JesusVillage"
        icon={markerIcon}
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
