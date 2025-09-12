"use client"

import Link from "next/link"
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
import { FcGoogle } from "react-icons/fc"
import { FaFacebook, FaApple } from "react-icons/fa"

// Sign In Component
export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden">

            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse delay-300">🌸</div>
                <div className="absolute top-1/3 right-20 text-4xl opacity-15 animate-bounce delay-700">🌺</div>
                <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-pulse delay-1000">🌻</div>
                <div className="absolute bottom-20 right-10 text-3xl opacity-15 animate-bounce delay-500">🌷</div>

                {/* Gradient orbs */}
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="w-full max-w-md mx-auto p-6 relative z-10">

                {/* Sign In Card */}
                <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 p-8 space-y-8">

                    {/* Header */}
                    <div className="text-center space-y-4">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-[#DCD7D5] animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                                Welcome Back
                            </h1>
                            <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70 mt-2">
                                Sign in to your account to continue your flower journey
                            </p>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3"
                            >
                                <FcGoogle className="w-5 h-5 text-[#6C5F8D] dark:text-[#BA96C1]" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3"
                            >
                                <FaFacebook className="w-5 h-5 text-[#6C5F8D] dark:text-[#BA96C1]" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="border-[#BA96C1]/30 hover:bg-[#BA96C1]/10 dark:hover:bg-[#9C8CB9]/20 p-3"
                            >
                                <FaApple className="w-5 h-5 text-[#6C5F8D] dark:text-[#BA96C1]" />
                            </Button>
                        </div>

                        {/* Divider */}
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

                    {/* Sign In Form */}
                    <div className="space-y-6">

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
                                    className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-12 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <Eye className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-[#6C5F8D] bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 focus:ring-[#9C8CB9]/50 focus:ring-2"
                                />
                                <span className="text-sm text-[#4B3F6E] dark:text-[#DCD7D5]">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-3 px-6 shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-[1.02]">
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Sign In</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center pt-4 border-t border-[#BA96C1]/20">
                        <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">
                            Don't have an account?{" "}
                            <Link
                                href="/register"
                                className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200"
                            >
                                Create account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}