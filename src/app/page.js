import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Nav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Sustainable Solutions for a{" "}
              <span className="text-green-600">Better Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in reducing paper cup waste and creating a healthier environment
              for our campus community.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
                Get Started
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/track.svg"
                alt="Track Icon"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
            <p className="text-gray-600">
              Monitor your paper cup usage and see your environmental impact in real-time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/community.svg"
                alt="Community Icon"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
            <p className="text-gray-600">
              Connect with like-minded individuals and share sustainable practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/reward.svg"
                alt="Reward Icon"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
            <p className="text-gray-600">
              Get rewarded for your sustainable choices and inspire others.
            </p>
          </div>
        </div>

        {/* Impact Stats Section */}
        <div className="py-16 bg-green-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact So Far</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Cups Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100kg</div>
              <div className="text-gray-600">Plastic Waste Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₹50,000</div>
              <div className="text-gray-600">Money Saved</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
