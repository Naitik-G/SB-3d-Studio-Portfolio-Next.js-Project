"use client";

import { useState } from "react";
import { Zap, Facebook, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Decorative 3D Objects */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-900 rounded-[30%] rotate-45 shadow-2xl" />
      </div>
      <div className="absolute top-32 left-32 w-32 h-32 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black border-4 border-gray-600" />
      </div>
      <div className="absolute top-20 right-20 w-48 h-48 opacity-40 rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 clip-path-triangle" />
      </div>
      <div className="absolute bottom-20 left-20 w-56 h-56 opacity-40">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-900 transform rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 w-64 h-64 opacity-50">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-8 border-gray-700 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-black text-3xl font-bold">fi</div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-6 py-3 mb-8">
          <Zap className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">
            Amazing Courses Coming Your Way!
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Ready to Revolutionize Your Learning?{" "}
          <span className="text-gray-500">Join the Luma Waitlist Today!</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          We're developing a platform that will enhance your learning experience. Our courses cover various topics in the digital space and are taught by professional teachers. You'll learn a lot quickly. Don't miss out! Sign up for the waitlist now!
        </p>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 px-6 py-6 text-base rounded-xl focus:border-gray-700 focus:ring-gray-700"
          />
          <Button
            onClick={handleSubmit}
            className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg whitespace-nowrap"
          >
            Join Waitlist →
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-black" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-black" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-black" />
            </div>
            <span className="text-gray-300 text-sm">
              <span className="font-semibold text-white">Join 2,000+</span> others who signed up
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-500 text-sm">
          <span>© 2024 Luma Template for Framer • </span>
          <a href="#" className="hover:text-white transition-colors underline">
            Click to Go Back Home
          </a>
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}