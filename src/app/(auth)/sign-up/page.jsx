"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import SignUpForm from './components/SignUpForm';

// Sign Up Component
export default function SignUpPage() {
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

            <div className="w-full max-w-lg lg:max-w-4/5 mx-auto p-6 relative z-10">

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
                        <div className="flex justify-center">
                            <Button
                                type="button"
                                variant="outline"
                            >
                                <FcGoogle />
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
                    <SignUpForm/>

                    {/* Sign In Link */}
                    <div className="text-center pt-4 border-t border-[#BA96C1]/20">
                        <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">
                            Already have an account?{" "}
                            <a
                                href="/sign-in"
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