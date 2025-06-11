import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white  py-8 flex justify-between items-center h-full px-12" id='footer'>
      {/* Left: Name & Role */}
      <div className="text-sm sm:text-base font-semibold ml-0 sm:ml-24">
        Nishanth K R – FullStack Web Developer
      </div>

      {/* Right: Icons only */}
      <div className="flex space-x-4 text-xl">
        <a href="tel:+919566397838" className="hover:text-purple-100" aria-label="Phone">
          <FaPhone />
        </a>
        <a href="mailto:nishanthkr134@gmail.com" className="hover:text-purple-100" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/nishanth-k-r-0ab0aa22a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-100"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nishanth1321/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-100"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
