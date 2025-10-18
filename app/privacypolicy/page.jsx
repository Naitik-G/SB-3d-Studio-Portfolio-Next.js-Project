"use client";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information Collection and Use",
      content: [
        "Account Information: When you create an account, we collect certain personal information, including your name, email address, and any other information you choose to provide.",
        "Log Data: We may also collect information that your browser sends whenever you visit [Your Website/App Name]. This log data may include information such as your IP address, browser type and version, the pages you visit, the time spent on those pages, and other statistics.",
        "Cookies: We use cookies to personalize your experience, analyze usage patterns, and improve the overall functionality of [Your Website/App Name]. You can control the use of cookies at the individual browser level."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We will not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share aggregated demographic information not linked to any personal information with third parties for the purposes of analytics or advertising."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement a variety of security measures to ensure the safety of your personal information when you enter, submit, or access your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "Your Choices",
      content: [
        "You have the right to access, update, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us using the contact information provided below."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically to stay informed about our information practices."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions or concerns about this Privacy Policy, please contact us at [your contact email/phone number/address]."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative 3D Objects */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-900 shadow-2xl" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-20">
        <div className="w-full h-full rotate-45 bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>
      <div className="absolute top-1/4 right-32 w-40 h-40 opacity-30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-4 border-gray-700 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
      </div>
      <div className="absolute bottom-32 right-24 w-28 h-28 opacity-20 rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <span>→</span>
          <span className="text-white">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
        </div>

        {/* Content Container */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 lg:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of personal information we receive and collect when you use [Your Website/App Name], as well as some of the steps we take to safeguard your information.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last Updated: October 17, 2025
          </p>
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}