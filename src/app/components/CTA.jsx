import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, Phone, Shield, Truck } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#DCD7D5] via-[#DCD7D5]/90 to-[#BA96C1]/20 dark:from-[#4B3F6E] dark:via-[#4B3F6E]/90 dark:to-[#6C5F8D]/40">

            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 text-6xl opacity-20 animate-bounce delay-300">🌹</div>
                <div className="absolute bottom-20 right-20 text-5xl opacity-25 animate-pulse delay-700">💝</div>
                <div className="absolute top-1/2 left-10 text-4xl opacity-20 animate-bounce delay-1000">✨</div>
                <div className="absolute top-1/3 right-10 text-3xl opacity-15 animate-pulse delay-500">🌺</div>

                {/* Large gradient orbs */}
                <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-gradient-to-l from-[#6C5F8D]/15 to-[#BA96C1]/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#BA96C1]/20 to-[#9C8CB9]/30 dark:from-[#9C8CB9]/30 dark:to-[#BA96C1]/20 px-6 py-3 border border-[#BA96C1]/40 backdrop-blur-sm mb-8">
                        <Gift className="w-4 h-4 text-[#6C5F8D] dark:text-[#BA96C1]" />
                        <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">
                            Special Offer
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#4B3F6E] via-[#6C5F8D] to-[#9C8CB9] dark:from-[#DCD7D5] dark:via-[#BA96C1] dark:to-[#9C8CB9] bg-clip-text text-transparent">
                        Ready to Brighten Someone's Day?
                    </h2>

                    <p className="text-xl lg:text-2xl text-[#4B3F6E]/80 dark:text-[#DCD7D5]/80 leading-relaxed mb-12 max-w-3xl mx-auto">
                        Get 20% off your first order and free same-day delivery.
                        Transform any moment into something extraordinary with our premium flower arrangements.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <Button className="group relative overflow-hidden bg-gradient-to-r from-[#6C5F8D] via-[#9C8CB9] to-[#BA96C1] hover:from-[#4B3F6E] hover:via-[#6C5F8D] hover:to-[#9C8CB9] text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-[#9C8CB9]/40 transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 flex items-center space-x-3">
                                <span>Shop Now & Save 20%</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>

                        <div className="flex items-center space-x-4 text-[#4B3F6E] dark:text-[#DCD7D5]">
                            <Phone className="w-5 h-5 text-[#6C5F8D] dark:text-[#BA96C1]" />
                            <span className="font-semibold">Call: (555) 123-BLOOM</span>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#6C5F8D] to-[#9C8CB9] flex items-center justify-center shadow-lg">
                                <Truck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">Same Day Delivery</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#9C8CB9] to-[#BA96C1] flex items-center justify-center shadow-lg">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">Freshness Guarantee</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#BA96C1] to-[#6C5F8D] flex items-center justify-center shadow-lg">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-[#4B3F6E] dark:text-[#DCD7D5]">Made with Love</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
