"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import render1 from "@/app/assest/render1.jpg";
import render2 from "@/app/assest/render2.jpg";
import render3 from "@/app/assest/render3.jpg";
import render4 from "@/app/assest/render4.jpg";
import render5 from "@/app/assest/render5.jpg";
import render6 from "@/app/assest/render6.jpg";
import render7 from "@/app/assest/render7.jpg";
import render8 from "@/app/assest/render8.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AutoScrollGallery() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Mobile horizontal scroll
      const topRow = topRowRef.current;
      const bottomRow = bottomRowRef.current;

      let topScrollPos = 0;
      let bottomScrollPos = 0;
      const scrollSpeed = 1;

      const autoScroll = () => {
        if (topRow && bottomRow) {
          // Top row scrolls left
          topScrollPos += scrollSpeed;
          if (topScrollPos >= topRow.scrollWidth / 2) {
            topScrollPos = 0;
          }
          topRow.scrollLeft = topScrollPos;

          // Bottom row scrolls right
          bottomScrollPos -= scrollSpeed;
          if (bottomScrollPos <= -bottomRow.scrollWidth / 2) {
            bottomScrollPos = 0;
          }
          bottomRow.scrollLeft = bottomRow.scrollWidth / 2 + bottomScrollPos;
        }
      };

      const intervalId = setInterval(autoScroll, 20);
      return () => clearInterval(intervalId);
    } else {
      // Desktop vertical scroll
      const leftColumn = leftColumnRef.current;
      const rightColumn = rightColumnRef.current;

      let leftScrollPos = 0;
      let rightScrollPos = 0;
      const scrollSpeed = 1;

      const autoScroll = () => {
        if (leftColumn && rightColumn) {
          leftScrollPos += scrollSpeed;
          if (leftScrollPos >= leftColumn.scrollHeight / 2) {
            leftScrollPos = 0;
          }
          leftColumn.scrollTop = leftScrollPos;

          rightScrollPos -= scrollSpeed;
          if (rightScrollPos <= -rightColumn.scrollHeight / 2) {
            rightScrollPos = 0;
          }
          rightColumn.scrollTop = rightColumn.scrollHeight / 2 + rightScrollPos;
        }
      };

      const intervalId = setInterval(autoScroll, 20);
      return () => clearInterval(intervalId);
    }
  }, [isMobile]);

  const leftImages = [render1, render6, render3, render8];
  const rightImages = [render5, render2, render7, render4];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-xl space-y-8">
          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Bring Your Ideas to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Life in 3D
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">
            We create stunning 3D models, environments, and product renders for
            studios, brands, and agencies. From concept to final render — we
            bring your vision to reality.
          </p>

          {/* CTA Button */}
          <div className="flex gap-4">
            <Link href="/category">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-sm text-gray-400">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Gallery Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        {/* Mobile View - Horizontal Scroll */}
        <div className="lg:hidden w-full space-y-4">
          {/* Top Row - Scrolls Left */}
          <div ref={topRowRef} className="overflow-hidden relative w-full">
            <div className="flex gap-4">
              {[...leftImages, ...leftImages].map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-80 object-cover"
                    width={400}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolls Right */}
          <div ref={bottomRowRef} className="overflow-hidden relative w-full">
            <div className="flex gap-4">
              {[...rightImages, ...rightImages].map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 rounded-2xl overflow-hidden shadow-2xl border border-pink-500/20"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-80 object-cover"
                    width={400}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View - Vertical Scroll */}
        <div className="hidden lg:block max-w-2xl w-full">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column - Scrolls Up */}
            <div
              ref={leftColumnRef}
              className="h-[780px] overflow-hidden relative rounded-3xl"
            >
              <div className="space-y-4">
                {[...leftImages, ...leftImages].map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border border-purple-500/20"
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-64 object-cover"
                      width={400}
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Scrolls Down */}
            <div
              ref={rightColumnRef}
              className="h-[780px] overflow-hidden relative rounded-3xl mt-12"
            >
              <div className="space-y-4">
                {[...rightImages, ...rightImages].map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border border-pink-500/20"
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-64 object-cover"
                      width={400}
                      height={500}
                    />
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
