import React from "react";

export interface SystemComponentProps {
  children: React.ReactNode;
  className?: string;
  as: React.Component | React.ElementType;
}
