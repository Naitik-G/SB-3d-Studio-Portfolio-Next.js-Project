"use client";

import { Code, Video, Users, Grid3x3, Palette, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurWork() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Environment Design",
      description: "Immersive 3D environments and level-ready scenes with cinematic lighting and mood."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "3D Product Visualization",
      description: "High-quality product renders and animations for ads, packaging, and eCommerce."
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Game Props & Assets",
      description: "Optimized 3D props and assets crafted for game engines with perfect topology and PBR materials."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "3D Animation & Motion",
      description: "Bring your models to life with smooth, expressive animation and dynamic motion renders."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Character & Creature Modeling",
      description: "Stylized or realistic 3D characters, ready for animation and rigging."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Texturing & LookDev",
      description: "Physically accurate materials and stylized surfaces using Substance Painter and designer."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Our Services
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Browse Section */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                {/* Menu Icon */}
             

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Browse Our Work Category
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Browse Services through Categories to find the Perfect What You Need
                </p>

                {/* CTA Button */}
                <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                  Browse All Categories →
                </Button>
              </div>
            </div>

            {/* Right Side - Services Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="mb-6 text-white group-hover:text-green-400 transition-colors duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}