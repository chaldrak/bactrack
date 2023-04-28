import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-10 border-t border-slate-700 h-24 w-full flex items-center justify-between">
      <p>
        Made with 💞 by <span className="font-black">Le Dev Matheux</span>
      </p>
      <p>© copyright - {new Date().getFullYear()}</p>
      <div className="flex items-center">
        <a
          href="/"
          target="_blank"
          rel="noreferer"
          className="border p-2 rounded-md border-transparent hover:bg-slate-800 transition-colors text-gray-400 hover:text-white text-xl"
        >
          <FaGithub />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferer"
          className="border p-2 rounded-md border-transparent hover:bg-slate-800 transition-colors text-gray-400 hover:text-white"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferer"
          className="border p-2 rounded-md border-transparent hover:bg-slate-800 transition-colors text-gray-400 hover:text-white"
        >
          <FaLinkedin />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
