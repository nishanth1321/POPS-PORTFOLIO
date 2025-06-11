"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

type DropdownState = {
  services: boolean;
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setDropdownOpen] = useState<DropdownState>({
    services: false,
  });

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetDiv = document.getElementById("experience");
    if (targetDiv) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetDiv.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToIndustries = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetDiv = document.getElementById("skills");
    if (targetDiv) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetDiv.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetDiv = document.getElementById("footer");
    if (targetDiv) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetDiv.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetDiv = document.getElementById("projects");
    if (targetDiv) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetDiv.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen({ services: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen({ services: false });
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-black/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-10">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
            <Link
              href="/"
              className="text-white font-bold hover:text-gray-300 text-sm transition duration-200"
            >
              Me
            </Link>
            <Link
              href="#services"
              onClick={handleScrollToServices}
              className="text-white font-bold hover:text-gray-300 text-sm transition duration-200"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              onClick={handleScrollToIndustries}
              className="text-white font-bold hover:text-gray-300 text-sm transition duration-200"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={handleScrollToDemo}
              className="text-white font-bold hover:text-gray-300 text-sm transition duration-200"
            >
              Projects
            </Link>
            <Link
              href="#footer"
              onClick={handleScrollToFooter}
              className="text-white font-bold hover:text-gray-300 text-sm transition duration-200"
            >
              Ping Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white font-bold focus:outline-none hover:text-gray-300 transition duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg shadow-lg z-50`}
      >
        <div className="px-4 pt-4 pb-3 space-y-5">
          <Link
            href="/"
            className="block text-white mb-2 font-bold hover:text-gray-300 text-md transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Me
          </Link>
          <Link
            href="#experience"
            onClick={(e) => {
              handleScrollToDemo(e);
              setIsOpen(false);
            }}
            className="block text-white mb-2 font-bold hover:text-gray-300 text-md transition duration-200"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            onClick={(e) => {
              handleScrollToIndustries(e);
              setIsOpen(false);
            }}
            className="block  text-white font-bold hover:text-gray-300 text-md transition duration-200"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={(e) => {
              handleScrollToServices(e);
              setIsOpen(false);
            }}
            className="block -mt-3 text-white font-bold hover:text-gray-300 text-md transition duration-200 "
          >
            Projects
          </Link>
          <Link
            href="#foote"
            className="block -mt-3 text-white font-bold hover:text-gray-300 text-md transition duration-200"
            onClick={handleScrollToFooter}
          >
            Pine Me
          </Link>
        </div>
      </div>
    </nav>
  );
}