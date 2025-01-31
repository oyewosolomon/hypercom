"use client"

import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Empowering Global Travel Distribution";
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Typing Animation Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {typedText}
          <span className="ml-2 inline-block w-2 h-12 bg-white animate-blink"></span> {/* Cursor */}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Simplifying Business for Suppliers and Buyers Worldwide
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#services"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Solutions
          </a>
          <a
            href="#demo"
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Request a Demo
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;