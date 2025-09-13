"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Heart,
    Leaf,
    Star,
    Award,
    Users,
    Clock,
    MapPin,
    Phone,
    Mail,
    Truck,
    Shield,
    Gift,
    Sparkles,
    ChevronDown,
    ChevronUp,
    Quote
} from "lucide-react";

export default function AboutPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const teamMembers = [
        {
            name: "Isabella Rose",
            role: "Founder & Head Florist",
            experience: "15+ years",
            specialty: "Wedding & Event Design",
            description: "With over 15 years of experience, Isabella brings artistic vision and botanical expertise to every arrangement."
        },
        {
            name: "Marcus Chen",
            role: "Lead Designer",
            experience: "8+ years",
            specialty: "Modern Arrangements",
            description: "Marcus specializes in contemporary floral design and sustainable sourcing practices."
        },
        {
            name: "Sophie Laurent",
            role: "Event Coordinator",
            experience: "12+ years",
            specialty: "Luxury Events",
            description: "Sophie ensures every special occasion is perfectly executed with attention to detail."
        },
        {
            name: "David Thompson",
            role: "Greenhouse Manager",
            experience: "10+ years",
            specialty: "Plant Care & Cultivation",
            description: "David oversees our greenhouse operations and ensures the highest quality blooms."
        }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Passion",
            description: "We pour our hearts into every arrangement, treating each flower as a work of art."
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Sustainability",
            description: "We're committed to eco-friendly practices and supporting local growers."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Excellence",
            description: "We strive for perfection in every petal, ensuring premium quality in all our creations."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community",
            description: "We believe in building lasting relationships with our customers and local community."
        }
    ];

    const services = [
        {
            title: "Wedding Florals",
            description: "Complete wedding floral services from bridal bouquets to venue decoration",
            features: ["Bridal Bouquets", "Centerpieces", "Ceremony Decor", "Reception Arrangements"]
        },
        {
            title: "Event Design",
            description: "Corporate events, parties, and special occasions with stunning floral displays",
            features: ["Corporate Events", "Birthday Parties", "Anniversary Celebrations", "Seasonal Displays"]
        },
        {
            title: "Daily Fresh Flowers",
            description: "Fresh flower arrangements for everyday beauty and special moments",
            features: ["Seasonal Bouquets", "Subscription Service", "Same-Day Delivery", "Custom Arrangements"]
        },
        {
            title: "Plant Care",
            description: "Indoor plants, gardening consultation, and plant maintenance services",
            features: ["Indoor Plants", "Garden Consultation", "Plant Care Tips", "Maintenance Service"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden">

            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse delay-300">🌸</div>
                <div className="absolute top-1/3 right-20 text-4xl opacity-15 animate-bounce delay-700">🌺</div>
                <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-pulse delay-1000">🌻</div>
                <div className="absolute bottom-20 right-10 text-3xl opacity-15 animate-bounce delay-500">🌷</div>
                <div className="absolute top-1/2 left-10 text-4xl opacity-10 animate-pulse delay-1500">🌹</div>
                <div className="absolute top-10 right-1/3 text-3xl opacity-15 animate-bounce delay-200">🏵️</div>
                <div className="absolute top-2/3 right-1/4 text-5xl opacity-10 animate-pulse delay-800">🌼</div>
                <div className="absolute bottom-1/3 left-20 text-4xl opacity-15 animate-bounce delay-1200">🌿</div>

                {/* Gradient orbs */}
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-[#9C8CB9]/20 to-[#6C5F8D]/25 rounded-full blur-3xl animate-pulse delay-1500"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-16">

                {/* Hero Section */}
                <div className="text-center space-y-8">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40"></div>
                            <div className="relative w-24 h-24 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-3xl flex items-center justify-center shadow-2xl">
                                <Sparkles className="w-12 h-12 text-[#DCD7D5] animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                            Bloom & Blossom
                        </h1>
                        <p className="text-xl md:text-2xl text-[#4B3F6E] dark:text-[#DCD7D5] font-medium">
                            Where Every Petal Tells a Story
                        </p>
                        <p className="text-lg text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-3xl mx-auto leading-relaxed">
                            For over two decades, we've been crafting moments of beauty and joy through the timeless art of floriculture. 
                            From intimate bouquets to grand celebrations, we believe every flower has the power to transform ordinary moments into extraordinary memories.
                        </p>
                    </div>
                </div>

                {/* Our Story Section */}
                <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-3xl p-8 md:p-12 space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                            Our Story
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-[#9C8CB9]/20 to-[#6C5F8D]/30 rounded-2xl p-6 border border-[#BA96C1]/20">
                                <Quote className="w-8 h-8 text-[#6C5F8D] dark:text-[#BA96C1] mb-4" />
                                <p className="text-[#4B3F6E] dark:text-[#DCD7D5] italic text-lg leading-relaxed">
                                    "What started as a small passion project in my grandmother's garden has blossomed into a thriving community of flower lovers. 
                                    Every arrangement we create carries the love and tradition passed down through generations."
                                </p>
                                <div className="mt-4 flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#BA96C1] to-[#9C8CB9] rounded-full flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">Isabella Rose</p>
                                        <p className="text-sm text-[#6C5F8D] dark:text-[#BA96C1]">Founder & Head Florist</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">
                            <p>
                                Founded in 2003, Bloom & Blossom began as a dream to bring the beauty of nature into people's everyday lives. 
                                What started in a small greenhouse has grown into a premier floral destination, serving thousands of satisfied customers across the region.
                            </p>
                            <p>
                                Our journey has been one of continuous growth and learning. We've weathered seasons of change, celebrated countless milestones, 
                                and built lasting relationships with flower farms, local growers, and most importantly, our wonderful customers.
                            </p>
                            <p>
                                Today, we operate from our beautiful 5,000 square foot facility, complete with state-of-the-art cold storage, 
                                a fully equipped design studio, and our signature greenhouse where we nurture specialty varieties.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                            Our Values
                        </h2>
                        <p className="text-lg text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-2xl mx-auto">
                            These core principles guide everything we do, from sourcing the finest flowers to creating unforgettable experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl p-6 text-center space-y-4 hover:shadow-2xl hover:shadow-[#9C8CB9]/30 transition-all duration-300 hover:scale-105">
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">{value.title}</h3>
                                <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-3xl p-8 md:p-12 space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-2xl mx-auto">
                            Our passionate team of floral artists and experts who make the magic happen every day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gradient-to-br from-[#DCD7D5]/30 to-[#BA96C1]/20 dark:from-[#6C5F8D]/20 dark:to-[#9C8CB9]/30 rounded-2xl p-6 border border-[#BA96C1]/20 dark:border-[#9C8CB9]/30 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#BA96C1] to-[#9C8CB9] rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">{member.name}</h3>
                                            <p className="text-[#6C5F8D] dark:text-[#BA96C1] font-medium">{member.role}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm">
                                            <span className="bg-[#6C5F8D]/20 dark:bg-[#BA96C1]/20 text-[#4B3F6E] dark:text-[#DCD7D5] px-3 py-1 rounded-full">
                                                {member.experience}
                                            </span>
                                            <span className="text-[#6C5F8D] dark:text-[#BA96C1]">{member.specialty}</span>
                                        </div>
                                        <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Section */}
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                            Our Services
                        </h2>
                        <p className="text-lg text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 max-w-2xl mx-auto">
                            From intimate occasions to grand celebrations, we offer comprehensive floral services to make your special moments bloom.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-xl shadow-[#BA96C1]/10 dark:shadow-[#4B3F6E]/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#9C8CB9]/30 transition-all duration-300">
                                <div className="p-6 space-y-4">
                                    <h3 className="text-2xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">{service.title}</h3>
                                    <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">{service.description}</p>
                                    <div className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full"></div>
                                                <span className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl font-black">Our Journey in Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center space-y-2">
                                <div className="text-4xl md:text-5xl font-black">20+</div>
                                <div className="text-white/90">Years of Excellence</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-4xl md:text-5xl font-black">50K+</div>
                                <div className="text-white/90">Happy Customers</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-4xl md:text-5xl font-black">500+</div>
                                <div className="text-white/90">Weddings Designed</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-4xl md:text-5xl font-black">50+</div>
                                <div className="text-white/90">Flower Varieties</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}