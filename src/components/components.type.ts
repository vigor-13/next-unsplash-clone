import React from "react";

export interface SystemComponentProps {
  children: React.ReactNode;
  as: React.Component | React.ElementType;
}
