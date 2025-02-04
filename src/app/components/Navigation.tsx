"use client";
import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  PencilSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

// Custom CSS for smooth bounce effect
const bounceAnimation = `
@keyframes smoothBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px); 
  }
}
.smooth-bounce {
  animation: smoothBounce 0.8s ease-in-out infinite;
}
`;

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { href: "/Home", label: "Home", icon: <HomeIcon className="w-8 h-8" /> },
    {
      href: "/category",
      label: "Category",
      icon: <BookOpenIcon className="w-8 h-8" />,
    },
    {
      href: "/post",
      label: "Post",
      icon: <PencilSquareIcon className="w-8 h-8" />,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
    },
    {
      href: "/profile",
      label: "My Profile",
      icon: <UserCircleIcon className="w-8 h-8" />,
    },
  ];

  return (
    <>
      {/* Inject custom CSS for smooth bounce */}
      <style>{bounceAnimation}</style>

      <nav
        className="glassmorphism fixed md:top-4 md:left-0 md:right-0 md:z-50 md:mx-auto md:max-w-5xl md:rounded-lg md:py-4 md:px-4 md:shadow-md md:backdrop-blur-lg bottom-0 left-0 right-0 z-50 mx-auto max-w-full rounded-none py-2 px-2 shadow-none backdrop-blur-none"
        style={{ height: "80px" }}
      >
        {/* Centered Dock */}
        <div className="flex justify-center items-center space-x-10 md:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center text-primary transition duration-300"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Icon (With Smooth Bounce Effect) */}
              <span
                className={`text-4xl font-bold ${
                  hoveredItem === item.label
                    ? "smooth-bounce text-primary/80"
                    : "text-primary"
                }`}
              >
                {item.icon}
              </span>

              {/* Label (Visible on hover) */}
              {hoveredItem === item.label && (
                <span className="absolute bottom-[-50px] text-sm font-medium bg-white/80 px-4 py-2 rounded-md shadow-md">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
