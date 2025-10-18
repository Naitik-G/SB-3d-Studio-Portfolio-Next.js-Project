"use client";

import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error404Page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Decorative 3D Objects */}
      <div className="absolute top-20 right-32 w-32 h-32 opacity-40 blur-sm">
        <div className="w-full h-full rotate-45 bg-gradient-to-br from-gray-600 to-gray-800" />
      </div>
      <div className="absolute top-1/3 right-24 w-40 h-40 opacity-50">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl" />
      </div>
      <div className="absolute bottom-20 right-20 w-48 h-48 opacity-50">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-8 border-gray-700 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Warning Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-white rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Error Badge */}
        <div className="mb-8">
          <span className="text-green-400 text-sm font-bold tracking-wider uppercase">
            ERROR 404 - PAGE NOT FOUND
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Hey there, Sherlock! Unfortunately,<br />
          this page is not the{" "}
          <span className="text-gray-500">elusive clue</span> you<br />
          were hunting for.
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
          It seems to have vanished into thin air. But don't lose hope! Keep exploring the vast web of mysteries and you might stumble upon the treasure you seek.
        </p>

        {/* Back Home Button */}
        <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          Back Home
        </Button>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
} 