"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Star, 
  Gift, 
  Truck, 
  Shield, 
  Users,
  Play,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Quote,
  Instagram,
  Eye,
  ShoppingCart,
  Plus,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Check,
  X
} from "lucide-react"

// Testimonials Component
export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Planner",
      image: "👩‍💼",
      rating: 5,
      text: "The flower arrangements for our wedding were absolutely breathtaking! Every detail was perfect, and the team went above and beyond to make our special day magical. I recommend them to all my clients.",
      location: "New York"
    },
    {
      name: "Michael Chen",
      role: "Event Coordinator", 
      image: "👨‍💻",
      rating: 5,
      text: "Working with this florist has been a game-changer for our corporate events. Their creativity and attention to detail never cease to amaze me. Fresh, beautiful, and always delivered on time.",
      location: "California"
    },
    {
      name: "Emma Thompson",
      role: "Happy Customer",
      image: "👩‍🦰", 
      rating: 5,
      text: "I've been ordering flowers for my mother every month for two years now. The quality is consistently exceptional, and the same-day delivery service is incredibly reliable. She absolutely loves them!",
      location: "Texas"
    },
    {
      name: "David Rodriguez",
      role: "Restaurant Owner",
      image: "👨‍🍳",
      rating: 5,
      text: "The weekly fresh flower arrangements for our restaurant have transformed our dining atmosphere. Our customers constantly compliment the beautiful blooms. Worth every penny!",
      location: "Florida"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/20 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 text-5xl opacity-15 animate-bounce delay-300">💬</div>
        <div className="absolute bottom-32 left-10 text-4xl opacity-20 animate-pulse delay-700">⭐</div>
        <div className="absolute top-1/3 left-1/4 text-3xl opacity-15 animate-bounce delay-1000">❤️</div>
        <div className="absolute bottom-20 right-1/3 text-4xl opacity-20 animate-pulse delay-500">🌸</div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/15 to-[#9C8CB9]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/10 to-[#BA96C1]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 dark:from-[#9C8CB9]/30 dark:to-[#BA96C1]/20 px-6 py-3 border border-[#BA96C1]/40 backdrop-blur-sm mb-6">
            <Quote className="w-4 h-4 text-[#6C5F8D] dark:text-[#BA96C1]" />
            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
              Customer Stories
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          
          <p className="text-lg lg:text-xl text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">
            Don't just take our word for it – hear from the people who have experienced 
            the magic of our fresh flower arrangements firsthand.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/60 dark:bg-[#4B3F6E]/40 backdrop-blur-sm border border-[#BA96C1]/30 p-8 lg:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#BA96C1]/8 to-[#9C8CB9]/15"></div>
            
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6C5F8D] to-[#9C8CB9] flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="relative">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-[#4B3F6E] dark:text-[#DCD7D5] text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] flex items-center justify-center text-2xl shadow-lg">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#4B3F6E] dark:text-[#DCD7D5] text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-[#6C5F8D] dark:text-[#BA96C1] text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60 text-xs">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] scale-125'
                    : 'bg-[#BA96C1]/40 hover:bg-[#BA96C1]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}