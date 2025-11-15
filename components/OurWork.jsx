"use client";

import { useState, useRef } from "react";
import { Code, Video, Users, Grid3x3, Palette, X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import render1 from "@/app/assest/render1.jpg";
import render2 from "@/app/assest/render2.jpg";
import render3 from "@/app/assest/render3.jpg";
import render4 from "@/app/assest/render4.jpg";
import render6 from "@/app/assest/render6.jpg";
import Product2 from "@/app/assest/Product2.jpg";
import Product3 from "@/app/assest/Product3.jpg";
import GameAssest2 from "@/app/assest/GameAssest2.jpg";
import GameAssest4 from "@/app/assest/GameAssest4.jpg";
import GameAssest6 from "@/app/assest/GameAssest6.jpg";
import GameAssest7 from "@/app/assest/GameAssest7.jpg";
import GameAssest8 from "@/app/assest/GameAssest8.jpg";

export default function OurWork() {
  const [selectedService, setSelectedService] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const videoRefs = useRef([]);

  const defaultImages = [render1, render2, render3, render4, GameAssest6, render6];
  const products = [
    { src: "/Product1.mp4", type: "video" },
    { src: Product2, type: "image" },
    { src: Product3, type: "image" },
    { src: GameAssest4, type: "image" },
    { src: "/Product7.mp4", type: "video" },
    { src: "/Product6.mp4", type: "video" },
  ];
  const gameAssests = [
    { src: "/GameAssest1.mp4", type: "video" },
    { src: GameAssest2, type: "image" },
    { src: GameAssest7, type: "image" },
    { src: GameAssest4, type: "image" },
    { src: GameAssest8, type: "image" },
    { src: GameAssest6, type: "image" },
  ];
  
  // Mixed media array with type indicators
  const motionMedia = [
    { src: "/motion1.mp4", type: "video" },
    { src: "/motion2.mp4", type: "video" },
    { src: "/motion3.mp4", type: "video" },
    { src: "/motion4.mp4", type: "video" },
    { src: "/motion5.mp4", type: "video" },
    { src: "/motion6.mp4", type: "video" },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Environment Design",
      description: "Immersive 3D environments and level-ready scenes with cinematic lighting and mood.",
      media: defaultImages.map(img => ({ src: img, type: "image" }))
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "3D Product Visualization",
      description: "High-quality product renders and animations for ads, packaging, and eCommerce.",
      media: products
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Game Props & Assets",
      description: "Optimized 3D props and assets crafted for game engines with perfect topology and PBR materials.",
      media: gameAssests
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "3D Animation & Motion",
      description: "Bring your models to life with smooth, expressive animation and dynamic motion renders.",
      media: motionMedia // Mixed images and videos
    },
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   title: "Character & Creature Modeling",
    //   description: "Stylized or realistic 3D characters, ready for animation and rigging.",
    //   media: defaultImages.map(img => ({ src: img, type: "image" }))
    // },
    // {
    //   icon: <Palette className="w-8 h-8" />,
    //   title: "Texturing & LookDev",
    //   description: "Physically accurate materials and stylized surfaces using Substance Painter and designer.",
    //   media: defaultImages.map(img => ({ src: img, type: "image" }))
    // }
  ];

  const handleVideoHover = (index, isHovering) => {
    const videoRef = videoRefs.current[index];
    if (videoRef) {
      if (isHovering) {
        videoRef.play().catch(err => console.log('Play failed:', err));
      } else {
        videoRef.pause();
      }
    }
  };

  const toggleMute = (index) => {
    setMutedVideos(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Browse Our Work Category
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Browse Services through Categories to find the Perfect What You Need
                </p>

                {/* CTA Button */}
                <Link href="/category">
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                    Browse All Categories →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Services Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedService(service)}
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

      {/* Modal Popup */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-green-400">
                  {selectedService.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-400 mt-1">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Media Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedService.media.map((mediaItem, index) => {
                  const isMuted = mutedVideos[index] !== false;
                  const isVideo = mediaItem.type === "video";
                  
                  return (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300 group"
                      onMouseEnter={() => isVideo && handleVideoHover(index, true)}
                      onMouseLeave={() => isVideo && handleVideoHover(index, false)}
                    >
                      {isVideo ? (
                        <>
                          {/* Video Badge */}
                          <div className="absolute top-3 left-3 z-10 bg-black/70 px-2 py-1 rounded-md">
                            <Video className="w-4 h-4 text-green-400" />
                          </div>

                          <video
                            ref={(el) => videoRefs.current[index] = el}
                            src={mediaItem.src}
                            className="w-full h-full object-cover"
                            loop
                            muted={isMuted}
                            playsInline
                            preload="metadata"
                            onError={(e) => {
                              console.error('Video error:', mediaItem.src);
                              e.target.style.display = 'none';
                            }}
                          >
                            Your browser does not support the video tag.
                          </video>

                          {/* Mute/Unmute Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute(index);
                            }}
                            className="absolute bottom-3 right-3 p-2 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4 text-white" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-green-400" />
                            )}
                          </button>

                          {/* Play indicator overlay */}
                         
                        </>
                      ) : (
                        <Image
                          src={mediaItem.src}
                          alt={`${selectedService.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Media Count Info */}
              <div className="mt-6 flex justify-between items-center text-sm text-gray-400">
                <span>
                  {selectedService.media.filter(m => m.type === "image").length} Images, {" "}
                  {selectedService.media.filter(m => m.type === "video").length} Videos
                </span>
                <span>Total: {selectedService.media.length} items</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}