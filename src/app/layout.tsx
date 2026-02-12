import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '예수마을교회 | Jesus Village Church',
  description: '예수마을교회 공식 링크 - 유튜브, 인스타그램, 찾아오시는 길',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <Analytics />
          {children}
        </Providers>
      </body>
    </html>
  );
}
