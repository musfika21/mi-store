"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X, Sparkles, ArrowRight, LogOut } from "lucide-react";
import axios from "axios";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("/");
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home", icon: "🏠" },
        { href: "/about", label: "About", icon: "✨" },
        { href: "/contact", label: "Contact", icon: "💌" },
    ];

    // Fetch user
    const fetchUser = useCallback(async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null);
                setIsLoading(false);
                return;
            }

            const response = await axios.get("/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200 && response.data.user) {
                setUser(response.data.user);
            } else {
                setUser(null);
                localStorage.removeItem("token");
            }
        } catch (error) {
            console.error("Error fetching user:", error.message);
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        setActiveItem(pathname);
        fetchUser();
    }, [pathname, fetchUser]);

    // Logout
    const handleLogout = async () => {
        try {
            localStorage.removeItem("token");
            await axios.post("/api/auth/logout");
            setUser(null);
            setActiveItem("/");
            setIsMenuOpen(false);
            router.push("/");
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#DCD7D5]/70 dark:bg-[#4B3F6E]/80 border-b border-[#BA96C1]/30 dark:border-[#9C8CB9]/40">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center space-x-3 hover:scale-105 transition-all"
                            onClick={() => setActiveItem("/")}
                        >
                            <div className="relative w-10 h-10 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center shadow-lg">
                                <Sparkles className="w-5 h-5 text-[#DCD7D5] animate-pulse" />
                            </div>
                            <h1 className="font-black text-2xl bg-gradient-to-r from-[#6C5F8D] via-[#4B3F6E] to-[#9C8CB9] bg-clip-text text-transparent">
                                MI Store
                            </h1>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setActiveItem(item.href)}
                                    className={`text-sm font-semibold transition-all px-4 py-3 ${
                                        activeItem === item.href
                                            ? "text-[#6C5F8D] dark:text-[#BA96C1]"
                                            : "text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D]"
                                    }`}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            ))}

                            {/* Show only when user is logged in */}
                            {user && !isLoading && (
                                <Link
                                    href="/dashboard"
                                    onClick={() => setActiveItem("/dashboard")}
                                    className={`text-sm font-semibold px-4 py-3 ${
                                        activeItem === "/dashboard"
                                            ? "text-[#6C5F8D] dark:text-[#BA96C1]"
                                            : "text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D]"
                                    }`}
                                >
                                    📊 Dashboard
                                </Link>
                            )}
                        </nav>

                        <div className="hidden lg:flex items-center space-x-4">
    {isLoading ? (
        // Loading placeholder instead of showing Sign In or profile image
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
    ) : user ? (
        <>
            <Link href="/profile" title={user.firstName || "Profile"}>
                <img
                    src={user.profilePhoto || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#6C5F8D]"
                />
            </Link>
            <Link href="/dashboard">
                <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                        pathname === "/dashboard"
                            ? "text-[#6C5F8D] dark:text-[#BA96C1]"
                            : "text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D]"
                    }`}
                >
                    📊 Dashboard
                </Button>
            </Link>
            <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D]"
            >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
            </Button>
        </>
    ) : (
        <Link href="/sign-in">
            <Button
                variant="ghost"
                size="sm"
                className="text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D]"
            >
                Sign In
            </Button>
        </Link>
    )}
    <ModeToggle />
</div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center space-x-3">
                            <ModeToggle />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-4">
                            <nav className="flex flex-col space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setActiveItem(item.href);
                                        }}
                                        className={`px-6 py-3 ${
                                            activeItem === item.href
                                                ? "text-[#6C5F8D]"
                                                : "text-[#4B3F6E] dark:text-[#DCD7D5]"
                                        }`}
                                    >
                                        {item.icon} {item.label}
                                    </Link>
                                ))}

                                {/* Only show when user logged in */}
                                {user && !isLoading && (
                                    <Link
                                        href="/dashboard"
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-6 py-3 ${
                                            activeItem === "/dashboard"
                                                ? "text-[#6C5F8D]"
                                                : "text-[#4B3F6E] dark:text-[#DCD7D5]"
                                        }`}
                                    >
                                        📊 Dashboard
                                    </Link>
                                )}

                                {/* Bottom user/sign in */}
                                <div className="pt-4 border-t">
                                    {isLoading ? (
                                        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse mx-auto"></div>
                                    ) : user ? (
                                        <>
                                            <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                                                <div className="flex items-center space-x-3 px-6 py-3">
                                                    <img
                                                        src={user.profilePhoto || "https://via.placeholder.com/40"}
                                                        alt="Profile"
                                                        className="w-8 h-8 rounded-full border-2 border-[#6C5F8D]"
                                                    />
                                                    <span>{user.firstName || "Profile"}</span>
                                                </div>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                onClick={handleLogout}
                                                className="w-full mt-2"
                                            >
                                                <LogOut className="w-4 h-4 mr-2" />
                                                Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                                            <Button variant="outline" className="w-full mt-2">
                                                Sign In
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
