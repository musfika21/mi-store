"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Home,
    Search,
    ArrowLeft,
    Flower,
    Flower2,
    Cherry,
    RefreshCw,
    Mail
} from "lucide-react";
import Link from "next/link";

export default function FloralNotFound() {

    const handleGoBack = () => {
        // Go back in browser history
        window.history.back();
    };

    const handleSearch = () => {
        // Open search functionality
        console.log('Opening search...');
    };

    const handleContact = () => {
        // Contact support
        console.log('Opening contact support...');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F8F6FF] via-[#FDF2F8] to-[#FEF7ED] dark:from-[#1F1B29] dark:via-[#2D1B36] dark:to-[#3A2545] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl mx-auto text-center space-y-8">

                {/* Decorative Flowers */}
                <div className="relative">
                    <div className="absolute -top-10 -left-10 opacity-20 animate-bounce">
                        <Flower className="w-16 h-16 text-[#BA96C1] transform rotate-12" />
                    </div>
                    <div className="absolute -top-8 -right-8 opacity-30 animate-pulse">
                        <Flower2 className="w-12 h-12 text-[#9C8CB9] transform -rotate-12" />
                    </div>
                    <div className="absolute -bottom-12 left-1/4 opacity-25 animate-bounce delay-300">
                        <Cherry className="w-10 h-10 text-[#BA96C1] transform rotate-45" />
                    </div>
                </div>

                {/* Main Card */}
                <Card className="border-0 shadow-2xl bg-white/70 dark:bg-[#2D1B36]/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl">

                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <div className="text-[180px] md:text-[220px] font-bold bg-gradient-to-r from-[#BA96C1] to-[#9C8CB9] bg-clip-text text-transparent leading-none opacity-90">
                            404
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5]">
                            Oops! Flower Not Found
                        </h1>
                        <p className="text-lg text-[#6C5F8D] dark:text-[#BA96C1] max-w-2xl mx-auto leading-relaxed">
                            It seems like the beautiful bloom you're looking for has been picked by someone else,
                            or perhaps it's hiding in a different garden. Don't worry, there are plenty more flowers to discover!
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link href="/">
                            <Button
                                className="bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] hover:from-[#4B3F6E] hover:to-[#9C8CB9] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Return to Home
                            </Button>
                        </Link>

                        <Button
                            onClick={handleGoBack}
                            variant="outline"
                            className="border-[#BA96C1]/30 text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-[#BA96C1]/10 px-8 py-3 rounded-xl transition-all duration-300 cursor-pointer"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Go Back
                        </Button>
                    </div>
                </Card>

                {/* Footer Message */}
                <p className="text-[#6C5F8D] dark:text-[#BA96C1] text-sm opacity-75">
                    "Every flower is a soul blossoming in nature" - Let's find yours together
                </p>
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#BA96C1] rounded-full animate-ping opacity-30"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#9C8CB9] rounded-full animate-pulse opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#BA96C1] rounded-full animate-bounce opacity-20"></div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
        </div>
    );
}