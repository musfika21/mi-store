"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Calendar,
  Heart,
  Sparkles,
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Gift,
  Truck
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    eventType: '',
    eventDate: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send the form data to your backend here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      primary: "(555) 123-BLOOM",
      secondary: "(555) 123-2566",
      description: "Speak directly with our floral experts",
      available: "Mon-Sat: 8AM-7PM"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      primary: "hello@bloomblossom.com",
      secondary: "orders@bloomblossom.com",
      description: "We'll respond within 2 hours",
      available: "24/7 Response"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      primary: "Available Now",
      secondary: "Average wait: 2 mins",
      description: "Instant help from our team",
      available: "Daily: 9AM-6PM"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Store",
      primary: "123 Flower Street",
      secondary: "Garden City, GC 12345",
      description: "See our beautiful showroom",
      available: "Open 7 Days"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM" },
    { day: "Holidays", hours: "10:00 AM - 4:00 PM" }
  ];

  const services = [
    { icon: <Heart className="w-6 h-6" />, name: "Wedding Consultation", time: "By Appointment" },
    { icon: <Gift className="w-6 h-6" />, name: "Custom Arrangements", time: "Same Day Available" },
    { icon: <Truck className="w-6 h-6" />, name: "Delivery Service", time: "Daily Routes" },
    { icon: <Calendar className="w-6 h-6" />, name: "Event Planning", time: "Schedule Meeting" }
  ];

  const socialMedia = [
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", href: "https://facebook.com/bloomblossom" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", href: "https://instagram.com/bloomblossom" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", href: "https://twitter.com/bloomblossom" },
    { icon: <Youtube className="w-6 h-6" />, name: "YouTube", href: "https://youtube.com/bloomblossom" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 sm:left-10 text-5xl sm:text-6xl opacity-10 animate-pulse delay-300">🌸</div>
        <div className="absolute top-1/3 right-4 sm:right-20 text-4xl opacity-15 animate-bounce delay-700">🌺</div>
        <div className="absolute bottom-32 left-1/4 text-4xl sm:text-5xl opacity-10 animate-pulse delay-1000">🌻</div>
        <div className="absolute bottom-20 right-4 sm:right-10 text-3xl opacity-15 animate-bounce delay-500">🌷</div>
        <div className="absolute top-1/2 left-4 sm:left-10 text-4xl opacity-10 animate-pulse delay-1500">🌹</div>
        <div className="absolute top-10 right-1/4 sm:right-1/3 text-3xl opacity-15 animate-bounce delay-200">🏵️</div>
        <div className="absolute top-2/3 right-1/4 text-4xl sm:text-5xl opacity-10 animate-pulse delay-800">🌼</div>
        <div className="absolute bottom-1/3 left-4 sm:left-20 text-4xl opacity-15 animate-bounce delay-1200">🌿</div>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 sm:right-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-4 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#9C8CB9]/20 to-[#6C5F8D]/25 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40"></div>
              <div className="relative w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl">
                <MessageCircle className="w-10 sm:w-12 h-10 sm:h-12 text-[#DCD7D5] animate-pulse" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#4B3F6E] dark:text-[#DCD7D5] font-medium">
              Let's Create Something Beautiful Together
            </p>
            <p className="text-base sm:text-lg text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-3xl mx-auto leading-relaxed">
              Whether you're planning a wedding, special event, or just need the perfect bouquet, our team is here to help.
              Reach out to us through any of the methods below and let's bring your floral vision to life.
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl p-6 text-center space-y-4 hover:shadow-2xl hover:shadow-[#9C8CB9]/30 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 group">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">{method.title}</h3>
                <div className="space-y-1">
                  <p className="text-[#6C5F8D] dark:text-[#BA96C1] font-semibold">{method.primary}</p>
                  <p className="text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60 text-sm">{method.secondary}</p>
                </div>
                <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 text-sm">{method.description}</p>
                <div className="inline-block bg-[#6C5F8D]/20 dark:bg-[#BA96C1]/20 text-[#4B3F6E] dark:text-[#DCD7D5] px-3 py-1 rounded-full text-xs font-medium">
                  {method.available}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl sm:shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 sm:space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 text-sm sm:text-base">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-600 rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-green-800 dark:text-green-200 font-semibold">Message Sent Successfully!</p>
                  <p className="text-green-700 dark:text-green-300 text-sm">We'll respond to your inquiry soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="wedding">Wedding Consultation</option>
                    <option value="event">Special Event</option>
                    <option value="delivery">Delivery Inquiry</option>
                    <option value="custom">Custom Arrangement</option>
                    <option value="subscription">Flower Subscription</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Event Type and Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="funeral">Memorial Service</option>
                    <option value="graduation">Graduation</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Event Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                    </div>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your floral needs, preferred colors, budget range, or any special requests..."
                ></textarea>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-4">
                  {['email', 'phone', 'text'].map((method) => (
                    <label key={method} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#6C5F8D] bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 focus:ring-[#9C8CB9]/50 focus:ring-2"
                      />
                      <span className="text-[#4B3F6E] dark:text-[#DCD7D5] capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[#BA96C1]/20 last:border-b-0">
                    <span className="text-[#4B3F6E] dark:text-[#DCD7D5] font-medium">{schedule.day}</span>
                    <span className="text-[#6C5F8D] dark:text-[#BA96C1] text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Services */}
            <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">Quick Services</h3>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#DCD7D5]/30 to-[#BA96C1]/20 dark:from-[#6C5F8D]/20 dark:to-[#9C8CB9]/30 rounded-lg hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#BA96C1] to-[#9C8CB9] rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[#4B3F6E] dark:text-[#DCD7D5] font-medium text-sm">{service.name}</p>
                      <p className="text-[#6C5F8D] dark:text-[#BA96C1] text-xs">{service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5] text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialMedia.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-[#9C8CB9]/20 to-[#6C5F8D]/30 dark:from-[#BA96C1]/20 dark:to-[#4B3F6E]/30 rounded-full text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-gradient-to-br hover:from-[#BA96C1] hover:to-[#9C8CB9] hover:text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}