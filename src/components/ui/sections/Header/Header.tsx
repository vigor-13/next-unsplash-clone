import React from 'react';
import { Flex, Box, Logo, SearchInput, HeaderButtons } from '@/components';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-header">
      <Flex className="justify-between items-center px-4 py-3">
        <Logo />
        <Box className="flex-1 px-3">
          <SearchInput />
        </Box>
        <HeaderButtons />
      </Flex>
    </header>
  );
};
