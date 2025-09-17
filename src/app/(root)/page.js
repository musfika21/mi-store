import { HeroSection } from "../components/Hero"
import { FeaturesSection } from "../components/Features"
import { TestimonialsSection } from "../components/Testimonials"
import { FAQSection } from "../components/FAQ"
import { CTASection } from "../components/CTA"
import RecentFlowers from "../components/RecentFlowers"


export default function Page() {

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection/>
      <FAQSection/>
      <CTASection/>
      <RecentFlowers/>
    </>

  )
}
