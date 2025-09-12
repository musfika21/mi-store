"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Sparkles, ArrowRight } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("/")

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "✨" },
    { href: "/contact", label: "Contact", icon: "💌" },
  ]

  return (
    <>
      {/* Animated background glow */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-[#BA96C1]/20 via-[#9C8CB9]/30 to-[#6C5F8D]/20 blur-xl -z-10 animate-pulse"></div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#DCD7D5]/70 dark:bg-[#4B3F6E]/80 border-b border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40">
        {/* Floating orbs decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-20 w-2 h-2 bg-[#BA96C1] rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-4 right-32 w-1 h-1 bg-[#9C8CB9] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-2 left-1/3 w-1.5 h-1.5 bg-[#6C5F8D] rounded-full animate-bounce delay-300 opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex h-20 items-center justify-between">

            {/* Logo with magical elements */}
            <Link
              href="/"
              className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-[#DCD7D5] animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="font-black text-2xl bg-gradient-to-r from-[#6C5F8D] via-[#4B3F6E] to-[#9C8CB9] dark:from-[#9C8CB9] dark:via-[#BA96C1] dark:to-[#DCD7D5] bg-clip-text text-transparent">
                  MI Store
                </h1>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] transition-all duration-500 rounded-full"></div>
              </div>
            </Link>

            {/* Desktop Navigation with clean underline style */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className={`relative text-sm font-semibold transition-all duration-300 group flex items-center space-x-2 px-4 py-3 ${activeItem === item.href
                    ? 'text-[#6C5F8D] dark:text-[#BA96C1]'
                    : 'text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D] dark:hover:text-[#BA96C1]'
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>

                  {/* Active state underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] transform origin-left transition-all duration-300 ${activeItem === item.href
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0'
                    }`}></div>

                  {/* Hover underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#BA96C1]/50 to-[#9C8CB9]/50 transform origin-left transition-all duration-300 ${activeItem === item.href
                    ? 'scale-x-0'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`}></div>

                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#BA96C1]/5 to-[#9C8CB9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Right side with premium buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] hover:bg-[#BA96C1]/20 dark:hover:bg-[#9C8CB9]/20 font-medium cursor-pointer"
                >
                  Sign In
                </Button>
              </Link>

              <Button
                className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105 border-0"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Dashboard</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#BA96C1] to-transparent opacity-50"></div>
              <ModeToggle />
            </div>

            {/* Mobile menu controls */}
            <div className="lg:hidden flex items-center space-x-3">
              <ModeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 text-[#4B3F6E] dark:text-[#DCD7D5] hover:text-[#6C5F8D] dark:hover:text-[#BA96C1] hover:bg-[#BA96C1]/20 dark:hover:bg-[#9C8CB9]/20 rounded-xl transition-all duration-200"
              >
                <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation with clean geometric style */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="pb-6 pt-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false)
                      setActiveItem(item.href)
                    }}
                    className={`group relative flex items-center space-x-4 px-6 py-4 transition-all duration-300 hover:translate-x-2 border-l-4 ${activeItem === item.href
                      ? 'border-l-[#6C5F8D] bg-gradient-to-r from-[#9C8CB9]/10 to-transparent text-[#6C5F8D] dark:text-[#BA96C1]'
                      : 'border-l-transparent text-[#4B3F6E] dark:text-[#DCD7D5] hover:border-l-[#BA96C1]/50 hover:bg-gradient-to-r hover:from-[#BA96C1]/5 hover:to-transparent'
                      }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms both` : ''
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-lg">{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-auto" />

                    {/* Active state indicator */}
                    {activeItem === item.href && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#6C5F8D] to-[#9C8CB9] opacity-80"></div>
                    )}
                  </Link>
                ))}

                <div className="pt-4 space-y-3 border-t border-[#BA96C1]/20 mt-4">
                  <Link href="/sign-in">
                    <Button
                      variant="outline"
                      className="w-full border-[#9C8CB9] text-[#4B3F6E] dark:text-[#DCD7D5] hover:bg-[#BA96C1]/20 dark:hover:bg-[#9C8CB9]/20 py-3 font-semibold cursor-pointer mb-2"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Button
                    className="w-full bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] hover:from-[#4B3F6E] hover:to-[#6C5F8D] text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Dashboard
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}