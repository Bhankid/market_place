"use client";

import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log("Login with:", email);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md glassmorphism p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary text-glow">
          Sign In / Sign Up
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
          >
            Sign In / Sign Up
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-sm mb-4">Or sign in with:</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
              Google
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
              Facebook
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md transition duration-300">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
