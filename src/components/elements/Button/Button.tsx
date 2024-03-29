import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { SystemComponentProps } from "@/components";

export interface ButtonProps extends SystemComponentProps {
  href?: string;
  variant?: "primary" | "ghost";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    as = "button",
    href,
    className,
    variant = "primary",
  } = props;

  const buttonClasses = classNames(
    "transition",
    "inline-block",
    "px-md",
    "py-1",
    "text-stone-500",
    "hover:text-stone-900",
    "text-sm",
    "rounded",
    "border",
    "hover:border-stone-900",
    variant !== "ghost" && "shadow-sm",
    variant === "ghost" && "border-0",
    className
  );

  if (as === "a" && href) {
    return (
      <Link className={buttonClasses} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClasses}>{children}</button>;
};
