"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  Plus,
  X,
  Flower,
  DollarSign,
  Package,
  Camera,
  Star,
  Calendar,
  Palette,
  Sparkles,
  Save,
  Eye
} from "lucide-react";
import Image from 'next/image';

export default function AddFlower() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pricePerPiece: '',
    minimumPurchase: '',
    availableAmount: '',
    category: '',
    color: '',
    occasion: [],
    careInstructions: '',
    freshnessDuration: '',
    isSeasonalSpecial: false,
    discountPercentage: '',
    tags: []
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [newTag, setNewTag] = useState('');

  // Predefined options
  const categories = [
    'Roses', 'Tulips', 'Lilies', 'Carnations', 'Orchids', 'Sunflowers',
    'Daisies', 'Peonies', 'Chrysanthemums', 'Hydrangeas', 'Mixed Bouquets'
  ];

  const colors = [
    'Red', 'Pink', 'White', 'Yellow', 'Purple', 'Orange',
    'Blue', 'Lavender', 'Peach', 'Mixed Colors'
  ];

  const occasions = [
    'Wedding', 'Birthday', 'Anniversary', 'Valentine\'s Day', 'Mother\'s Day',
    'Graduation', 'Funeral', 'Get Well Soon', 'Congratulations', 'Just Because'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const toggleOccasion = (occasion) => {
    setFormData(prev => ({
      ...prev,
      occasion: prev.occasion.includes(occasion)
        ? prev.occasion.filter(o => o !== occasion)
        : [...prev.occasion, occasion]
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.name || !formData.description || !formData.pricePerPiece || !formData.minimumPurchase || !formData.availableAmount || !formData.category || !formData.color) {
      alert('Please fill in all required fields!');
      return;
    }

    // Here you would typically send the data to your API
    console.log('Form Data:', formData);
    console.log('Image:', imagePreview);
    alert('Flower added successfully! (Check console for data)');
  };

  const calculateDiscountedPrice = () => {
    const price = parseFloat(formData.pricePerPiece) || 0;
    const discount = parseFloat(formData.discountPercentage) || 0;
    return (price - (price * discount / 100)).toFixed(2);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center">
              <Flower className="w-6 h-6 text-white" />
            </div>
            Add New Flower
          </h1>
          <p className="text-[#6C5F8D] dark:text-[#BA96C1] mt-1">
            Add a beautiful flower to your inventory
          </p>
        </div>
        <Badge variant="outline" className="text-[#6C5F8D] border-[#BA96C1]/30">
          <Sparkles className="w-4 h-4 mr-1" />
          Premium Addition
        </Badge>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image Upload Section */}
          <Card className="lg:col-span-1 border border-[#BA96C1]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Flower Image
              </CardTitle>
              <CardDescription>Upload a high-quality image of the flower</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Image Upload Area */}
              {/* Image Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 
    ${dragActive
                    ? 'border-[#9C8CB9] bg-[#BA96C1]/50'
                    : 'border-[#BA96C1]/30 hover:border-[#9C8CB9]/50'} 
    bg-[#f9f9f9] dark:bg-[#1a1a1a]`}   // ✅ light/dark background
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {imagePreview ? (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover rounded-lg"  // ✅ সুন্দরভাবে fit হবে
                      unoptimized
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/90 hover:bg-white"
                      onClick={() => setImagePreview(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                        Drop your image here, or
                      </p>
                      <label className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] text-white rounded-lg cursor-pointer hover:from-[#4B3F6E] hover:to-[#9C8CB9] transition-all duration-300">
                        Browse Files
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <p className="text-sm text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60">
                      PNG, JPG, WEBP up to 10MB
                    </p>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card className="lg:col-span-2 border border-[#BA96C1]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
                <Flower className="w-5 h-5" />
                Basic Information
              </CardTitle>
              <CardDescription>Essential details about the flower</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Flower Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Flower Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Red Roses Bouquet"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                    Category *
                  </label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="border-[#BA96C1]/30 focus:ring-[#9C8CB9]/50">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-1">
                    <Palette className="w-4 h-4" />
                    Color *
                  </label>
                  <Select value={formData.color} onValueChange={(value) => handleInputChange('color', value)}>
                    <SelectTrigger className="border-[#BA96C1]/30 focus:ring-[#9C8CB9]/50">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Freshness Duration */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Freshness Duration
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 5-7 days"
                    value={formData.freshnessDuration}
                    onChange={(e) => handleInputChange('freshnessDuration', e.target.value)}
                    className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Description *
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the flower's beauty, fragrance, and special features..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300 resize-none"
                />
              </div>

              {/* Care Instructions */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Care Instructions
                </label>
                <textarea
                  rows={2}
                  placeholder="How to care for this flower to maintain freshness..."
                  value={formData.careInstructions}
                  onChange={(e) => handleInputChange('careInstructions', e.target.value)}
                  className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300 resize-none"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing and Inventory */}
        <Card className="border border-[#BA96C1]/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Pricing & Inventory
            </CardTitle>
            <CardDescription>Set pricing and manage inventory levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Price per Piece */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Price per Piece * ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.pricePerPiece}
                  onChange={(e) => handleInputChange('pricePerPiece', e.target.value)}
                  className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                />
              </div>

              {/* Discount Percentage */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Discount (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="0"
                  value={formData.discountPercentage}
                  onChange={(e) => handleInputChange('discountPercentage', e.target.value)}
                  className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                />
                {formData.discountPercentage && formData.pricePerPiece && (
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Final Price: ${calculateDiscountedPrice()}
                  </p>
                )}
              </div>

              {/* Minimum Purchase */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5]">
                  Minimum Purchase *
                </label>
                <input
                  type="number"
                  placeholder="1"
                  value={formData.minimumPurchase}
                  onChange={(e) => handleInputChange('minimumPurchase', e.target.value)}
                  className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                />
              </div>

              {/* Available Amount */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-1">
                  <Package className="w-4 h-4" />
                  Available Amount *
                </label>
                <input
                  type="number"
                  placeholder="100"
                  value={formData.availableAmount}
                  onChange={(e) => handleInputChange('availableAmount', e.target.value)}
                  className="w-full px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Occasions and Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Occasions */}
          <Card className="border border-[#BA96C1]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
                <Star className="w-5 h-5" />
                Perfect Occasions
              </CardTitle>
              <CardDescription>Select occasions this flower is perfect for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occasion) => (
                  <Badge
                    key={occasion}
                    variant={formData.occasion.includes(occasion) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 ${formData.occasion.includes(occasion)
                        ? 'bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] text-white hover:from-[#4B3F6E] hover:to-[#9C8CB9]'
                        : 'border-[#BA96C1]/30 text-[#4B3F6E] hover:bg-[#BA96C1]/10'
                      }`}
                    onClick={() => toggleOccasion(occasion)}
                  >
                    {occasion}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="border border-[#BA96C1]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5]">Custom Tags</CardTitle>
              <CardDescription>Add custom tags for better searchability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-3 py-2 border border-[#BA96C1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent bg-white/50 dark:bg-[#4B3F6E]/20 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 transition-all duration-300"
                />
                <Button
                  type="button"
                  onClick={addTag}
                  className="bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] hover:from-[#4B3F6E] hover:to-[#9C8CB9] text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#BA96C1]/20 text-[#4B3F6E] hover:bg-[#BA96C1]/30 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  >
                    {tag}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Options */}
        <Card className="border border-[#BA96C1]/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Special Options
            </CardTitle>
            <CardDescription>Additional settings and features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="seasonal"
                checked={formData.isSeasonalSpecial}
                onChange={(e) => handleInputChange('isSeasonalSpecial', e.target.checked)}
                className="w-4 h-4 text-[#9C8CB9] bg-gray-100 border-[#BA96C1]/30 rounded focus:ring-[#9C8CB9]/50 focus:ring-2"
              />
              <label htmlFor="seasonal" className="text-sm font-medium text-[#4B3F6E] dark:text-[#DCD7D5] cursor-pointer">
                Mark as Seasonal Special
              </label>
              <Badge variant="outline" className="text-xs text-[#6C5F8D] border-[#BA96C1]/30">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button
            type="button"
            variant="outline"
            className="border-[#BA96C1]/30 text-[#4B3F6E] hover:bg-[#BA96C1]/10"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] hover:from-[#4B3F6E] hover:to-[#9C8CB9] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Save className="w-4 h-4 mr-2" />
            Add Flower to Inventory
          </Button>
        </div>
      </div>
    </div>
  );
}