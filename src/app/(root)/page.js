"use client"
import { useState } from "react"
import { HeroSection } from "../components/Hero"
import { FeaturesSection } from "../components/Features"
import { TestimonialsSection } from "../components/Testimonials"
import { FAQSection } from "../components/FAQ"
import { CTASection } from "../components/CTA"


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
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection/>
      <FAQSection/>
      <CTASection/>
    </>

  )
}
