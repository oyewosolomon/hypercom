import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Highpercom Solutions Ltd is a leading global travel distribution platform, dedicated to simplifying business for suppliers and buyers in the travel industry. We connect hotels, airlines, and car rental services with travel agencies and online travel companies, enabling seamless transactions and unparalleled efficiency.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With years of expertise and cutting-edge technology, we empower businesses to thrive in a competitive market, delivering solutions that drive growth and innovation.
            </p>
            <a
              href="#learn-more"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/1.jpg"
              alt="About Us"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;