"use client"

import Image from 'next/image';
import { useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { BsFillBookmarkFill } from 'react-icons/bs';

const locations = [
  {
    name: 'Bali, Indonesia',
    imageUrl: '/assets/1.jpg',
    places: 'Over 500 places',
    price: 'Start from $25-$1,000 night',
    rating: 5.0,
  },
  {
    name: 'Paris, France',
    imageUrl: '/assets/2.jpg',
    places: 'Over 500 places',
    price: 'Start from $100-$4,000 night',
    rating: 4.8,
  },
  {
    name: 'Tokyo, Japan',
    imageUrl: '/assets/3.webp',
    places: 'Over 1,000 places',
    price: 'Start from $80-$3,500 night',
    rating: 4.7,
  },
  {
    name: 'Rome, Italy',
    imageUrl: '/assets/1.jpg',
    places: 'Over 600 places',
    price: 'Start from $150-$4,000 night',
    rating: 4.9,
  },
  {
    name: 'Rome, Italy',
    imageUrl: '/assets/1.jpg',
    places: 'Over 600 places',
    price: 'Start from $150-$4,000 night',
    rating: 4.9,
  },
];

export default function ExploreWorld() {
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className="p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className='container max-w-7xl mx-auto px-6'>

       
      <div className="mb-8 ">
        <h2 className="text-3xl font-bold">Explore the world</h2>
        <div className="flex justify-between gap-4 mt-4">
            <div className='flex gap-4'>
          {['Filters', 'Nearby', 'Popular', 'Recommendation', 'New'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 ${
                selectedFilter === filter ? 'bg-blue-500' : ''
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
          </div>
          <a href="" className='px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600'>See more</a>
        </div>
      </div>

      <div className="flex scrollbar-hide gap-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative"
          >
            <div className="relative w-full h-48">
              <Image
                src={location.imageUrl}
                alt={location.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{location.name}</h3>
              <p className="text-sm text-gray-300">{location.places}</p>
              <p className="mt-1 text-sm text-gray-400">{location.price}</p>
              <div className="flex items-center mt-2">
                <FiStar className="text-yellow-400" />
                <span className="ml-1 font-medium">{location.rating}</span>
              </div>
              <button className="absolute top-4 right-4 text-gray-300 hover:text-yellow-400">
                <BsFillBookmarkFill />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
