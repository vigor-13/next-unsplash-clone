import React from 'react';
import Link from 'next/link';
import { IconBrandUnsplash } from '@tabler/icons-react';

export interface LogoProps {
  color?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { color, size = 42 } = props;

  return (
    <Link href="/">
      <IconBrandUnsplash color={color} size={size} />
    </Link>
  );
};
