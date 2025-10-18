"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function OurCourses() {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Star className="w-32 h-32 text-gray-600 fill-gray-700" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 rotate-45">
        <div className="w-40 h-40 border-l-4 border-t-4 border-gray-700" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Student Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {/* Avatar Group */}
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-black" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-black" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-black" />
          </div>
          
          {/* Text */}
          <span className="text-gray-300 text-sm font-medium">
            5,000+ Happy Students
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Ready to Make a Difference?
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Start with our Courses!
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Our Courses will help you learn the most valuable skills to help you make a difference in your Life.
        </p>

        {/* CTA Button */}
        <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105">
          Explore Our Courses →
        </Button>
      </div>

      {/* Additional Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
    </div>
  );
}