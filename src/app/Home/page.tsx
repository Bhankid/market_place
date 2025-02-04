"use client";
import { useState } from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Sample data for Recommended Items
const recommendedItems = [
  {
    id: 1,
    title: "iPhone X",
    description: "Latest model with advanced features",
    price: "GH₵500",
    rating: 4.9,
    image: "/ix.jpg",
    location: "Accra",
  },
  {
    id: 2,
    title: "Leather Jacket",
    description: "High-quality leather jacket",
    price: "GH₵200",
    rating: 4.7,
    image: "/lj.jpg",
    location: "Kumasi",
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    description: "True wireless earbuds with noise cancellation",
    price: "GH₵180",
    rating: 4.6,
    image: "/ebds.jpg",
    location: "Tamale",
  },
  {
    id: 4,
    title: "Coffee Maker",
    description: "Compact coffee maker for home use",
    price: "GH₵350",
    rating: 4.8,
    image: "/cfm.jpg",
    location: "Cape Coast",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Track your fitness goals with this smart device",
    price: "GH₵250",
    rating: 4.7,
    image: "/fnt.jpg",
    location: "Sunyani",
  },
  {
    id: 6,
    title: "Gaming Chair",
    description: "Ergonomic gaming chair for long hours of play",
    price: "GH₵600",
    rating: 4.9,
    image: "/gc.jpg",
    location: "Wa",
  },
];

// Sample data for Trending Items
const trendingItems = [
  {
    id: 7,
    title: "Wireless Headphones",
    description: "Noise-canceling headphones",
    price: "GH₵300",
    rating: 4.8,
    image: "/ebds.jpg",
    location: "Tamale",
  },
  {
    id: 8,
    title: "Gaming Laptop",
    description: "Powerful laptop for gaming",
    price: "GH₵1200",
    rating: 4.9,
    image: "/laptop.jpg",
    location: "Cape Coast",
  },
  {
    id: 9,
    title: "Smartwatch",
    description: "Feature-rich smartwatch with health tracking",
    price: "GH₵450",
    rating: 4.7,
    image: "/smartwatch.jpg",
    location: "Ho",
  },
  {
    id: 10,
    title: "Air Fryer",
    description: "Healthy cooking with minimal oil",
    price: "GH₵400",
    rating: 4.8,
    image: "/airf.jpg",
    location: "Koforidua",
  },
  {
    id: 11,
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass",
    price: "GH₵220",
    rating: 4.6,
    image: "/spk.jpg",
    location: "Takoradi",
  },
  {
    id: 12,
    title: "Electric Scooter",
    description: "Efficient and eco-friendly scooter",
    price: "GH₵800",
    rating: 4.9,
    image: "/scooter.jpg",
    location: "Accra",
  },
];

// Sample data for Top Sellers
const topSellers = [
  {
    id: 13,
    title: "Refrigerator",
    description: "Energy-efficient refrigerator with large capacity",
    price: "GH₵1500",
    rating: 4.9,
    image: "/rfg.jpg",
    location: "Kumasi",
  },
  {
    id: 14,
    title: "Blender",
    description: "Durable blender for smoothies and juices",
    price: "GH₵280",
    rating: 4.8,
    image: "/blnd.jpg",
    location: "Tamale",
  },
  {
    id: 15,
    title: "LED TV",
    description: "4K Ultra HD LED TV with smart features",
    price: "GH₵1000",
    rating: 4.7,
    image: "/tv.jpg",
    location: "Cape Coast",
  },
  {
    id: 16,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick cooking",
    price: "GH₵320",
    rating: 4.6,
    image: "/mcrv.jpg",
    location: "Sunyani",
  },
  {
    id: 17,
    title: "Lawn Mower",
    description: "Electric lawn mower for easy maintenance",
    price: "GH₵500",
    rating: 4.8,
    image: "/mower.jpg",
    location: "Wa",
  },
  {
    id: 18,
    title: "Vacuum Cleaner",
    description: "Powerful vacuum cleaner for all surfaces",
    price: "GH₵300",
    rating: 4.7,
    image: "/cln.jpg",
    location: "Ho",
  },
];

// Sample data for New Arrivals
const newArrivals = [
  {
    id: 19,
    title: "Air Purifier",
    description: "Keep your home clean with this air purifier",
    price: "GH₵350",
    rating: 4.9,
    image: "/airpurifier.jpg",
    location: "Koforidua",
  },
  {
    id: 20,
    title: "Instant Pot",
    description: "All-in-one cooker for fast cooking",
    price: "GH₵400",
    rating: 4.8,
    image: "/instantpot.jpg",
    location: "Takoradi",
  },
  {
    id: 21,
    title: "Projector",
    description: "Full HD projector for movies and presentations",
    price: "GH₵700",
    rating: 4.7,
    image: "/projector.jpg",
    location: "Accra",
  },
  {
    id: 22,
    title: "Robot Vacuum",
    description: "Automated vacuum cleaner for effortless cleaning",
    price: "GH₵600",
    rating: 4.6,
    image: "/robotvacuum.jpg",
    location: "Kumasi",
  },
  {
    id: 23,
    title: "Outdoor Tent",
    description: "Durable tent for camping adventures",
    price: "GH₵300",
    rating: 4.8,
    image: "/tent.jpg",
    location: "Tamale",
  },
  {
    id: 24,
    title: "Electric Grill",
    description: "Indoor grill for healthy cooking",
    price: "GH₵450",
    rating: 4.7,
    image: "/grill.jpg",
    location: "Cape Coast",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  // Filter logic for all sections
  const filteredRecommendedItems = recommendedItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!region || item.location.toLowerCase() === region.toLowerCase())
  );

  const filteredTrendingItems = trendingItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!region || item.location.toLowerCase() === region.toLowerCase())
  );

  const filteredTopSellers = topSellers.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!region || item.location.toLowerCase() === region.toLowerCase())
  );

  const filteredNewArrivals = newArrivals.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!region || item.location.toLowerCase() === region.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Welcome to FredMarket
      </h1>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Keyword Search */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>

        {/* Region Search */}
        <div className="relative md:w-1/3">
          <input
            type="text"
            placeholder="Filter by region..."
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-3 pl-10 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          />
          <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Recommended Items Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-4">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecommendedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              {/* Item Image */}
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg"
                />
              </div>

              {/* Item Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={i < item.rating ? "currentColor" : "none"}
                        className="w-4 h-4"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    ({item.rating})
                  </span>
                </div>
                <p className="text-lg font-bold text-primary">{item.price}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Items Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrendingItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              {/* Item Image */}
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg"
                />
              </div>

              {/* Item Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={i < item.rating ? "currentColor" : "none"}
                        className="w-4 h-4"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    ({item.rating})
                  </span>
                </div>
                <p className="text-lg font-bold text-primary">{item.price}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Sellers Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-4">Top Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTopSellers.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              {/* Item Image */}
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg"
                />
              </div>

              {/* Item Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={i < item.rating ? "currentColor" : "none"}
                        className="w-4 h-4"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    ({item.rating})
                  </span>
                </div>
                <p className="text-lg font-bold text-primary">{item.price}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-4">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNewArrivals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              {/* Item Image */}
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg"
                />
              </div>

              {/* Item Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={i < item.rating ? "currentColor" : "none"}
                        className="w-4 h-4"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    ({item.rating})
                  </span>
                </div>
                <p className="text-lg font-bold text-primary">{item.price}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
