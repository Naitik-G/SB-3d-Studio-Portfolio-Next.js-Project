"use client";

import { Facebook, Instagram, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
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
                href="#"
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
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Up-to-Date!
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our Newsletter to stay up-to-date on latest courses, updates, news and discounts from us.
            </p>

            {/* Email Input */}
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500"
              />
              <Button className="bg-white hover:bg-gray-200 text-black font-semibold px-6 whitespace-nowrap">
                Join Now
              </Button>
            </div>
          </div>
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

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-900">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Copyright © 2025 - Luma Template for</span>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              Framer
            </a>
            <span className="flex items-center gap-1">
              <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              Powered by FramerAuth
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              Samar Jamil
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}