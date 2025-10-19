"use client";

import { Facebook, Instagram, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Footer() {
  const navigation = [
    { title: "Browse by Category", href: "#" }
  ];

  const company = [
    { title: "About Us", href: "#" },
    { title: "Contact & Support", href: "#" }
  ];

  const misc = [
    { title: "Privacy Policy", href: "#" },
    { title: "FAQs", href: "#" }
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Logo & Description */}
          <div>
            {/* Logo */}
            <div className="mb-6">
             <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                           <Image
                             src="/logo.svg"
                             alt="Studio Logo"
                             fill
                             className="object-contain"
                             priority
                           />
                         </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Luma is a powerful Membership Template to Sell your Courses and Membership Content.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/motiondev_1?utm_source=qr&igsh=MTN2NmttcmlmeTdrNA=="
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Newsletter */}
          
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Misc */}
          <div>
            <h4 className="text-white font-semibold mb-4">Misc</h4>
            <ul className="space-y-3">
              {misc.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
}