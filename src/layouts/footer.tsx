import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white  py-8 flex justify-between items-center h-full px-12" id='footer'>
      {/* Left: Name & Role */}
      <div className="text-sm sm:text-base font-semibold ml-0 sm:ml-24">
        Priyadharshini V N – FullStack Web Developer
      </div>

      {/* Right: Icons only */}
      <div className="flex space-x-4 text-xl">
        <a href="tel:+919482124277" className="hover:text-teal-100" aria-label="Phone">
          <FaPhone />
        </a>
        <a href="mailto:vn.dharshini@gmail.com" className="hover:text-teal-100" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/priyadharshini-vn-6b9b2128a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-100"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Priyadharshini2310/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-100"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
