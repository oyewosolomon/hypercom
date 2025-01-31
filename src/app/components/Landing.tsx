"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
}) => (
  <div className={`${bgColor} rounded-3xl p-4 flex flex-col w-full min-h-[calc(100vh-100px)]`}>
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
  </div>
);

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      gsap.set(secondCardRef.current, {
        y: '100%',
        position: 'absolute',
        top: '0'
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
        animation: gsap.to(secondCardRef.current, {
          y: '0%',
          ease: 'none'
        })
      });
    }
  }, []);

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
          <div 
            ref={secondCardRef} 
            className="md:hidden absolute inset-0"
          >
            <TravelCard
              title="Hotel"
              subtitle="Where Comfort Meets Convenience"
              bgColor="bg-[#B89CFE]"
              imageSrc="/assets/hotel.jpg"
            />
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block">
            <TravelCard
              title="Hotel"
              subtitle="Where Comfort Meets Convenience"
              bgColor="bg-[#B89CFE]"
              imageSrc="/assets/hotel.jpg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;