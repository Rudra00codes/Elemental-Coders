"use client";
import React from "react";
import Image from "next/image";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Paper Cup Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the environmental and health impacts of paper cup usage
            and discover how you can make a difference.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Environmental Impact */}
          <div className="bg-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Environmental Impact
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Contributes to deforestation and habitat destruction
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Releases greenhouse gases during production
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Creates massive landfill waste
              </li>
            </ul>
          </div>

          {/* Health Risks */}
          <div className="bg-red-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Health Risks
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Contains harmful chemicals like BPA
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Plastic lining can leach into hot beverages
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Potential carcinogenic effects
              </li>
            </ul>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            The Numbers Don't Lie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500B+</div>
              <div className="text-gray-600">Paper cups used annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">20M</div>
              <div className="text-gray-600">Trees cut down yearly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100 Yrs</div>
              <div className="text-gray-600">Average decomposition time</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Make a Change?
          </h2>
          <p className="text-gray-600 mb-8">
            Join our community and start tracking your impact today.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
