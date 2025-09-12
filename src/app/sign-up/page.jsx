"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Phone,
    ArrowRight,
    Sparkles,
    Heart,
    CheckCircle,
    AlertCircle
} from "lucide-react";

// Mock icons for social login (using Unicode since react-icons isn't available)
const FcGoogle = () => <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>;
const FaFacebook = () => <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">f</div>;
const FaApple = () => <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">🍎</div>;

// Sign Up Component
export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        subscribeNewsletter: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden py-8">

            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse delay-300">🌸</div>
                <div className="absolute top-1/3 right-20 text-4xl opacity-15 animate-bounce delay-700">🌺</div>
                <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-pulse delay-1000">🌻</div>
                <div className="absolute bottom-20 right-10 text-3xl opacity-15 animate-bounce delay-500">🌷</div>
                <div className="absolute top-1/2 left-10 text-4xl opacity-10 animate-pulse delay-1500">🌹</div>
                <div className="absolute top-10 right-1/3 text-3xl opacity-15 animate-bounce delay-200">🏵️</div>

                {/* Gradient orbs */}
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="w-full max-w-lg mx-auto p-6 relative z-10">

                {/* Sign Up Card */}
                <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-2xl p-8 space-y-8">

                    {/* Header */}
                    <div className="text-center space-y-4">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-[#DCD7D5] animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                                Join Our Garden
                            </h1>
                            <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70 mt-2">
                                Create your account and start your beautiful flower journey
                            </p>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3 transition-all duration-300"
                            >
                                <FcGoogle />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3 transition-all duration-300"
                            >
                                <FaFacebook />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3 transition-all duration-300"
                            >
                                <FaApple />
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#BA96C1]/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-[#4B3F6E] text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60">
                                    Or create account with email
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Form */}
                    <div className="space-y-6">

                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                    First Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                                    </div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                        placeholder="First name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                Email Address
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
                                    className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                Phone Number
                                <span className="text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 text-xs ml-1">(Optional)</span>
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
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Password Fields */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-12 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Create a password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? 
                                            <EyeOff className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" /> :
                                            <Eye className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                                        }
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CheckCircle className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-12 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Confirm your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showConfirmPassword ? 
                                            <EyeOff className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" /> :
                                            <Eye className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-4">
                            <label className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 mt-1 text-[#6C5F8D] bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded focus:ring-[#9C8CB9]/50 focus:ring-2"
                                />
                                <span className="text-sm text-[#4B3F6E] dark:text-[#DCD7D5] leading-relaxed">
                                    I agree to the{" "}
                                    <a href="#" className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200">
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>

                            <label className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    name="subscribeNewsletter"
                                    checked={formData.subscribeNewsletter}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#6C5F8D] bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded focus:ring-[#9C8CB9]/50 focus:ring-2"
                                />
                                <span className="text-sm text-[#4B3F6E] dark:text-[#DCD7D5]">
                                    Subscribe to our flower care newsletter
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button 
                            disabled={!formData.agreeToTerms}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Create Account</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                    </div>

                    {/* Sign In Link */}
                    <div className="text-center pt-4 border-t border-[#BA96C1]/20">
                        <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">
                            Already have an account?{" "}
                            <a
                                href="/signin"
                                className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200"
                            >
                                Sign in here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}