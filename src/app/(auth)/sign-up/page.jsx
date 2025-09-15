// app/sign-up/page.jsx
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import SignUpForm from './components/SignUpForm';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const router = useRouter();

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                setIsGoogleLoading(true);
                const response = await axios.post('/api/auth/google', {
                    token: tokenResponse.access_token,
                });
                localStorage.setItem('token', response.data.token);
                router.push('/dashboard');
            } catch (error) {
                console.error('Google Sign-In error:', error);
            } finally {
                setIsGoogleLoading(false);
            }
        },
        onError: (error) => {
            console.error('Google Sign-In failed:', error);
            setIsGoogleLoading(false);
        },
        flow: 'implicit',
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden p-4 sm:p-6 lg:p-8">

            {/* Enhanced Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated flower emojis - hidden on mobile for performance */}
                <div className="hidden sm:block">
                    <div className="absolute top-16 sm:top-20 left-4 sm:left-10 text-4xl sm:text-6xl opacity-10 animate-pulse delay-300">🌸</div>
                    <div className="absolute top-1/3 right-8 sm:right-20 text-3xl sm:text-4xl opacity-15 animate-bounce delay-700">🌺</div>
                    <div className="absolute bottom-24 sm:bottom-32 left-1/4 text-4xl sm:text-5xl opacity-10 animate-pulse delay-1000">🌻</div>
                    <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 text-2xl sm:text-3xl opacity-15 animate-bounce delay-500">🌷</div>
                    <div className="absolute top-1/2 left-4 sm:left-10 text-3xl sm:text-4xl opacity-10 animate-pulse delay-1500">🌹</div>
                    <div className="absolute top-8 sm:top-10 right-1/3 text-2xl sm:text-3xl opacity-15 animate-bounce delay-200">🏵️</div>
                </div>

                {/* Enhanced gradient orbs */}
                <div className="absolute top-1/4 right-1/3 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-72 md:w-96 sm:h-72 md:h-96 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-40 md:w-52 sm:h-40 md:h-52 bg-gradient-to-br from-[#9C8CB9]/20 to-[#DCD7D5]/30 rounded-full blur-xl sm:blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto relative z-10">
                <div className="bg-white/95 dark:bg-[#4B3F6E]/95 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                    
                    {/* Header */}
                    <div className="text-center space-y-4 sm:space-y-6">
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-2xl sm:rounded-3xl blur-sm opacity-40 animate-pulse"></div>
                                <div className="relative w-14 h-14 sm:w-16 lg:w-20 sm:h-16 lg:h-20 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg shadow-[#9C8CB9]/30">
                                    <Heart className="w-7 h-7 sm:w-8 lg:w-10 sm:h-8 lg:h-10 text-[#DCD7D5] animate-pulse" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent leading-tight">
                                Join Our Garden
                            </h1>
                            <p className="text-sm sm:text-base text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70 leading-relaxed max-w-md mx-auto">
                                Create your account and start your beautiful flower journey with us
                            </p>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex justify-center">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => login()}
                                disabled={isGoogleLoading}
                                className="w-full sm:w-auto min-w-[280px] group relative overflow-hidden bg-white dark:bg-[#4B3F6E]/50 border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 hover:border-[#9C8CB9]/50 dark:hover:border-[#BA96C1]/60 text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-[#DCD7D5]/20 dark:hover:bg-[#6C5F8D]/30 px-6 py-3 sm:py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                            >
                                <div className="flex items-center justify-center space-x-3">
                                    {isGoogleLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <FcGoogle className="w-5 h-5" />
                                    )}
                                    <span className="text-sm sm:text-base">
                                        {isGoogleLoading ? 'Signing up...' : 'Sign up with Google'}
                                    </span>
                                </div>
                            </Button>
                        </div>
                        
                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#BA96C1]/20 dark:border-[#9C8CB9]/30"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 sm:px-6 bg-white dark:bg-[#4B3F6E] text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60 font-medium">
                                    Or create account with email
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Form */}
                    <div className="space-y-6">
                        <SignUpForm />
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-4 sm:pt-6 border-t border-[#BA96C1]/20 dark:border-[#9C8CB9]/30">
                        <p className="text-sm sm:text-base text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70 leading-relaxed">
                            Already have an account?{" "}
                            <a
                                href="/sign-in"
                                className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-2 cursor-pointer"
                            >
                                Sign in here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}