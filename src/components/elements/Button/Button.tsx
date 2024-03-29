import React from "react";
import Link from "next/link";
import { SystemComponentProps } from "@/components";

export interface ButtonProps extends SystemComponentProps {
  href?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, as = "button", href } = props;

  if (as === "a" && href) {
    return <Link href={href}>{children}</Link>;
  }

  return <button>{children}</button>;
};
