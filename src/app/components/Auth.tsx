"use client";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log("Login with:", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">
          Get Started
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary/90 transition duration-300"
          >
            Sign In / Sign Up
          </button>

          {/* Forgot Password Link */}
          <div className="text-center text-sm text-gray-600">
            <a
              href="#"
              className="text-primary hover:underline focus:outline-none focus:underline"
            >
              Forgot your password?
            </a>
          </div>
        </form>

        {/* Social Login Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Or sign in with:</p>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
            {/* Google Button */}
            <button
              className="flex items-center justify-center w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              style={{ color: "#fff", backgroundColor: "#ea4335" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-12c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
              </svg>
              Google
            </button>

            {/* Facebook Button */}
            <button
              className="flex items-center justify-center w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              style={{ color: "#fff", backgroundColor: "#1877f2" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.847 3.477 8.877 8 10v-8h-3v-4h3v-2c0-3.804 3.196-7 7-7s7 3.196 7 7v2h-3v4h3v8z" />
              </svg>
              Facebook
            </button>

            {/* GitHub Button */}
            <button
              className="flex items-center justify-center w-full md:w-auto bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              style={{ color: "#fff", backgroundColor: "#24292f" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.456 9.843 8.203 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.548 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
