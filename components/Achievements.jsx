"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function AchievementsSection() {
  const stats = [
    { value: "15+", label: "Happy clients" },
    { value: "20+", label: "Advanced Services" },
    { value: "8", label: "Pro Workers" },
    { value: "4.5", label: "Customer Rating" }
  ];

  return (
    <div className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Background Globe */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
        <div className="relative w-full h-full animate-spin-slow"> {/* <<< ADDED ANIMATION HERE */}
          {/* Dotted Globe Effect (Concentric Circles) */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-green-500/30"
                style={{
                  width: `${100 + i * 30}px`,
                  height: `${100 + i * 30}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>
          {/* Dots pattern */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(200)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
                Achievements
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              SO FAR CLIENTS
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              We've achieved a lot over the past year helping clients across the Globe.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
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

          {/* Right Content - Globe Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] animate-spin-slow"> {/* <<< ADDED ANIMATION HERE AS WELL */}
              {/* Large decorative circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border border-gray-800" />
              </div>
              {/* Inner circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-gray-800/50" />
              </div>
              {/* Core circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800" />
              </div>
              
              {/* Animated dots around circles */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => {
                  const angle = (i / 50) * Math.PI * 2;
                  const radius = 180 + Math.random() * 40;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-green-500 rounded-full animate-pulse"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animationDelay: `${i * 0.1}s`,
                        opacity: 0.3 + Math.random() * 0.4,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />
    </div>
  );
}