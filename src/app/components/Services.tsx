import React from 'react';
import { FaBuilding, FaGlobe, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaBuilding className="w-16 h-16 mx-auto mb-6 text-[#010155]" />,
      title: 'For Suppliers',
      description:
        'Expand your reach with our global distribution network. Manage inventory and pricing in real-time.',
    },
    {
      icon: <FaHandshake className="w-16 h-16 mx-auto mb-6 text-[#010155]" />,
      title: 'For Buyers',
      description:
        'Access a vast inventory of travel products at competitive prices. Streamline bookings and payments.',
    },
    {
      icon: <FaGlobe className="w-16 h-16 mx-auto mb-6 text-[#010155]" />,
      title: 'Global Reach',
      description:
        'Connect with partners and customers worldwide through our extensive network.',
    },
    {
      icon: <FaLaptopCode className="w-16 h-16 mx-auto mb-6 text-[#010155]" />,
      title: 'Cutting-Edge Technology',
      description:
        'Leverage our advanced platform for seamless operations and enhanced efficiency.',
    },
  ];

  return (
    <section className="py-20 bg-white" id='services'>
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#010155] mb-4">What We Offer</h2>
          <p className="text-lg text-gray-700">
            Tailored solutions for suppliers and buyers in the travel industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center hover:bg-white hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#010155] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-16">
          <a
            href="#services"
            className="bg-[#010155] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;