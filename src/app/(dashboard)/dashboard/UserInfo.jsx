"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { User, ArrowRight } from "lucide-react"
import { useAuth } from "@/lib/AuthContext"

export default function UserInfo() {
  const { isLoggedIn, userEmail } = useAuth()
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUserData() {
      if (isLoggedIn && userEmail) {
        try {
          setLoading(true)
          const response = await fetch(`/api/user?email=${encodeURIComponent(userEmail)}`)
          if (!response.ok) {
            throw new Error("Failed to fetch user data")
          }
          const data = await response.json()
          setUserData(data)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      } else {
        setError("Please sign in to view your information")
        setLoading(false)
      }
    }
    fetchUserData()
  }, [isLoggedIn, userEmail])

  if (loading) {
    return (
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
          <div className="animate-pulse text-[#6C5F8D] dark:text-[#BA96C1] text-xl font-semibold">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  if (error || !isLoggedIn) {
    return (
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
          <div className="text-center">
            <p className="text-[#6C5F8D] dark:text-[#BA96C1] text-lg font-semibold mb-4">
              {error || "You are not logged in"}
            </p>
            <a href="/sign-in">
              <Button
                className="group bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] hover:from-[#4B3F6E] hover:to-[#6C5F8D] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="relative max-w-2xl mx-auto bg-[#DCD7D5]/70 dark:bg-[#4B3F6E]/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#BA96C1]/20 dark:shadow-[#4B3F6E]/40 border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BA96C1]/20 via-[#9C8CB9]/30 to-[#6C5F8D]/20 blur-xl -z-10 animate-pulse"></div>

        {/* Floating orbs decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-10 w-2 h-2 bg-[#BA96C1] rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-6 right-12 w-1 h-1 bg-[#9C8CB9] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-[#6C5F8D] rounded-full animate-bounce delay-300 opacity-50"></div>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative w-16 h-16 bg-gradient-to-br from-[#9C8CB9] to-[#6C5F8D] rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-[#DCD7D5] animate-pulse" />
            </div>
            <div>
              <h1 className="font-black text-2xl bg-gradient-to-r from-[#6C5F8D] via-[#4B3F6E] to-[#9C8CB9] dark:from-[#9C8CB9] dark:via-[#BA96C1] dark:to-[#DCD7D5] bg-clip-text text-transparent">
                {userData?.firstName} {userData?.lastName}
              </h1>
              <div className="w-full h-0.5 bg-gradient-to-r from-[#6C5F8D] to-[#BA96C1] rounded-full mt-1"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="group relative p-4 bg-gradient-to-r from-[#9C8CB9]/10 to-transparent rounded-lg border-l-4 border-[#6C5F8D] hover:border-[#BA96C1]/50 hover:bg-gradient-to-r hover:from-[#BA96C1]/10 hover:to-transparent transition-all duration-300">
              <h2 className="text-[#4B3F6E] dark:text-[#DCD7D5] font-semibold">Email</h2>
              <p className="text-[#6C5F8D] dark:text-[#BA96C1]">{userData?.email}</p>
            </div>
            <div className="group relative p-4 bg-gradient-to-r from-[#9C8CB9]/10 to-transparent rounded-lg border-l-4 border-[#6C5F8D] hover:border-[#BA96C1]/50 hover:bg-gradient-to-r hover:from-[#BA96C1]/10 hover:to-transparent transition-all duration-300">
              <h2 className="text-[#4B3F6E] dark:text-[#DCD7D5] font-semibold">Joined</h2>
              <p className="text-[#6C5F8D] dark:text-[#BA96C1]">
                {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              className="group bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] hover:from-[#4B3F6E] hover:to-[#6C5F8D] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105"
              onClick={() => alert("Edit Profile (Placeholder)")}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Edit Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}