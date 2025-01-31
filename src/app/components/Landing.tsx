import React from 'react';
import Link from 'next/link';

const TravelCard = ({
  title,
  subtitle,
  bgColor,
}: {
  title: string;
  subtitle: string;
  bgColor: string;
}) => (
  <div className={`${bgColor} rounded-3xl p-8 flex flex-col items-center w-full min-h-screen`}>
    <div className="text-center mb-24">
      <h2 className="text-[40px] font-bold mb-4 text-navy">{title}</h2>
      <p className="text-lg text-navy/80">{subtitle}</p>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600 flex items-center">
            <span className="text-3xl mr-1">✿</span>
            Highpercom 
          </Link>
          <div className="ml-16 space-x-8">
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">
              Profile
            </Link>
            <Link href="/search" className="text-gray-600 hover:text-gray-900">
              Search
            </Link>
            <Link href="/top-rated" className="text-gray-600 hover:text-gray-900">
              Top Rated
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900">
            Sign up
          </button>
          <button className="px-6 py-2 rounded-full bg-navy text-white hover:bg-navy/90 flex items-center">
            Sign in
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-8">
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