'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flower, DollarSign, Package, Palette, ArrowRight, Sparkles, Plus } from 'lucide-react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function RecentFlowers() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const limit = 8; // Changed to 8 for home page

  const fetchFlowers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/items/flower?limit=${limit}&skip=0`); // Always show first 8
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to fetch flowers (status: ${response.status})`);
      }
      const data = await response.json();
      setFlowers(data.flowers);
      setTotal(data.total);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden">
      <Toaster position="top-right" />
      
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 text-left">
              <div className="flex justify-center sm:justify-start mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40"></div>
                  <div className="relative w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl">
                    <Flower className="w-10 sm:w-12 h-10 sm:h-12 text-[#DCD7D5] animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                  Beautiful Flowers
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-[#4B3F6E] dark:text-[#DCD7D5] font-medium">
                  For Every Special Moment
                </p>
                <p className="text-base sm:text-lg text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-3xl leading-relaxed">
                  Discover our stunning collection of fresh, vibrant flowers that bring joy and beauty to your celebrations.
                </p>
              </div>
            </div>
            <div className="hidden sm:block">
              <Link href="/add-flower">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Add New Flower</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Add Button */}
          <div className="sm:hidden">
            <Link href="/add-flower">
              <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Add New Flower</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-200 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 dark:text-red-400 text-sm">!</span>
              </div>
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6C5F8D]"></div>
              <p className="text-lg text-[#4B3F6E] dark:text-[#DCD7D5]">Loading beautiful flowers...</p>
            </div>
          </div>
        )}

        {!loading && flowers.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl sm:rounded-3xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Flower className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5] mb-2">
                No flowers found
              </h3>
              <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 mb-6">
                Start building your beautiful collection by adding some flowers!
              </p>
              <Link href="/add-flower">
                <Button className="bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] hover:from-[#4B3F6E] hover:to-[#9C8CB9] text-white">
                  Add Your First Flower
                </Button>
              </Link>
            </div>
          </div>
        )}

        {!loading && flowers.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {flowers.map((flower) => (
                <Card key={flower._id} className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#9C8CB9]/30 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 group">
                  <div className="relative">
                    {flower.image && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={flower.image}
                          alt={flower.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {flower.discountPercentage > 0 && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                            -{flower.discountPercentage}%
                          </div>
                        )}
                      </div>
                    )}
                    {!flower.image && (
                      <div className="w-full h-48 bg-gradient-to-br from-[#BA96C1]/30 to-[#9C8CB9]/40 flex items-center justify-center">
                        <Flower className="w-16 h-16 text-[#4B3F6E]/40 dark:text-[#DCD7D5]/40" />
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2 group-hover:text-[#6C5F8D] dark:group-hover:text-[#BA96C1] transition-colors duration-300">
                      <Flower className="w-5 h-5" />
                      {flower.name}
                    </CardTitle>
                    <CardDescription className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">
                      {flower.description || 'A beautiful flower for your collection'}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-0">
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1 text-[#4B3F6E] dark:text-[#DCD7D5]">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-lg">
                          ${flower.discountPercentage > 0 
                            ? (flower.pricePerPiece * (1 - flower.discountPercentage / 100)).toFixed(2)
                            : flower.pricePerPiece.toFixed(2)
                          }
                        </span>
                        {flower.discountPercentage > 0 && (
                          <span className="text-sm text-[#4B3F6E]/50 dark:text-[#DCD7D5]/50 line-through ml-1">
                            ${flower.pricePerPiece.toFixed(2)}
                          </span>
                        )}
                      </p>
                      <p className="flex items-center gap-1 text-[#4B3F6E] dark:text-[#DCD7D5]">
                        <Package className="w-4 h-4" />
                        <span className="text-sm">{flower.availableAmount}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#4B3F6E] dark:text-[#DCD7D5]">
                      <Palette className="w-4 h-4" />
                      <span className="text-sm">{flower.color}</span>
                      <span className="text-[#4B3F6E]/40 dark:text-[#DCD7D5]/40">•</span>
                      <span className="text-sm">{flower.category}</span>
                    </div>

                    {flower.occasion?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {flower.occasion.slice(0, 2).map((occ) => (
                          <Badge 
                            key={occ} 
                            variant="secondary" 
                            className="bg-[#BA96C1]/20 text-[#4B3F6E] dark:bg-[#9C8CB9]/30 dark:text-[#DCD7D5] border-0"
                          >
                            {occ}
                          </Badge>
                        ))}
                        {flower.occasion.length > 2 && (
                          <Badge 
                            variant="secondary" 
                            className="bg-[#6C5F8D]/20 text-[#4B3F6E] dark:bg-[#4B3F6E]/30 dark:text-[#DCD7D5] border-0"
                          >
                            +{flower.occasion.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* See More Section */}
            {total > limit && (
              <div className="text-center">
                <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl sm:rounded-3xl p-8 max-w-lg mx-auto space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                      Discover More Beauty
                    </h3>
                    <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 text-lg">
                      Explore our complete collection of {total} stunning flowers
                    </p>
                  </div>
                  <Link href="/dashboard">
                    <Button className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105">
                      <span className="relative z-10 flex items-center space-x-2">
                        <span className="text-lg">See More Flowers</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}