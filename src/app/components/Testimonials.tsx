"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Travel Agency',
      testimonial:
        'Highpercom has transformed the way we distribute our hotel inventory. Their platform is intuitive and efficient.',
      logo: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Operations Manager, Airline',
      testimonial:
        'The global reach and advanced technology of Highpercom have significantly improved our operations.',
      logo: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: 'Michael Brown',
      role: 'Owner, Car Rental Company',
      testimonial:
        'We’ve seen a 30% increase in bookings since partnering with Highpercom. Highly recommended!',
      logo: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [testimonials.length]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A184B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700">
            Hear from our satisfied clients about their experiences with Highpercom Solutions.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Animated Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg text-center max-w-2xl mx-auto"
            >
              <Image
                src={testimonials[activeIndex].logo}
                alt={testimonials[activeIndex].name}
                width={100}
                height={100}
                className="w-24 h-24 mx-auto mb-6 rounded-full"
              />
              <p className="text-gray-700 mb-6">
                {testimonials[activeIndex].testimonial}
              </p>
              <h3 className="text-xl font-semibold text-[#1A184B] mb-2">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-gray-600">
                {testimonials[activeIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1A184B] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            aria-label="Previous"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1A184B] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-[#1A184B]' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;