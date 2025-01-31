import React from 'react';

import Navbar from './Navbar';

const TravelCard = ({
  title,
  subtitle,
  bgColor,
}: {
  title: string;
  subtitle: string;
  bgColor: string;
}) => (
  <div className={`${bgColor} rounded-3xl p-8 flex flex-col items-center w-full min-h-[calc(100vh-100px)]`}>
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-4 text-navy">{title}</h2>
      <p className="text-lg text-navy/80">{subtitle}</p>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
   
    <Navbar/>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TravelCard
            title="Flights"
            subtitle="Your Ticket to Adventure: Explore and Book Flights with Ease!"
            bgColor="bg-[#FF9955]"
          />
          <TravelCard
            title="Hotel"
            subtitle="Where Comfort Meets Convenience"
            bgColor="bg-[#B89CFE]"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
