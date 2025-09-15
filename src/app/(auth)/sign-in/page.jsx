// app/sign-in/page.jsx
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import LoginForm from './components/LoginForm';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const router = useRouter();

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const response = await axios.post('/api/auth/google', {
                    token: tokenResponse.access_token,
                });
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    router.push('/dashboard');
                } else {
                    console.error('Google Sign-In failed:', response.data.message);
                }
            } catch (error) {
                console.error('Google Sign-In error:', error.message);
            }
        },
        onError: (error) => {
            console.error('Google Sign-In failed:', error);
        },
        flow: 'implicit',
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/30 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40 relative overflow-hidden py-8">
            <div className="w-full max-w-lg lg:max-w-4/5 mx-auto p-6 relative z-10">
                <div className="bg-white/95 dark:bg-[#4B3F6E]/90 backdrop-blur-xl border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 rounded-2xl p-8 space-y-8">
                    <div className="text-center space-y-4">
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
                                Welcome Back
                            </h1>
                            <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70 mt-2">
                                Sign in to continue your flower journey
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => login()}
                                className="flex items-center space-x-2 text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-[#BA96C1]/20 dark:hover:bg-[#9C8CB9]/20"
                            >
                                <FcGoogle className="w-5 h-5" />
                                <span>Sign in with Google</span>
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#BA96C1]/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-[#4B3F6E] text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60">
                                    Or sign in with email
                                </span>
                            </div>
                        </div>
                    </div>
                    <LoginForm />
                    <div className="text-center pt-4 border-t border-[#BA96C1]/20">
                        <p className="text-[#4B3F6E]/70 dark:text-[#DCD7D5]/70">
                            Don’t have an account?{" "}
                            <a
                                href="/sign-up"
                                className="text-[#6C5F8D] dark:text-[#BA96C1] hover:text-[#4B3F6E] dark:hover:text-[#DCD7D5] font-semibold transition-colors duration-200"
                            >
                                Sign up here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}