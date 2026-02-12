'use client';

import { NavermapsProvider } from 'react-naver-maps';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NavermapsProvider ncpKeyId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID!}>
      {children}
    </NavermapsProvider>
  );
}
