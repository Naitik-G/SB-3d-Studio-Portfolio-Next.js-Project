"use client";

import { Monitor, Gamepad2, Video, Users, Brush, TrendingUp } from "lucide-react";

export default function WorkCategoryPage() {
  const categories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "3D Product Visualization",
      description: "High-quality product renders and animations for ads, packaging, and eCommerce."
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
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
      icon: <Brush className="w-8 h-8" />,
      title: "Environment Design",
      description: "Immersive 3D environments and level-ready scenes with cinematic lighting and mood."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Texturing & LookDev",
      description: "Physically accurate materials and stylized surfaces using Substance Painter and Designer."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative 3D Objects */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-20">
        <div className="w-full h-full rotate-45 bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>
      <div className="absolute bottom-20 right-32 w-40 h-40 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>
      <div className="absolute bottom-32 left-20 w-20 h-20 opacity-20 rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <span>→</span>
          <span className="text-white">Work Category</span>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Browse Work by Category
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Here you can browse all our Courses through their categories, to easily find what you're looking for.
          </p>
        </div>

        {/* Filter/Dropdown */}
        <div className="mb-12">
          <select className="bg-black border border-gray-800 text-white px-6 py-3 rounded-lg hover:border-gray-700 transition-colors cursor-pointer focus:outline-none focus:border-green-500">
            <option>All Categories</option>
            <option>3D Product Visualization</option>
            <option>Game Props & Assets</option>
            <option>3D Animation & Motion</option>
            <option>Character & Creature Modeling</option>
            <option>Environment Design</option>
            <option>Texturing & LookDev</option>
          </select>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 text-white group-hover:text-green-400 transition-colors duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}