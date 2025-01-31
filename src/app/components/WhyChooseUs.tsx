import React from 'react';
import { FaGlobe, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <FaGlobe className="w-12 h-12 mx-auto mb-6 text-blue-600" />,
      title: 'Global Reach',
      description:
        'Connect with partners and customers worldwide through our extensive network.',
    },
    {
      icon: <FaCogs className="w-12 h-12 mx-auto mb-6 text-blue-600" />,
      title: 'Cutting-Edge Technology',
      description:
        'Leverage our advanced platform for seamless operations and enhanced efficiency.',
    },
    {
      icon: <FaUsers className="w-12 h-12 mx-auto mb-6 text-blue-600" />,
      title: 'Trusted Expertise',
      description:
        'Backed by years of experience in the travel industry, we deliver reliable solutions.',
    },
    {
      icon: <FaChartLine className="w-12 h-12 mx-auto mb-6 text-blue-600" />,
      title: 'Tailored Solutions',
      description:
        'Customized services to meet your unique business needs and drive growth.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Why Choose Highpercom Solutions?
          </h2>
          <p className="text-lg text-gray-700">
            Discover the benefits of partnering with a global leader in travel distribution.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-16">
          <a
            href="#why-choose-us"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;