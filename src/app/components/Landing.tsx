"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import { motion, useInView } from 'framer-motion';

interface TravelCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
  imageSrc: string;
}

const TravelCard: React.FC<TravelCardProps> = ({ 
  title, 
  subtitle, 
  bgColor, 
  imageSrc 
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      className={`${bgColor} rounded-3xl p-4 flex flex-col w-full min-h-[calc(100vh-100px)]`}
      initial={{ opacity: 0, x: -100 }} // Animate from the left
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex-1 text-center p-4">
        <h2 className="text-5xl font-extrabold mb-2 text-navy">{title}</h2>
        <p className="text-lg px-3 pt-5 text-navy/80">{subtitle}</p>
      </div>
      <div className="relative w-full h-[60%]">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-full p-5"
          priority 
        />
      </div>
    </motion.div>
  );
};

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative md:grid md:grid-cols-2 md:gap-6" ref={containerRef}>
          {/* First Card - Always visible */}
          <TravelCard
            title="Flights"
            subtitle="Your Ticket to Adventure: Explore and Book Flights with Ease!"
            bgColor="bg-[#FF9955]"
            imageSrc="/assets/flights.jpg"
          />

          {/* Mobile overlay */}
          <div className="md:hidden absolute inset-0">
            <motion.div
              initial={{ x: "100%" }} // Animate from the right
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TravelCard
                title="Hotel"
                subtitle="Where Comfort Meets Convenience"
                bgColor="bg-[#B89CFE]"
                imageSrc="/assets/hotel.jpg"
              />
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Animate from the right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TravelCard
                title="Hotel"
                subtitle="Where Comfort Meets Convenience"
                bgColor="bg-[#B89CFE]"
                imageSrc="/assets/hotel.jpg"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;