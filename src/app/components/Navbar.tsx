"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <Link href="/" className="text-2xl font-bold text-purple-700 flex items-center">
                     
                     <Image src='/assets/logo.png' alt='Logo' width={100} height={80}/>
                   
                   </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            onClick={() => scrollToSection('home')}
            className="hover:text-[#010155] transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection('about')}
            className="hover:text-[#010155] transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={() => scrollToSection('services')}
            className="hover:text-[#010155] transition duration-300"
          >
            Services
          </a>
          <a
            href="#testimonials"
            onClick={() => scrollToSection('testimonials')}
            className="hover:text-[#010155] transition duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#010155] transition duration-300"
          >
            Contact Us
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#010155] text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#home"
              onClick={() => scrollToSection('home')}
              className="hover:text-[#010155] transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => scrollToSection('about')}
              className="hover:text-[#010155] transition duration-300"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => scrollToSection('services')}
              className="hover:text-[#010155] transition duration-300"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-[#010155] transition duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#010155] transition duration-300"
            >
              Contact Us
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;