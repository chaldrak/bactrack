import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import BaseButton from "../common/base-button";

const Footer = () => {
  return (
    <footer className="px-10 border-t border-slate-700 h-24 w-full flex items-center justify-between">
      <p>
        Made with ❤️ by <span className="font-black">Le Dev Matheux</span>
      </p>
      <p>© copyright - {new Date().getFullYear()}</p>
      <div className="flex items-center">
        <BaseButton tag="a" iconLabel="GitHub" href="/" variant="menu">
          <FaGithub size={20} />
        </BaseButton>
        <BaseButton tag="a" iconLabel="Twitter" href="/" variant="menu">
          <FaTwitter size={20} />
        </BaseButton>
        <BaseButton tag="a" iconLabel="LinkedIn" href="/" variant="menu">
          <FaLinkedin size={20} />
        </BaseButton>
      </div>
    </footer>
  );
};

export default Footer;
