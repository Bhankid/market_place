"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Garden" },
  { id: 4, name: "Sports & Outdoors" },
];

const items = [
  {
    id: 1,
    title: "iPhone 12",
    description: "Great condition, 1 year old",
    category_id: 1,
    location: "New York",
  },
  {
    id: 2,
    title: "Nike Air Max",
    description: "Size 10, barely worn",
    category_id: 2,
    location: "Los Angeles",
  },
  {
    id: 3,
    title: "Sofa",
    description: "Comfortable 3-seater sofa",
    category_id: 3,
    location: "Chicago",
  },
  {
    id: 4,
    title: "Tennis Racket",
    description: "Professional grade racket",
    category_id: 4,
    location: "Miami",
  },
];

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category_id === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!location || item.location.toLowerCase() === location.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary text-glow">
        Categories
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 glassmorphism"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
        </div>
        <div className="relative md:w-1/3">
          <input
            type="text"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 pl-10 glassmorphism"
          />
          <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              setSelectedCategory(
                category.id === selectedCategory ? null : category.id
              )
            }
            className={`p-2 rounded-md transition duration-300 ${
              selectedCategory === category.id
                ? "bg-primary text-background"
                : "glassmorphism hover:bg-white/20"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glassmorphism p-4 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <h2 className="text-xl font-bold mb-2 text-primary">
              {item.title}
            </h2>
            <p className="mb-2">{item.description}</p>
            <p className="text-sm text-primary/80">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
