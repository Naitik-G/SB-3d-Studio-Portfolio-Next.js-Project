"use client";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const stats = [
    { value: "5000+", label: "Happy Learners" },
    { value: "20+", label: "Advanced Courses" },
    { value: "7", label: "Pro Teachers" },
    { value: "4.9", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative 3D Objects */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-900 shadow-2xl" />
      </div>
      <div className="absolute top-32 left-24 w-24 h-24 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black" />
      </div>
      <div className="absolute top-32 right-32 w-40 h-40 opacity-20 rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>
      <div className="absolute bottom-1/3 right-24 w-48 h-48 opacity-30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-4 border-gray-700 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <span>→</span>
          <span className="text-white">About</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            We're a Team of Passionate People,<br />
            Bringing you Value Everyday!
          </h1>
          <p className="text-gray-400 text-lg">
            Want to Know a little About us? Let us tell you.
          </p>
        </div>

        {/* Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              We're on Our Journey to help people reach their goals!
            </h2>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed">
              Luma embarks on a transformative quest to empower individuals in achieving their aspirations. We pave the path towards success. Our dedicated team guides and supports you through a personalized journey, unlocking your potential. With Luma at your side, you'll conquer obstacles and reach new horizons.
            </p>
          </div>
        </div>

        {/* Statistical Evaluation Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Dotted Globe Pattern */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10">
            <div className="relative w-full h-full">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-green-500/30"
                  style={{
                    width: `${80 + i * 25}px`,
                    height: `${80 + i * 25}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
              <div className="absolute inset-0">
                {[...Array(100)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-500 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
                Achievements
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Statistical Evaluation
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-12 max-w-xl">
              We've achieved a lot over the past year helping people across the Globe.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
              More About Us →
            </Button>
          </div>
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}