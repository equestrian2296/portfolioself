import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons
import logo from '../assets/aslogo.png'; // Path to logo image

const NavBar = () => {
  return (
    <nav className="mb-16 flex items-center justify-between py-2 px-6 bg-[#18243c]/90 shadow-lg backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </div>

      {/* Social Links Section */}
      <div className="flex items-center justify-center gap-6 text-3xl text-[#f8f9fa]">
        <a
          href="https://linkedin.com/in/atharva-sharma-vit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-300 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/equestrian2296"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/AtharvaSha75424?t=9qsUERFrgzQ91muDIFfl3g&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
