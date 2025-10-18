"use client";

import { Mail, Phone, HelpCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner"; // Optional: for notifications

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        alert('Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        // Error
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Mail Us",
      detail: "abbose42@gmail.com"
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Check out FAQs",
      detail: "Get Quick Answers"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+91 9619535586"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      detail: "Instant Help Right Away."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative 3D Objects */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
        <div className="w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-800 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-20 left-20 w-40 h-40 opacity-20 rotate-45">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <span>•</span>
          <span className="text-white">Contact & Support</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div>
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Build<br />
              Something{" "}
              <span className="text-gray-500">in 3D</span><br />
              Together.
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have a project in mind? Tell us your vision — whether it's a product render, game asset, or cinematic scene — and we'll bring it to life.
            </p>

            {/* Green divider line */}
            <div className="w-12 h-1 bg-green-500 mb-12" />

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex gap-4 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                    {method.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {method.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="hey@framer.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-800 text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-green-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}