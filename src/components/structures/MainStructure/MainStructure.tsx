import React from "react";
import { Header } from "@components";

export interface MainStructureProps {
  children: React.ReactNode;
}

export const MainStructure: React.FC<MainStructureProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
