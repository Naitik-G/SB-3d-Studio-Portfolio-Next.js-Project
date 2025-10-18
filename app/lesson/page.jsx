"use client";

import { ArrowLeft, Download, FileText, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Back Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to All Modules</span>
        </a>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Key metrics for <span className="text-gray-500">tracking</span>
          </h1>
          <p className="text-gray-400 mb-4">
            Explore essential metrics for tracking website performance and user behavior, including traffic sources.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>3:20</span>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1">
          <div className="bg-black rounded-3xl overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              {/* Video Preview Image Placeholder */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
                
                {/* Mock Video Thumbnails */}
                <div className="relative z-10 flex gap-6 items-center justify-center">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-64 shadow-2xl border border-gray-700">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl h-32 mb-4" />
                    <h3 className="text-white font-bold text-center mb-2">Cinematic video made simple</h3>
                    <p className="text-gray-400 text-xs text-center mb-4">Create stunning videos</p>
                    <div className="flex justify-center">
                      <div className="bg-purple-600 rounded-full px-4 py-2 text-white text-xs font-semibold">
                        Get Started
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                    <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </button>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-64 shadow-2xl border border-gray-700">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl h-32 mb-4" />
                    <h3 className="text-white font-bold text-center mb-2">Cinematic video made simple</h3>
                    <p className="text-gray-400 text-xs text-center mb-4">Professional storytelling made easy</p>
                    <div className="flex justify-center">
                      <div className="bg-purple-600 rounded-full px-4 py-2 text-white text-xs font-semibold">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Lesson Description</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              "In this lesson on the basics of web design, you will learn the essential principles and concepts behind creating effective and visually appealing websites. Starting with an overview of the web design process, you will explore the importance of user experience (UX) and interface design."
            </p>
            <p>
              Discover the fundamentals of HTML and CSS, the building blocks of web pages, and gain an understanding of responsive design for optimal viewing across different devices. Dive into color theory and typography to create engaging visual elements, and explore best practices for organizing content and incorporating images. By the end of this lesson, you will have a solid foundation in web design principles and be ready to create your own simple web pages."
            </p>
          </div>
        </div>

        {/* Lesson Assets & Download */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Lesson Assets</h3>
              <p className="text-gray-400 text-sm">10.1 MB</p>
            </div>
          </div>
          <Button className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2">
            Download
            <Download className="w-4 h-4" />
          </Button>
        </div>

        {/* Completed Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500 text-black font-semibold px-6 py-3 rounded-full">
          <CheckCircle2 className="w-5 h-5" />
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}