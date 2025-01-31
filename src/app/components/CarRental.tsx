"use client"

import React, { useState } from 'react';

const CarRental: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      type: 'economy',
      image: '/assets/corolla.jpg',
      features: ['5 Seats', 'Automatic', 'Air Conditioning'],
      price: '$50/day',
    },
    {
      id: 2,
      name: 'BMW X5',
      type: 'luxury',
      image: '/assets/bmw.jpg',
      features: ['5 Seats', 'Automatic', 'Premium Sound System'],
      price: '$120/day',
    },
    {
      id: 3,
      name: 'Ford Mustang',
      type: 'sports',
      image: '/assets/ford.webp',
      features: ['2 Seats', 'Manual', 'Sport Mode'],
      price: '$90/day',
    },
  ];

  const filteredCars = filter === 'all' ? cars : cars.filter((car) => car.type === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#010155] mb-4">Car Rentals</h2>
          <p className="text-lg text-gray-700">
            Explore our wide range of cars and find the perfect one for your journey.
          </p>
        </div>

        {/* Filter Options */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg ${
              filter === 'all'
                ? 'bg-[#010155] text-white'
                : 'bg-white text-[#010155] border border-[#010155]'
            } hover:bg-blue-700 hover:text-white transition duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('economy')}
            className={`px-6 py-2 rounded-lg ${
              filter === 'economy'
                ? 'bg-[#010155] text-white'
                : 'bg-white text-[#010155] border border-[#010155]'
            } hover:bg-blue-700 hover:text-white transition duration-300`}
          >
            Economy
          </button>
          <button
            onClick={() => setFilter('luxury')}
            className={`px-6 py-2 rounded-lg ${
              filter === 'luxury'
                ? 'bg-[#010155] text-white'
                : 'bg-white text-[#010155] border border-[#010155]'
            } hover:bg-blue-700 hover:text-white transition duration-300`}
          >
            Luxury
          </button>
          <button
            onClick={() => setFilter('sports')}
            className={`px-6 py-2 rounded-lg ${
              filter === 'sports'
                ? 'bg-[#010155] text-white'
                : 'bg-white text-[#010155] border border-[#010155]'
            } hover:bg-blue-700 hover:text-white transition duration-300`}
          >
            Sports
          </button>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-[#010155] mb-4">{car.name}</h3>
              <ul className="text-gray-700 mb-6">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 mb-2">
                    <span className="text-[#010155]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-[#010155] mb-6">{car.price}</p>
              <div className="flex space-x-4">
                <button className="bg-[#010155] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Book Now
                </button>
                <button className="bg-transparent border border-[#010155] text-[#010155] font-semibold py-2 px-4 rounded-lg hover:bg-[#010155] hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRental;