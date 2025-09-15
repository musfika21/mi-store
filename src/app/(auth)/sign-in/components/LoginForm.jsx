// app/sign-in/components/LoginForm.jsx
"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginUser } from '@/app/actions/auth/LoginUser';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            const response = await LoginUser(formData);
            if (response.status === 200) {
                localStorage.setItem('token', response.token);
                router.push('/dashboard');
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('An error occurred during login');
            console.error('Login error:', err);
        }
    };

    return (
        <div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            className="w-full pl-10 pr-4 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60" />
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="w-full pl-10 pr-12 py-3 bg-[#DCD7D5]/20 dark:bg-[#4B3F6E]/50 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 rounded-lg text-[#4B3F6E] dark:text-[#DCD7D5] placeholder-[#4B3F6E]/50 dark:placeholder-[#DCD7D5]/50 focus:outline-none focus:ring-2 focus:ring-[#9C8CB9]/50 focus:border-transparent transition-all duration-300"
                            placeholder="Enter password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                            ) : (
                                <Eye className="w-5 h-5 text-[#6C5F8D]/60 dark:text-[#BA96C1]/60 hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] transition-colors duration-200" />
                            )}
                        </button>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                </Button>
            </form>
        </div>
    );
}