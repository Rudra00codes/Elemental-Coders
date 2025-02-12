"use client";
import React from "react";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover eco-friendly alternatives to paper cups and learn how to
            implement sustainable practices in your daily life.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Recommended Alternatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reusable Coffee Cup */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/products/bamboo-cup.jpg"
                  alt="Bamboo Coffee Cup"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bamboo Coffee Cup</h3>
              <p className="text-gray-600 mb-4">
                Eco-friendly bamboo cup with silicon lid and grip
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">₹299</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Stainless Steel Tumbler */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/products/steel-tumbler.jpg"
                  alt="Stainless Steel Tumbler"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Steel Tumbler</h3>
              <p className="text-gray-600 mb-4">
                Double-walled stainless steel tumbler with leak-proof lid
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">₹499</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Glass Keep Cup */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/products/glass-cup.jpg"
                  alt="Glass Keep Cup"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Glass Keep Cup</h3>
              <p className="text-gray-600 mb-4">
                Durable glass cup with cork band and secure lid
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">₹399</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Initiatives */}
        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Campus Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Refill Stations</h3>
              <p className="text-gray-600 mb-4">
                Find water refill stations across campus to reduce the need for
                disposable cups.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                View Locations →
              </button>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cup Library</h3>
              <p className="text-gray-600 mb-4">
                Borrow reusable cups for events and return them when done.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Sustainable Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bring Your Own</h3>
              <p className="text-gray-600">
                Make it a habit to carry your reusable cup wherever you go.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay & Sip</h3>
              <p className="text-gray-600">
                Choose to enjoy your drink in-house using ceramic cups.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
              <p className="text-gray-600">
                Encourage friends and colleagues to adopt sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-gray-600 mb-8">
            Join our community and start your sustainable journey today.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
