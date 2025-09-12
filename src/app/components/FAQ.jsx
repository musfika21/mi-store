import { ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import { useState } from "react"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "How fresh are your flowers?",
      answer: "All our flowers are sourced directly from premium growers and are typically cut within 24-48 hours before delivery. We guarantee 7-day freshness from the day you receive them."
    },
    {
      question: "What areas do you deliver to?",
      answer: "We currently deliver to major cities across the US. Same-day delivery is available within metropolitan areas, while next-day delivery covers suburban and rural locations."
    },
    {
      question: "Can I schedule deliveries in advance?",
      answer: "Absolutely! You can schedule deliveries up to 30 days in advance. This is perfect for special occasions, anniversaries, or setting up recurring deliveries for loved ones."
    },
    {
      question: "Do you offer custom arrangements?",
      answer: "Yes, our expert florists can create custom arrangements tailored to your preferences, color scheme, and occasion. Contact us at least 24 hours in advance for custom orders."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "We stand behind our quality with a 100% satisfaction guarantee. If you're not completely happy with your flowers, contact us within 24 hours and we'll make it right."
    },
    {
      question: "Do you offer subscription services?",
      answer: "Yes! Our subscription service allows you to receive fresh flowers weekly, bi-weekly, or monthly. Perfect for keeping your home or office looking beautiful year-round."
    }
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/20 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-5xl opacity-15 animate-bounce delay-300">❓</div>
        <div className="absolute bottom-32 right-20 text-4xl opacity-20 animate-pulse delay-700">💡</div>
        <div className="absolute top-1/2 right-10 text-3xl opacity-15 animate-bounce delay-1000">🤔</div>
        
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/15 to-[#9C8CB9]/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 dark:from-[#9C8CB9]/30 dark:to-[#BA96C1]/20 px-6 py-3 border border-[#BA96C1]/40 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#6C5F8D] dark:text-[#BA96C1]" />
            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
              Get Answers
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg lg:text-xl text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">
            Find answers to common questions about our flowers, delivery, and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-[#4B3F6E]/40 backdrop-blur-sm border border-[#BA96C1]/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/80 dark:hover:bg-[#4B3F6E]/60 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-[#4B3F6E] dark:text-[#DCD7D5] pr-4">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-[#6C5F8D] dark:text-[#BA96C1] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#6C5F8D] dark:text-[#BA96C1] flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-[#BA96C1]/20">
                  <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
