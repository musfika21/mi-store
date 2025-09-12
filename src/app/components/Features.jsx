import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Gift, Heart, Shield, Sparkles, Star, Truck, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Same Day Delivery",
      description: "Fresh flowers delivered within hours to ensure maximum beauty and fragrance for your special moments.",
      gradient: "from-[#6C5F8D] to-[#9C8CB9]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Freshness Guarantee",
      description: "Our flowers are sourced directly from premium growers and come with a 7-day freshness promise.",
      gradient: "from-[#9C8CB9] to-[#BA96C1]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Florists",
      description: "Professional arrangements crafted by skilled florists with years of experience in floral design.",
      gradient: "from-[#BA96C1] to-[#6C5F8D]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Custom Arrangements",
      description: "Personalized bouquets tailored to your preferences, occasions, and the message you want to convey.",
      gradient: "from-[#4B3F6E] to-[#9C8CB9]"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Perfect arrangements for weddings, anniversaries, birthdays, and all of life's beautiful moments.",
      gradient: "from-[#6C5F8D] to-[#BA96C1]"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Only the finest flowers make it to our collection, ensuring every petal meets our high standards.",
      gradient: "from-[#9C8CB9] to-[#4B3F6E]"
    }
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/20 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">
      
      {/* Animated background elements - matching Hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating flowers */}
        <div className="absolute top-20 left-10 text-6xl opacity-15 animate-bounce delay-300">🌸</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-pulse delay-700">🌺</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-15 animate-bounce delay-1000">🌻</div>
        <div className="absolute top-1/3 right-10 text-3xl opacity-20 animate-pulse delay-500">🌷</div>
        <div className="absolute bottom-20 right-1/3 text-4xl opacity-15 animate-bounce delay-200">🌹</div>
        <div className="absolute top-2/3 left-20 text-4xl opacity-20 animate-pulse delay-800">🌼</div>
        
        {/* Gradient orbs - matching Hero */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-[#BA96C1]/15 to-[#9C8CB9]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#6C5F8D]/10 to-[#BA96C1]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-[#9C8CB9]/15 to-[#6C5F8D]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 dark:from-[#9C8CB9]/30 dark:to-[#BA96C1]/20 px-6 py-3 border border-[#BA96C1]/40 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#6C5F8D] dark:text-[#BA96C1]" />
            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
            Exceptional Flower Experience
          </h2>
          
          <p className="text-lg lg:text-xl text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed">
            We go beyond just delivering flowers – we create moments of joy, express emotions, 
            and bring nature's beauty directly to your world with unmatched quality and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/60 dark:bg-[#4B3F6E]/40 backdrop-blur-sm border border-[#BA96C1]/30 dark:border-[#9C8CB9]/40 p-8 hover:bg-white/80 dark:hover:bg-[#4B3F6E]/60 hover:shadow-2xl hover:shadow-[#BA96C1]/25 transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BA96C1]/8 to-[#9C8CB9]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-[#4B3F6E] dark:text-[#DCD7D5] mb-4 group-hover:text-[#6C5F8D] dark:group-hover:text-[#BA96C1] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn more link */}
                <div className="flex items-center space-x-2 text-[#6C5F8D] dark:text-[#BA96C1] font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>

              {/* Active state indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C5F8D] to-[#9C8CB9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <Button className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Explore Our Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  )
}