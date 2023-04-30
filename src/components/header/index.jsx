import React from "react";
import GlobalNav from "../navbar";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { siteConfig } from "../../config";
import { Link } from "react-router-dom";
import BaseButton from "../common/base-button";
import useAuth from "../../hooks/authentication";

const Header = () => {
  const [auth, setAuth] = useAuth();
  return (
    <header className="sticky top-0 w-full z-40 border-b border-b-slate-700 bg-slate-900">
      <div className="flex h-16 items-center space-x-4 mx-5 sm:mx-10 justify-between">
        <div>
          <GlobalNav />
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          {siteConfig.menuNav.map((item, index) => (
            <BaseButton
              key={index}
              tag="Link"
              title={item.title}
              to={item.href}
              variant="contain"
            />
          ))}

          {auth ? (
            <span>{auth.displayName}</span>
          ) : (
            <>
              <BaseButton tag="a" iconLabel="GitHub" href="/" variant="menu">
                <FaGithub size={25} />
              </BaseButton>
              <BaseButton tag="a" iconLabel="Twitter" href="/" variant="menu">
                <FaTwitter size={25} />
              </BaseButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
