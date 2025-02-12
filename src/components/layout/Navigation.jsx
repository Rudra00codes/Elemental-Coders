"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="EcoCup Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-semibold text-green-600">EcoCup</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/learn"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/track"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Track & Rewards
            </Link>
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/community"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Community
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/learn"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
          >
            Learn
          </Link>
          <Link
            href="/track"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
          >
            Track & Rewards
          </Link>
          <Link
            href="/solutions"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
          >
            Solutions
          </Link>
          <Link
            href="/community"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
          >
            Community
          </Link>
          <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
