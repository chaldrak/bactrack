import React from "react";
import { Link } from "react-router-dom";

const BaseButton = ({
  to,
  href,
  variant,
  disabled,
  border,
  children,
  tag,
  title,
  iconLabel,
  type,
}) => {
  if (tag === "a")
    return (
      <a
        href={href}
        target="_blank"
        className={`p-2 rounded-md transition-colors ${createTheme(variant)}`}
        rel="noreferer"
      >
        {children}
        <span className="sr-only">{iconLabel}</span>
      </a>
    );
  if (tag === "Link")
    return (
      <Link
        to={to}
        className={`font-medium flex items-center py-2 px-4 rounded-md transition-colors ${createTheme(
          variant
        )} ${createBorder(border)}`}
        rel="noreferer"
      >
        {children}
        <span className="whitespace-nowrap">{title}</span>
      </Link>
    );

  if (tag === "button")
    return (
      <button
        className={`w-full py-2 rounded-md bg-sky-700 disabled:cursor-not-allowed font-medium hover:bg-sky-800 disabled:bg-sky-800 ${createTheme(
          variant
        )} ${createBorder(border)}`}
        disabled={disabled}
        type={type}
      >
        {title}
      </button>
    );
};

export default BaseButton;

const createTheme = (variant) => {
  if (variant === "menu")
    return "hover:bg-slate-800 text-gray-400 hover:text-white";
  if (variant === "contain")
    return "hover:bg-slate-800 bg-slate-700 text-white border-slate-500";
  if (variant === "outline")
    return "space-x-2 border-sky-700 text-sky-400 hover:bg-sky-950";
};

const createBorder = (border) => {
  return border ? "border" : "";
};
