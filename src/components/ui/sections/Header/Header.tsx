import React from 'react';
import { Logo, SearchInput, MainNavigation } from '@/components';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-40">
      <div className="flex justify-between items-center px-4 py-3">
        <Logo />
        <div className="flex-1 px-3">
          <SearchInput />
        </div>
        <MainNavigation />
      </div>
    </header>
  );
};
