"use client";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Extended list of categories
const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Garden" },
  { id: 4, name: "Sports & Outdoors" },
  { id: 5, name: "Books & Magazines" },
  { id: 6, name: "Toys & Games" },
  { id: 7, name: "Beauty & Personal Care" },
  { id: 8, name: "Automotive" },
  { id: 9, name: "Health & Wellness" },
];

// Sample items with images and Ghanaian cities
const items = [
  {
    id: 1,
    title: "iPhone 12",
    description: "Great condition, 1 year old",
    category_id: 1,
    location: "Accra",
    price: "GH₵700",
    rating: 4.8,
    image: "/i12.jpg",
  },
  {
    id: 2,
    title: "Nike Air Max",
    description: "Size 10, barely worn",
    category_id: 2,
    location: "Kumasi",
    price: "GH₵120",
    rating: 4.6,
    image: "/nk.jpg",
  },
  {
    id: 3,
    title: "Sofa",
    description: "Comfortable 3-seater sofa",
    category_id: 3,
    location: "Tamale",
    price: "GH₵500",
    rating: 4.7,
    image: "/sofa.jpg",
  },
  {
    id: 4,
    title: "Tennis Racket",
    description: "Professional grade racket",
    category_id: 4,
    location: "Cape Coast",
    price: "GH₵150",
    rating: 4.9,
    image: "/tns.jpg",
  },
  {
    id: 5,
    title: "Harry Potter Book Set",
    description: "Complete set, like new",
    category_id: 5,
    location: "Sunyani",
    price: "GH₵80",
    rating: 4.5,
    image: "/hpb.jpg",
  },
  {
    id: 6,
    title: "LEGO Star Wars Set",
    description: "Sealed box, never opened",
    category_id: 6,
    location: "Takoradi",
    price: "GH₵100",
    rating: 4.8,
    image: "/sw.jpg",
  },
  {
    id: 7,
    title: "Face Serum",
    description: "High-quality anti-aging serum",
    category_id: 7,
    location: "Ho",
    price: "GH₵50",
    rating: 4.7,
    image: "/fs.jpg",
  },
  {
    id: 8,
    title: "Car Battery",
    description: "Fits most vehicles, brand new",
    category_id: 8,
    location: "Koforidua",
    price: "GH₵120",
    rating: 4.6,
    image: "/cb.jpg",
  },
  {
    id: 9,
    title: "Yoga Mat",
    description: "Non-slip, durable mat",
    category_id: 9,
    location: "Wa",
    price: "GH₵30",
    rating: 4.9,
    image: "/ym.jpg",
  },
];

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category_id === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!location || item.location.toLowerCase() === location.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Explore Categories
      </h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>

        {/* Location Input */}
        <div className="relative md:w-1/3">
          <input
            type="text"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 pl-10 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          />
          <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>

        {/* Category Dropdown */}
        <div className="md:w-1/3 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
            className={`w-full py-3 px-4 rounded-md flex justify-between items-center ${
              selectedCategory
                ? "bg-primary text-background"
                : "bg-white text-gray-700"
            } shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300`}
          >
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name
              : "All Categories"}
            <ChevronDownIcon className="h-5 w-5 ml-2" />
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
              onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsDropdownOpen(false); // Close dropdown after selection
                  }}
                  className="block w-full py-2 px-4 hover:bg-gray-100 text-left"
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
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
              <h2 className="text-xl font-bold mb-2 text-primary">
                {item.title}
              </h2>
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

      {/* Load More Button */}
      {filteredItems.length > 0 && (
        <div className="flex justify-center">
          <button className="py-3 px-6 bg-primary text-background font-bold rounded-md shadow-md hover:shadow-lg transition duration-300">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
