"use client"
import { useState } from "react"

export default function Page() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    if (!dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500 dark:text-blue-300">
        Hello Tailwind Dark Mode
      </h1>
      <button 
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}
