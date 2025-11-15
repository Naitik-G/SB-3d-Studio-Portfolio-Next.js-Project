"use client";

import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {


  const company = [
    { title: "About Us", href: "/about" },
    { title: "Contact & Support", href: "/contact" }
  ];

  const misc = [
    // { title: "Privacy Policy", href: "#" },
    { title: "FAQs", href: "/faq" }
  ];

  return (
    <footer className="bg-black border-t border-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:flex">
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
              Motiondev we create motion for advertisement and games.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* DISCORD ICON ADDED HERE using FaDiscord */}
              <a
                href="#" // Update this with your Discord invite link
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaDiscord className="w-5 h-5" /> {/* Using FaDiscord */}
              </a>
              {/* END DISCORD ICON */}
              
              <a
                href="https://www.instagram.com/motiondev_1?utm_source=qr&igsh=MTN2NmttcmlmeTdrNA=="
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>          
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">

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