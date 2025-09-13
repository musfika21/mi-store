"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    ArrowRight,
    Sparkles,
    CheckCircle,
    Loader2
} from "lucide-react";

// Mock icons for demo (replace with actual imports in your project)
const FcGoogle = ({ className }) => <div className={`${className} bg-red-500 rounded flex items-center justify-center text-white text-xs`}>G</div>
const FaFacebook = ({ className }) => <div className={`${className} bg-blue-600 rounded flex items-center justify-center text-white text-xs`}>f</div>
const FaApple = ({ className }) => <div className={`${className} bg-black rounded flex items-center justify-center text-white text-xs`}>🍎</div>

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        
        setIsLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsLoading(false)
        console.log('Form submitted:', formData)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden px-4 py-8">

            {/* Enhanced Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating flowers - responsive sizing */}
                <div className="absolute top-10 sm:top-20 left-4 sm:left-10 text-3xl sm:text-6xl opacity-10 animate-pulse delay-300">🌸</div>
                <div className="absolute top-1/4 sm:top-1/3 right-8 sm:right-20 text-2xl sm:text-4xl opacity-15 animate-bounce delay-700">🌺</div>
                <div className="absolute bottom-20 sm:bottom-32 left-1/4 text-3xl sm:text-5xl opacity-10 animate-pulse delay-1000">🌻</div>
                <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 text-xl sm:text-3xl opacity-15 animate-bounce delay-500">🌷</div>
                <div className="absolute top-1/2 left-4 text-2xl sm:text-4xl opacity-10 animate-pulse delay-1500">🌿</div>

                {/* Enhanced gradient orbs with better responsiveness */}
                <div className="absolute top-1/4 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-[#9C8CB9]/10 to-[#BA96C1]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main container with better responsive padding */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto relative z-10">

                {/* Enhanced Sign In Card */}
                <div className="bg-white/95 dark:bg-[#4B3F6E]/95 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 sm:space-y-8 transition-all duration-300 hover:shadow-3xl hover:shadow-[#BA96C1]/30">

                    {/* Enhanced Header */}
                    <div className="text-center space-y-4">
                        {/* Enhanced Logo with animation */}
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#DCD7D5] animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent leading-tight">
                                Welcome Back
                            </h1>
                            <p className="text-sm sm:text-base text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70 mt-2">
                                Sign in to your account to continue your flower journey
                            </p>
                        </div>
                    </div>

                    {/* Enhanced Social Login */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3 h-12 transition-all duration-300 hover:scale-105 hover:border-[#BA96C1]/50"
                            >
                                <FcGoogle className="w-5 h-5" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3 h-12 transition-all duration-300 hover:scale-105 hover:border-[#BA96C1]/50"
                            >
                                <FaFacebook className="w-5 h-5" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3 h-12 transition-all duration-300 hover:scale-105 hover:border-[#BA96C1]/50"
                            >
                                <FaApple className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Enhanced Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#BA96C1]/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-[#4B3F6E] text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60">
                                    Or continue with email
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Sign In Form */}
                    <div className="space-y-6">

                        {/* Enhanced Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
                                Email Address
                                {formData.email && !errors.email && (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                )}
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className={`w-5 h-5 transition-colors duration-200 ${
                                        errors.email 
                                            ? 'text-red-500' 
                                            : formData.email && !errors.email 
                                            ? 'text-green-500' 
                                            : 'text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 group-focus-within:text-[#6C5F8D] dark:group-focus-within:text-[#BA96C1]'
                                    }`} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border rounded-xl transition-all duration-300 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:border-transparent ${
                                        errors.email
                                            ? 'border-red-300 focus:ring-red-200'
                                            : formData.email && !errors.email
                                            ? 'border-green-300 focus:ring-green-200'
                                            : 'border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 focus:ring-[#9C8CB9]/50'
                                    }`}
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <span className="w-3 h-3 rounded-full bg-red-500 text-white text-[8px] flex items-center justify-center">!</span>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Enhanced Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5] flex items-center gap-2">
                                Password
                                {formData.password && !errors.password && (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                )}
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className={`w-5 h-5 transition-colors duration-200 ${
                                        errors.password 
                                            ? 'text-red-500' 
                                            : formData.password && !errors.password 
                                            ? 'text-green-500' 
                                            : 'text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 group-focus-within:text-[#6C5F8D] dark:group-focus-within:text-[#BA96C1]'
                                    }`} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-12 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border rounded-xl transition-all duration-300 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:border-transparent ${
                                        errors.password
                                            ? 'border-red-300 focus:ring-red-200'
                                            : formData.password && !errors.password
                                            ? 'border-green-300 focus:ring-green-200'
                                            : 'border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 focus:ring-[#9C8CB9]/50'
                                    }`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-200"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <span className="w-3 h-3 rounded-full bg-red-500 text-white text-[8px] flex items-center justify-center">!</span>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Enhanced Remember Me & Forgot Password */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#6C5F8D] bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded focus:ring-[#9C8CB9]/50 focus:ring-2 transition-all duration-200"
                                />
                                <span className="text-sm text-[#4B3F6E] dark:text-[#DCD7D5] group-hover:text-[#6C5F8D] dark:group-hover:text-[#BA96C1] transition-colors duration-200">
                                    Remember me
                                </span>
                            </label>
                            <a
                                href="/forgot-password"
                                className="text-sm text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-all duration-200 hover:underline underline-offset-2"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Enhanced Submit Button */}
                        <Button 
                            type="button"
                            disabled={isLoading}
                            onClick={handleSubmit}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Signing In...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                    </div>

                    {/* Enhanced Sign Up Link */}
                    <div className="text-center pt-4 border-t border-[#BA96C1]/20">
                        <p className="text-sm sm:text-base text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">
                            Don't have an account?{" "}
                            <a
                                href="/sign-up"
                                className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-all duration-200 hover:underline underline-offset-2"
                            >
                                Create account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}