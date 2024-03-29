import React from "react";
import { Logo, MainNavigation } from "@components";

export const Header: React.FC = () => {
  return (
    <header className="sticky">
      <div className="flex justify-between items-center px-4 py-2">
        <Logo />
        <MainNavigation />
      </div>
    </header>
  );
};
