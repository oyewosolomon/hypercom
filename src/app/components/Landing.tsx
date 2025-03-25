"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plane, Hotel } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#e6eaf3] flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-white shadow-lg rounded-full inline-flex items-center px-6 py-2 text-sm font-medium text-[#4a5568]">
            <Plane className="mr-2 text-[#3182ce]" size={20} />
            Travel Reimagined
          </div>
          <h1 className="text-6xl font-bold text-[#2d3748] leading-tight">
            Explore. <br />
            <span className="text-[#4299e1]">Connect.</span> Journey.
          </h1>
          <p className="text-xl text-[#4a5568] max-w-md">
            Discover seamless travel experiences with our intuitive platform. Book flights and hotels with just a few clicks.
          </p>
          
          <div className="flex space-x-4">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors">
              Book Flights
            </button>
            <button className="border-2 border-[#4299e1] text-[#4299e1] px-6 py-3 rounded-full hover:bg-[#4299e1]/10 transition-colors">
              Find Hotels
            </button>
          </div>
        </motion.div>

        {/* Right Content - Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            {/* Flight Image */}
            <div className="bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all hover:scale-105">
              <div className="relative h-64 w-full">
                <Image 
                  src="/assets/flights.jpg" 
                  alt="Flights" 
                  layout="fill" 
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#4299e1]/20 hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 flex items-center bg-white/80 rounded-full px-4 py-2">
                  <Plane className="mr-2 text-[#4299e1]" size={20} />
                  <span className="text-sm font-medium">Flights</span>
                </div>
              </div>
            </div>

            {/* Hotel Image */}
            <div className="bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 translate-y-12">
              <div className="relative h-64 w-full">
                <Image 
                  src="/assets/hotel.jpg" 
                  alt="Hotels" 
                  layout="fill" 
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#4299e1]/20 hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 flex items-center bg-white/80 rounded-full px-4 py-2">
                  <Hotel className="mr-2 text-[#4299e1]" size={20} />
                  <span className="text-sm font-medium">Hotels</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4299e1]/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#4299e1]/10 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;