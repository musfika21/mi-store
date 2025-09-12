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
  ChevronRight
} from "lucide-react"

// Hero Component
export function HeroSection() {
  const [currentFlower, setCurrentFlower] = useState(0)
  const flowers = ["🌸", "🌺", "🌻", "🌷", "🌹", "🌼"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlower((prev) => (prev + 1) % flowers.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/20 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating flowers */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce delay-300">🌸</div>
        <div className="absolute top-40 right-20 text-4xl opacity-30 animate-pulse delay-700">🌺</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-25 animate-bounce delay-1000">🌻</div>
        <div className="absolute top-1/3 right-10 text-3xl opacity-20 animate-pulse delay-500">🌷</div>
        <div className="absolute bottom-20 right-1/3 text-4xl opacity-30 animate-bounce delay-200">🌹</div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 dark:from-[#9C8CB9]/30 dark:to-[#BA96C1]/20 px-6 py-3 border border-[#BA96C1]/40 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#6C5F8D] dark:text-[#BA96C1]" />
              <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                Premium Flower Experience
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                  Beautiful Blooms
                </span>
                <span className="block text-[#6C5F8D] dark:text-[#BA96C1] relative">
                  Delivered Fresh
                  <div className="absolute -right-8 -top-2 text-3xl animate-spin-slow">
                    {flowers[currentFlower]}
                  </div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-2xl leading-relaxed">
                Transform any moment into something magical with our carefully curated collection of fresh flowers, delivered with love to your doorstep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button variant="outline" className="group border-2 border-[#9C8CB9] text-[#6C5F8D] dark:text-[#BA96C1] hover:bg-[#9C8CB9] hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300">
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Watch Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#BA96C1]/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#6C5F8D] dark:text-[#BA96C1]">50k+</div>
                <div className="text-sm text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#6C5F8D] dark:text-[#BA96C1]">10k+</div>
                <div className="text-sm text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">Bouquets Crafted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#6C5F8D] dark:text-[#BA96C1]">98%</div>
                <div className="text-sm text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main flower display */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#BA96C1]/30 via-[#9C8CB9]/40 to-[#6C5F8D]/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Rotating flower ring */}
              <div className="absolute inset-8 border-4 border-dashed border-[#BA96C1]/40 rounded-full animate-spin-slow"></div>
              
              {/* Center flower */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl lg:text-9xl animate-bounce-slow filter drop-shadow-2xl">
                  {flowers[currentFlower]}
                </div>
              </div>
              
              {/* Floating elements around */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-full flex items-center justify-center animate-float">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-6 w-12 h-12 bg-gradient-to-br from-[#BA96C1] to-[#9C8CB9] rounded-full flex items-center justify-center animate-float delay-300">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-2 w-14 h-14 bg-gradient-to-br from-[#6C5F8D] to-[#4B3F6E] rounded-full flex items-center justify-center animate-float delay-700">
                <Gift className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}