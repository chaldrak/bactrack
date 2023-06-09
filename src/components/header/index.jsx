import React, { useState } from "react";
import GlobalNav from "../navbar";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { siteConfig } from "../../config";
import BaseButton from "../common/base-button";
import useAuth from "../../hooks/authentication";
import { Avatar } from "@mui/material";
import BaseDrawer from "../mui/drawer";
import DrawerContent from "../drawer-content";
import { TbArticle } from "react-icons/tb";

const Header = () => {
  const user = useAuth();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <header className="sticky top-0 w-full z-40 border-b border-b-slate-700 bg-slate-900">
      <div className="flex h-16 items-center space-x-4 mx-5 sm:mx-10 justify-between">
        <div>
          <GlobalNav />
        </div>
        <nav className="flex items-center space-x-5">
          {siteConfig.menuNav.map((item, index) => (
            <BaseButton
              key={index}
              tag="Link"
              title={"Guide"}
              to={item.href}
              variant="contain"
            >
              <TbArticle size={20} className="mr-2" />
            </BaseButton>
          ))}

          {user ? (
            <BaseDrawer
              open={open}
              toggleDrawer={toggleDrawer}
              button={
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ cursor: "pointer", backgroundColor: "#38BDF8AA" }}
                />
              }
            >
              <DrawerContent toggleDrawer={toggleDrawer} />
            </BaseDrawer>
          ) : (
            <div className="hidden md:flex">
              <BaseButton tag="a" iconLabel="GitHub" href="/" variant="menu">
                <FaGithub size={25} />
              </BaseButton>
              <BaseButton tag="a" iconLabel="Twitter" href="/" variant="menu">
                <FaTwitter size={25} />
              </BaseButton>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
