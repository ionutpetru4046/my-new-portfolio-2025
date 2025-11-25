"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Normal nav links */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Services
                </button>

                {/* Dropdown Menu */}
                <div
                  className="
                        absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 
                        border border-gray-200 dark:border-gray-700 
                        rounded-lg shadow-lg z-50
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        transition-all duration-200
                      "
                >
                  <button
                    onClick={() => router.push("/services/web-development")}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    Web Development
                  </button>
                  <button
                    onClick={() => router.push("/services/mobile-apps")}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    Mobile Apps
                  </button>
                  <button
                    onClick={() => router.push("/services/ui-ux-design")}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    UI/UX Design
                  </button>
                  <button
                    onClick={() => router.push("/services/consulting")}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    Consulting
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.name}
            </button>
          ))}

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <span>Services</span>
              {/* Arrow icon */}
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Animated submenu */}
            <div
              className={`
                overflow-hidden transition-all duration-300 
                ${servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="ml-4 space-y-1 mt-1">
                <button
                  onClick={() => router.push("/services/web-development")}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Web Development
                </button>
                <button
                  onClick={() => router.push("/services/mobile-apps")}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Mobile Apps
                </button>
                <button
                  onClick={() => router.push("/services/ui-ux-design")}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  UI/UX Design
                </button>
                <button
                  onClick={() => router.push("/services/consulting")}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Consulting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
