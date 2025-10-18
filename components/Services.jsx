"use client";

import { User, Trophy, MessageCircle, Infinity, Users, Download } from "lucide-react";

export default function Services() {
  const benefits = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Crafted by Experienced 3D Artists",
      description: "Every project is handled by skilled artists with real studio experience — ensuring quality and precision in every detail."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "High-Quality Results, On Time",
      description: "We deliver polished, production-ready 3D assets with fast turnaround and attention to your project goals."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Fast Chat Support",
      description: "Need help? We're just a Quick Chat Away. Available 24/7/365."
    },
    {
      icon: <Infinity className="w-8 h-8" />,
      title: "Flexible Revisions",
      description: "We provide reasonable revisions until you're fully satisfied with the final output."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Teamwork",
      description: "Work directly with our artists in smooth, transparent workflow — from concepts to final render."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Ready-to-Use Files",
      description: "All assets are delivered in optimized formats for your engine, renderer, or pipeline."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Emoji Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
              Amazing Benefits
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Agency's service benefits
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 mb-2">Why Clients Choose Us</p>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the key reasons studios, brands, and creators trust our 3D team for their projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group"
            >
              {/* Icon */}
              <div className="mb-6 text-white group-hover:text-green-400 transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}