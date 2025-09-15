// components/SignUpForm.jsx
"use client";

import { RegisterUser } from '@/app/actions/auth/RegisterUsers';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, EyeOff, User, Lock, Mail, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            const response = await RegisterUser(formData);
            if (response.status === 201) {
                // Store JWT in localStorage or cookies
                localStorage.setItem('token', response.token);
                router.push('/dashboard'); // Redirect to dashboard
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                            First Name
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                <User className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 group-focus-within:text-[#6C5F8D] dark:group-focus-within:text-[#BA96C1] transition-colors duration-200" />
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full pl-10 pr-4 py-3.5 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-xl text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300 hover:border-[#9C8CB9]/50 dark:hover:border-[#BA96C1]/50"
                                placeholder="Enter first name"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                            Last Name
                        </label>
                        <div className="relative group">
                            <input
                                type="text"
                                name="lastName"
                                className="w-full px-4 py-3.5 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-xl text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300 hover:border-[#9C8CB9]/50 dark:hover:border-[#BA96C1]/50"
                                placeholder="Enter last name"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                        Email Address
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                            <Mail className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 group-focus-within:text-[#6C5F8D] dark:group-focus-within:text-[#BA96C1] transition-colors duration-200" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            className="w-full pl-10 pr-4 py-3.5 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-xl text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300 hover:border-[#9C8CB9]/50 dark:hover:border-[#BA96C1]/50"
                            placeholder="Enter your email"
                            required
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                        Password
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                            <Lock className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 group-focus-within:text-[#6C5F8D] dark:group-focus-within:text-[#BA96C1] transition-colors duration-200" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="w-full pl-10 pr-12 py-3.5 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-xl text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300 hover:border-[#9C8CB9]/50 dark:hover:border-[#BA96C1]/50"
                            placeholder="Create a strong password"
                            required
                            disabled={isLoading}
                            minLength={8}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center z-10 hover:bg-[#9C8CB9]/10 dark:hover:bg-[#BA96C1]/10 rounded-r-xl transition-colors duration-200"
                            disabled={isLoading}
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                            ) : (
                                <Eye className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                            )}
                        </button>
                    </div>
                    <p className="text-xs text-[#4B3F6E]/60 dark:text-[#DCD7D5]/60 mt-1">
                        Password must be at least 8 characters long
                    </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center justify-center space-x-3">
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Creating Account...</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-base">Create Account</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </>
                            )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                </div>
            </form>
        </div>
    );
}