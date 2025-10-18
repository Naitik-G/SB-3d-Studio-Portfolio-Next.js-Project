"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqSections = [
    {
      title: "General Questions",
      questions: [
        { id: "gq1", question: "Can I access the Courses on multiple devices?", answer: "Yes, you can access courses on any device with your account credentials." },
        { id: "gq2", question: "Can I interact with Instructors?", answer: "Absolutely! You can interact with instructors through our messaging system." },
        { id: "gq3", question: "Can I access the Courses offline?", answer: "Some courses offer downloadable content for offline viewing." },
      ]
    },
    {
      title: "Payment Related Questions",
      questions: [
        { id: "pq1", question: "Are there any hidden charges?", answer: "No, all pricing is transparent with no hidden fees." },
        { id: "pq2", question: "Can I transfer my enrollment to someone else?", answer: "Course enrollments are non-transferable and tied to your account." },
      ]
    },
    {
      title: "Course Related Questions",
      questions: [
        { id: "cq1", question: "How long do I have access to the course materials?", answer: "You have lifetime access to all course materials once enrolled." },
        { id: "cq2", question: "Are there quizzes to test my knowledge?", answer: "Yes, most courses include quizzes and assessments to track your progress." },
      ]
    },
    {
      title: "Payment Related Questions",
      questions: [
        { id: "sq1", question: "How can I contact the support team?", answer: "You can reach our support team through email or live chat on our website." },
        { id: "sq2", question: "Can support assist me with technical issues?", answer: "Yes, our support team is available to help with all technical issues." },
      ]
    }
  ];

  const rightColumnQuestions = [
    { id: "rc1", question: "Are there any prerequisites for enrolling?", answer: "Prerequisites vary by course and are listed in the course description." },
    { id: "rc2", question: "Are there any assignments in the Courses?", answer: "Yes, courses include practical assignments to reinforce learning." },
    { id: "rc3", question: "Can I share my progress on social media?", answer: "Yes, you can share your achievements and certificates on social media." },
    { id: "rc4", question: "Are refunds available for the Courses?", answer: "Refunds are available within 30 days of purchase if you're not satisfied." },
    { id: "rc5", question: "Are there any discounts available?", answer: "We regularly offer discounts and promotions. Check our website for current offers." },
    { id: "rc6", question: "Are certificates provided upon completion?", answer: "Yes, you'll receive a certificate upon successfully completing each course." },
    { id: "rc7", question: "Can I interact with other learners?", answer: "Yes, our platform includes discussion forums for learner interaction." },
    { id: "rc8", question: "What is the average response time?", answer: "Our support team typically responds within 24 hours." },
    { id: "rc9", question: "Is there a knowledge base?", answer: "Yes, we have a comprehensive knowledge base with helpful articles." },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
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

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
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

          {/* Right Column */}
          <div className="space-y-3">
            {rightColumnQuestions.map((item) => (
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

        {/* Still Require Assistance Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex items-center justify-between">
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
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
            Contact Us →
          </Button>
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}