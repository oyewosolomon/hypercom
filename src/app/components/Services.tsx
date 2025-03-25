"use client";

import React from 'react';
import { 
  Plane, 
  Hotel, 
  MapPin, 
  Calendar, 
  Shield, 
  CreditCard,
  LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// Define the service card props interface
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
}

// Service card component with TypeScript typing
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  bgColor 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`
      bg-white 
      rounded-3xl 
      p-6 
      shadow-lg 
      hover:shadow-xl 
      transition-all 
      duration-300 
      group 
      overflow-hidden 
      relative
    `}
  >
    <div className={`
      absolute 
      -top-8 
      -right-8 
      w-24 
      h-24 
      ${bgColor} 
      rounded-full 
      opacity-10 
      group-hover:opacity-20 
      transition-all 
      duration-300
    `}></div>
    
    <div className="flex items-center mb-4">
      <div className={`
        ${bgColor} 
        text-white 
        rounded-full 
        p-3 
        mr-4 
        group-hover:rotate-12 
        transition-transform 
        duration-300
      `}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-[#2d3748]">{title}</h3>
    </div>
    <p className="text-[#4a5568] leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// Define the service type
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
}

// Services section component
const Services: React.FC = () => {
  // Typed array of services
  const services: Service[] = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Discover the world with our seamless flight booking service. Compare prices, routes, and find your perfect journey.",
      bgColor: "bg-[#4299e1]"
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Find your home away from home. Luxury, budget, or boutique - we have the perfect accommodation for every traveler.",
      bgColor: "bg-[#48bb78]"
    },
    {
      icon: MapPin,
      title: "Destination Guides",
      description: "Explore curated travel guides with insider tips, local recommendations, and must-visit attractions for your next adventure.",
      bgColor: "bg-[#ed64a6]"
    },
    {
      icon: Calendar,
      title: "Flexible Bookings",
      description: "Enjoy peace of mind with our flexible booking options. Change or cancel your plans with minimal hassle.",
      bgColor: "bg-[#ecc94b]"
    },
    {
      icon: Shield,
      title: "Travel Protection",
      description: "Travel with confidence. Our comprehensive insurance plans cover medical emergencies, trip cancellations, and more.",
      bgColor: "bg-[#667eea]"
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Multiple payment options, secure transactions, and instant confirmations. Booking travel has never been easier.",
      bgColor: "bg-[#38b2ac]"
    }
  ];

  return (
    <section className="py-16 bg-[#f7fafc]" id='services'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#2d3748] mb-4"
          >
            Your Travel, Your Way
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#4a5568] max-w-2xl mx-auto"
          >
            We provide a comprehensive suite of travel services designed to make your journey smooth, enjoyable, and memorable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;