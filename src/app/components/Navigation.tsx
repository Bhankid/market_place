"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "/Home", label: "Home" },
    { href: "/category", label: "Category" },
    { href: "/post", label: "Post" },
    { href: "/messages", label: "Messages" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <nav className="glassmorphism sticky top-0 z-10 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-glow text-primary">
           FredMarket
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 text-sm hover:bg-white/10 transition duration-300"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
