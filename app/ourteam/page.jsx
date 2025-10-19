"use client";

import { Heart, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import  TeamMember1  from "@/app/assest/TeamMember1.jpg"
import  TeamMember2  from "@/app/assest/TeamMember2.jpg"
import  TeamMember3  from "@/app/assest/TeamMember3.jpg"
import  TeamMember4  from "@/app/assest/TeamMember4.jpg"
import  TeamMember5  from "@/app/assest/TeamMember5.jpg"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Mahaveer Gurjar",
      role: "TECHNICAL ARTIST",
      image: TeamMember1, // Replace with actual image paths
      description: "Bridging art and technology. Finesse seamless workflows, optimization, and integration across engines like Unreal and Unity — keeping visuals beautiful and efficient.",
      color: "from-orange-400 to-yellow-500"
    },
    {
      name: "Sarthak Bhagat",
      role: "3D ARTIST/ TEXTURE ARTIST",
      image: TeamMember2,
      description: "Mastered in material and layout. They use Substance Painter, Designer, and Photoshop to create realistic or stylized surfaces that make every object feel tangible.",
      color: "from-red-900 to-red-700"
    },
    {
      name: "Om Gawas",
      role: "3D GENERALIST",
      image: TeamMember3,
      description: "The backbone of every project — building detailed models, props, and environments that define the visual identity of our worlds. Every polygon tells a story!",
      color: "from-teal-600 to-teal-800"
    },
    {
      name: "Jayden Fernandes",
      role: "3D ARTIST",
      image: TeamMember4,
      description: "The backbone of every project — building detailed models, props, and environments that define the visual identity of our worlds. Every polygon tells a story!",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "David Johnson",
      role: "CUSTOMER SUPPORT SPECIALIST",
      image: TeamMember5,
      description: "Provides excellent support and assistance to customers with course-related inquiries.",
      color: "from-orange-700 to-orange-900"
    },
   
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Heart Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase">
              Our Team
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Meet the Team, that brings you Magic!
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team, always by your side, bringing you valuable resources and support every single day. We're here to help you thrive.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-300 group"
            >
              {/* Image Container with Gradient */}
              <div className={`relative h-64 bg-gradient-to-br ${member.color} overflow-hidden`}>
                {/* Placeholder for team member image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {member.name.charAt(0)}
                </div>
                
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
               
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                {/* Role Badge */}
                <div className="inline-block mb-4">
                  <span className="text-green-400 text-xs font-bold tracking-wider uppercase">
                    {member.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {/* About Button */}
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                    About {member.name.split(' ')[0]} →
                  </Button>

                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}