import React from "react";
import { Link } from "react-router-dom";

const BaseButton = ({
  to,
  href,
  variant,
  theme,
  disabled,
  border,
  children,
  tag,
  title,
  iconLabel,
  type,
  onClick,
}) => {
  if (tag === "a")
    return (
      <a
        href={href}
        target="_blank"
        className={`p-2 rounded-md transition-colors ${createTheme(
          variant,
          theme
        )}`}
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
        className={`font-medium flex items-center justify-center py-2 px-4 space-x-2 rounded-md transition-colors ${createTheme(
          variant,
          theme
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
        className={`w-full py-2 rounded-md bg-sky-700 disabled:cursor-not-allowed font-medium disabled:bg-sky-800 ${createTheme(
          variant,
          theme
        )} ${createBorder(border)}`}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    );

  if (tag === "google")
    return (
      <button
        className={`font-medium flex items-center justify-center w-full sm:w-fit py-2 px-4 rounded-md transition-colors ${createTheme(
          variant,
          theme
        )} ${createBorder(border)} 
          disabled:hover:bg-transparent disabled:cursor-default`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
        <span className="whitespace-nowrap">{title}</span>
      </button>
    );
};

export default BaseButton;

const createTheme = (variant, theme) => {
  if (variant === "menu")
    return "hover:bg-slate-800 text-gray-400 hover:text-white";
  if (variant === "contain")
    return `${
      theme === "red"
        ? "hover:bg-red-800 hover:border-red-800"
        : theme === "blue"
        ? "hover:bg-sky-950 bg-sky-800 text-sky-400 border-sky-500"
        : theme === "white"
        ? "hover:bg-slate-800 hover:border-slate-800 hover:text-white bg-white text-slate-900 border-white"
        : "hover:bg-slate-800 bg-slate-700 text-white border-slate-500"
    } `;
  if (variant === "outline")
    return `${
      theme === "blue"
        ? "space-x-2 border-sky-700 text-sky-400 hover:bg-sky-950"
        : "space-x-2 border-slate-700 text-white hover:bg-slate-800"
    }`;
};

const createBorder = (border) => {
  return border ? "border" : "";
};
