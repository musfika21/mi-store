"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Flower, AlertCircle } from "lucide-react";
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

export default function RecentFlowers() {
  const [flowers, setFlowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlowers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:3000/api/items');
        if (!response.ok) {
          throw new Error('Failed to fetch flowers');
        }
        const data = await response.json();
        // Sort by _id in descending order (MongoDB _id is timestamp-based) and take the first 8
        const recentFlowers = data
          .sort((a, b) => (b._id > a._id ? 1 : -1))
          .slice(0, 8);
        setFlowers(recentFlowers);
      } catch (err) {
        setError(err.message);
        toast.error(`Error: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discount = discountPercentage || 0;
    return (price - (price * discount / 100)).toFixed(2);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/20 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">
      <Toaster position="top-right" />

      {/* Animated background elements - matching FeaturesSection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating flowers */}
        <div className="absolute top-20 left-10 text-6xl opacity-15 animate-bounce delay-300">🌸</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-pulse delay-700">🌺</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-15 animate-bounce delay-1000">🌻</div>
        <div className="absolute top-1/3 right-10 text-3xl opacity-20 animate-pulse delay-500">🌷</div>
        <div className="absolute bottom-20 right-1/3 text-4xl opacity-15 animate-bounce delay-200">🌹</div>
        <div className="absolute top-2/3 left-20 text-4xl opacity-20 animate-pulse delay-800">🌼</div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/15 to-[#9C8CB9]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/10 to-[#BA96C1]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-[#9C8CB9]/15 to-[#6C5F8D]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 dark:from-[#9C8CB9]/30 dark:to-[#BA96C1]/20 px-6 py-3 border border-[#BA96C1]/40 backdrop-blur-sm mb-6">
            <Flower className="w-4 h-4 text-[#6C5F8D] dark:text-[#BA96C1]" />
            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
              New Arrivals
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
            Our Latest Flowers
          </h2>
          
          <p className="text-lg lg:text-xl text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">
            Explore the newest additions to our exquisite flower collection, freshly sourced and ready to brighten your day.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg flex items-center max-w-3xl mx-auto mb-8">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Flowers Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="group relative bg-white/60 dark:bg-[#4B3F6E]/40 backdrop-blur-sm border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 p-8 animate-pulse"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#BA96C1]/8 to-[#9C8CB9]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] text-white mb-6 rounded-full"></div>
                <div className="relative">
                  <div className="h-6 bg-[#BA96C1]/20 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-[#BA96C1]/20 rounded w-full mb-2"></div>
                  <div className="h-4 bg-[#BA96C1]/20 rounded w-2/3"></div>
                </div>
                <div className="mt-6 h-10 bg-[#BA96C1]/20 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : flowers.length === 0 ? (
          <div className="text-center text-[#4B3F6E] dark:text-[#DCD7D5] py-8">
            <p>No flowers available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {flowers.map((flower, index) => (
              <div
                key={flower._id}
                className="group relative bg-white/60 dark:bg-[#4B3F6E]/40 backdrop-blur-sm border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 p-8 hover:bg-white/80 dark:hover:bg-[#4B3F6E]/60 hover:shadow-2xl hover:shadow-[#BA96C1]/25 transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#BA96C1]/8 to-[#9C8CB9]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative inline-flex items-center justify-center w-full h-48 mb-6 rounded-lg overflow-hidden">
                  {flower.image ? (
                    <Image
                      src={flower.image}
                      alt={flower.name}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-[#BA96C1]/20 flex items-center justify-center rounded-lg">
                      <Flower className="w-12 h-12 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5] mb-4 group-hover:text-[#6C5F8D] dark:group-hover:text-[#BA96C1] transition-colors duration-300">
                    {flower.name}
                  </h3>
                  <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed mb-6 line-clamp-2">
                    {flower.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#4B3F6E] dark:text-[#DCD7D5] font-medium">
                      ${calculateDiscountedPrice(flower.pricePerPiece, flower.discountPercentage)}
                    </span>
                    {flower.discountPercentage > 0 && (
                      <span className="text-sm text-green-600 dark:text-green-400">
                        {flower.discountPercentage}% off
                      </span>
                    )}
                  </div>
                  
                  {/* View details link */}
                  <div className="flex items-center space-x-2 text-[#6C5F8D] dark:text-[#BA96C1] font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm">View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Active state indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <Button className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Explore All Flowers</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
}