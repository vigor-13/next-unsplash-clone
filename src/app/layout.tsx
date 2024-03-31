import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@services';
import { MainStructure } from '@components';

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
