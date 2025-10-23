"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPageContent() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqSections = [
    {
      title: "General Questions",
      questions: [
        { id: "gq1", question: "What 3D services do you offer?", answer: "We specialize in 3D modeling, product visualization, animation, rendering, and environment design. We also provide services for advertising, games, and cinematic projects." },
        { id: "gq2", question: "What industries do you work with?", answer: "We work with game studios, marketing agencies, e-commerce brands, architecture firms, and product manufacturers." },
        { id: "gq3", question: "Do you take freelance or studio projects?", answer: "Yes, we take on both freelance and team-based studio projects depending on the scope and timeline." },
        { id: "gq4", question: "How does your project process work?", answer: "Our process includes: Concept Discussion Reference & Moodboard Modeling / Animation Feedback & Revisions Final Render & Delivery" },
        { id: "gq5", question: "What software do you use?", answer: "We primarily use Blender, Maya, Substance Painter, Unreal Engine, ZBrush, and Adobe tools." },
        { id: "gq6", question: "Do you offer discounts for long-term or bulk projects?", answer: "Yes, we provide special pricing for ongoing clients or large-scale projects." },
        { id: "gq7", question: "How do you charge for a project?", answer: "Pricing depends on project complexity, duration, and deliverables. We offer both fixed-price and hourly models." },
        { id: "gq8", question: "How long does it take to complete a project?", answer: "It varies—simple models may take 1–3 days, while full animations can take 1–3 weeks depending on scope." },
        { id: "gq9", question: "Can you sign an NDA?", answer: "Yes, we respect client confidentiality and are happy to sign NDAs if required." },
        
      ]
    },
    // {
    //   title: "Project & Pricing",
    //   questions: [
    //     { id: "pq1", question: "How do you price your services?", answer: "Pricing depends on project complexity, timeline, and deliverables. Contact us for a custom quote." },
    //     { id: "pq2", question: "Do you offer package deals?", answer: "Yes, we offer discounted packages for multiple assets or ongoing projects." },
    //   ]
    // },
    // {
    //   title: "Process & Workflow",
    //   questions: [
    //     { id: "cq1", question: "What is your project workflow?", answer: "Our workflow includes: consultation, concept development, modeling, texturing, rendering, revisions, and final delivery." },
    //     { id: "cq2", question: "How many revisions are included?", answer: "We include 2-3 revision rounds. Additional revisions can be purchased if needed." },
    //   ]
    // },
    // {
    //   title: "Technical Questions",
    //   questions: [
    //     { id: "sq1", question: "What file formats do you deliver?", answer: "We deliver in FBX, OBJ, GLB, USD, and native formats (Blender, Maya, 3ds Max) based on your needs." },
    //     { id: "sq2", question: "Do you provide source files?", answer: "Yes, source files are included in all projects for full ownership and future editing." },
    //   ]
    // }
  ];

  // const rightColumnQuestions = [
  //   { id: "rc1", question: "Can you work with my existing 3D assets?", answer: "Yes, we can enhance, optimize, or modify your existing 3D assets." },
  //   { id: "rc2", question: "Do you sign NDAs?", answer: "Yes, we're happy to sign NDAs to protect your intellectual property." },
  //   { id: "rc3", question: "What software do you use?", answer: "We use Blender, Maya, 3ds Max, ZBrush, Substance Painter, and Unreal Engine." },
  //   { id: "rc4", question: "Can you create assets for Unity/Unreal?", answer: "Yes, we optimize assets specifically for Unity and Unreal Engine." },
  //   { id: "rc5", question: "Do you offer animation services?", answer: "Yes, we provide both character and product animation services." },
  //   { id: "rc6", question: "What about rendering services?", answer: "We offer high-quality rendering for marketing, presentations, and promotional content." },
  //   { id: "rc7", question: "Can I request a trial project?", answer: "Yes, we can discuss a smaller trial project to demonstrate our capabilities." },
  //   { id: "rc8", question: "Do you work internationally?", answer: "Yes, we work with clients worldwide and accommodate different time zones." },
  //   { id: "rc9", question: "What payment methods do you accept?", answer: "We accept bank transfers, PayPal, and major credit cards." },
  // ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...faqSections.flatMap(section =>
                section.questions.map(q => ({
                  "@type": "Question",
                  "name": q.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                  }
                }))
              ),
              
            ]
          })
        }}
      />

      {/* Decorative 3D Objects */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-900 shadow-2xl" />
      </div>
      <div className="absolute top-20 left-32 w-20 h-20 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black" />
      </div>
      <div className="absolute top-24 right-24 w-28 h-28 opacity-20 rotate-45">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>
      <div className="absolute bottom-1/3 right-32 w-40 h-40 opacity-30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-4 border-gray-700 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>→</span>
          <span className="text-white">FAQs</span>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked Questions!
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            You can find quick answers to some Frequently Asked Question below and save your time. We're here to Help, If needed.
          </p>
        </div>

    
          <div className="space-y-6 p-4">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-white font-semibold mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.questions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="text-white font-medium">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                            openItems[item.id] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openItems[item.id] && (
                        <div className="px-5 pb-5">
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        {/* Still Require Assistance Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                Still Require Assistance?
              </h3>
              <p className="text-gray-400 text-sm">
                Can't find the answer here? Message us for help!
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 whitespace-nowrap">
              Contact Us →
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}