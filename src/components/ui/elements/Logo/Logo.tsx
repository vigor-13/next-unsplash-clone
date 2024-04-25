import React from 'react';
import Link from 'next/link';
import { IconBrandUnsplash } from '@tabler/icons-react';

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <IconBrandUnsplash size={42} />
    </Link>
  );
};
