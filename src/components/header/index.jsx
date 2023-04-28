import React from "react";
import GlobalNav from "../navbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { siteConfig } from "../../config";
import { Link } from "react-router-dom";

const Header = () => {
  const user = false;
  return (
    <header className="sticky top-0 w-full z-40 border-b border-b-slate-700">
      <div className="container flex h-16 items-center space-x-4 mx-10 justify-between">
        <div>
          <GlobalNav menu={siteConfig.menuNav} />
        </div>
        <nav className="flex items-center space-x-4">
          {siteConfig.menuNav.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="font-medium py-2 px-4 hover:bg-slate-800 rounded-md bg-slate-700"
            >
              {item.title}
            </Link>
          ))}

          {!user && (
            <>
              <a
                href="/"
                target="_blank"
                rel="noreferer"
                className="border p-2 rounded-md border-transparent hover:bg-slate-800 transition-colors text-gray-400 hover:text-white text-xl"
              >
                <FaGithub size={25} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferer"
                className="border p-2 rounded-md border-transparent hover:bg-slate-800 transition-colors text-gray-400 hover:text-white"
              >
                <FaTwitter size={25} />
                <span className="sr-only">Twitter</span>
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
