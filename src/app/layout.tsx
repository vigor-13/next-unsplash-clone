import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainStructure } from '@components';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unsplash Next.js Clone App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <MainStructure>{children}</MainStructure>
        </Providers>
      </body>
    </html>
  );
}
