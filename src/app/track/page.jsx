"use client";
import React from "react";
import Image from "next/image";

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Impact & Earn Rewards
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your paper cup usage, see your environmental impact, and earn
            rewards for making sustainable choices.
          </p>
        </div>

        {/* Personal Stats */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Your Impact Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">23</div>
              <div className="text-gray-600">Cups Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2.3kg</div>
              <div className="text-gray-600">CO2 Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₹460</div>
              <div className="text-gray-600">Money Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">120</div>
              <div className="text-gray-600">Points Earned</div>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Available Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Coffee</h3>
              <p className="text-gray-600 mb-4">
                Get a free coffee at the campus café
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">100 points</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  Redeem
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plant a Tree</h3>
              <p className="text-gray-600 mb-4">
                We'll plant a tree in your name
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">200 points</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  Redeem
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-friendly Kit</h3>
              <p className="text-gray-600 mb-4">
                Get a sustainable living starter kit
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">500 points</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Campus Leaderboard
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🥇</span>
                <span className="font-semibold">Sarah M.</span>
              </div>
              <span className="text-green-600 font-semibold">520 points</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🥈</span>
                <span className="font-semibold">John D.</span>
              </div>
              <span className="text-green-600 font-semibold">480 points</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🥉</span>
                <span className="font-semibold">Emily R.</span>
              </div>
              <span className="text-green-600 font-semibold">450 points</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
