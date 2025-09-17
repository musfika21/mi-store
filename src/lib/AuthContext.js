"use client"

import { createContext, useContext } from "react"
import { useLocalStorage } from "./useLocalStorage"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn, isLoginLoaded] = useLocalStorage('isLoggedIn', false)
  const [userEmail, setUserEmail, isEmailLoaded] = useLocalStorage('userEmail', null)

  const login = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserEmail(null)
  }

  // Show loading until both values are loaded
  if (!isLoginLoaded || !isEmailLoaded) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}