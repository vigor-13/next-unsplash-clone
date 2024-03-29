import React from "react";
import { Button } from "@components";

export const MainNavigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Button as="a" href="/">
            로그인
          </Button>
        </li>
        <li>
          <Button as="a" href="/">
            북마크
          </Button>
        </li>
      </ul>
    </nav>
  );
};
