"use client";
import { useState } from "react";
import Image from "next/image";

export default function Profile() {
  const [name, setName] = useState("Dev Fred");
  const [email, setEmail] = useState("devfred@example.com");
  const [bio, setBio] = useState(
    "I love buying and selling on this marketplace!"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement profile update logic here
    console.log("Updating profile:", { name, email, bio });
  };

  return (
    <div className="max-w-2xl mx-auto bg-blue-50">
      {/* Profile Header */}
      <header className="flex items-center justify-between p-4 bg-white/10 rounded-lg shadow-md mb-8">
        {/* Profile Icon */}
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16">
            <Image
              src="/self.jpg"
              alt="Profile Icon"
              fill
              style={{ objectFit: "cover", borderRadius: "50%" }}
              className="rounded-full border-2 border-primary"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">{name}</h1>
            <p className="text-sm text-gray-600">{email}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button
          type="button"
          className="bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
        >
          Edit Profile
        </button>
      </header>

      {/* Profile Sections */}
      <div className="space-y-8">
        {/* My Ads Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">My Ads</h2>
          <ul className="space-y-4">
            <li className="bg-white/10 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-bold text-primary">iPhone 12 Pro</h3>
              <p className="text-sm text-gray-600">Price: GH₵700</p>
            </li>
            <li className="bg-white/10 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-bold text-primary">Leather Jacket</h3>
              <p className="text-sm text-gray-600">Price: GH₵200</p>
            </li>
          </ul>
        </section>

        {/* My Clients Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">My Clients</h2>
          <ul className="space-y-4">
            <li className="bg-white/10 p-4 rounded-md shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-primary">Client A</h3>
                <p className="text-sm text-gray-600">
                  Last Interaction: 2 days ago
                </p>
              </div>
              <button className="bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300">
                View Details
              </button>
            </li>
            <li className="bg-white/10 p-4 rounded-md shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-primary">Client B</h3>
                <p className="text-sm text-gray-600">
                  Last Interaction: 5 days ago
                </p>
              </div>
              <button className="bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300">
                View Details
              </button>
            </li>
          </ul>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Notifications
          </h2>
          <ul className="space-y-4">
            <li className="bg-white/10 p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-700">New message from Client A</p>
              <p className="text-xs text-gray-500">Received 2 hours ago</p>
            </li>
            <li className="bg-white/10 p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-700">Your ad has been approved</p>
              <p className="text-xs text-gray-500">Received 1 day ago</p>
            </li>
          </ul>
        </section>

        {/* Performance Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Performance</h2>
          <div className="bg-white/10 p-4 rounded-md shadow-sm">
            <p className="text-sm text-gray-600">
              Total Sales: GH₵5,000 | Total Ads Posted: 15
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Average Rating: ⭐⭐⭐⭐⭐ (4.8/5)
            </p>
          </div>
        </section>

        {/* My Balance Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">My Balance</h2>
          <div className="bg-white/10 p-4 rounded-md shadow-sm">
            <p className="text-xl font-bold text-primary">GH₵2,500</p>
            <button className="bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300 mt-4">
              Withdraw Funds
            </button>
          </div>
        </section>

        {/* Edit Profile Form */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Edit Profile</h2>
          <form
            onSubmit={handleSubmit}
            className="glassmorphism p-8 rounded-lg space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
            >
              Update Profile
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
