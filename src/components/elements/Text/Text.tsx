import React from "react";
import classNames from "classnames";
import { SystemComponentProps } from "@/components";

export interface TextProps extends SystemComponentProps {}

export const Text: React.FC<TextProps> = (props) => {
  const { children, as = "p", className } = props;

  const textClasses = classNames(
    "text-sm",
    as === "h1" && "text-4xl font-bold",
    as === "h2" && "text-3xl font-bold",
    as === "h3" && "text-2xl font-bold",
    as === "h4" && "text-xl font-bold",
    as === "h5" && "text-lg font-bold",
    as === "h6" && "text-lg font-bold",
    className
  );

  return React.createElement(as, { className: textClasses }, children);
};
