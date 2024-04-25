import React from 'react';
import { Button } from '@/components';

export const MainNavigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <Button as="a" href="/login" variant="ghost">
            로그인
          </Button>
        </li>
        <li>
          <Button as="a" href="/bookmarks">
            북마크
          </Button>
        </li>
      </ul>
    </nav>
  );
};
