import { Sun, Moon, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart, Link, Sparkles } from 'lucide-react';

const Footer = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#DCD7D5] via-[#9C8CB9] to-[#BA96C1] dark:from-[#4B3F6E] dark:via-[#6C5F8D] dark:to-[#9C8CB9] text-black dark:text-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/15 blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/10 blur-lg"></div>
                </div>

                <div className="z-10 max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand section */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                {/* Logo with magical elements */}
                                <div
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
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed mb-6 opacity-90">
                                Creating beautiful moments with fresh, handcrafted floral arrangements.
                                From weddings to everyday celebrations, we bring nature's beauty to your special occasions.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 bg-white/20 dark:bg-white/10 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="p-2 bg-white/20 dark:bg-white/10 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="p-2 bg-white/20 dark:bg-white/10 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['Fresh Flowers', 'Wedding Bouquets', 'Corporate Events', 'Seasonal Arrangements', 'Gift Cards', 'About Us'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:text-[#BA96C1] dark:hover:text-[#DCD7D5] transition-all duration-300 hover:translate-x-1 inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                {['Same Day Delivery', 'Custom Designs', 'Event Planning', 'Subscription Boxes', 'Flower Care Tips', 'Workshops'].map((service) => (
                                    <li key={service}>
                                        <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:text-[#BA96C1] dark:hover:text-[#DCD7D5] transition-all duration-300 hover:translate-x-1 inline-block">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <MapPin size={16} className="text-[#5b4160] dark:text-[#DCD7D5] flex-shrink-0" />
                                    <span className="text-sm opacity-90">
                                        2004 Flower Street<br />
                                        Garden City, GC 12345
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone size={16} className="text-[#5b4160] dark:text-[#DCD7D5] flex-shrink-0" />
                                    <span className="text-sm opacity-90">(555) 123-FLOWER</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail size={16} className="text-[#5b4160] dark:text-[#DCD7D5] flex-shrink-0" />
                                    <span className="text-sm opacity-90">musfikaiqfatmomo21@gmail.com</span>
                                </div>
                            </div>

                            {/* Newsletter signup */}
                            <div className="mt-6">
                                <h5 className="font-medium mb-2">Stay Blooming</h5>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-3 py-2 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#BA96C1] dark:focus:ring-[#DCD7D5] focus:bg-white/30 dark:focus:bg-white/20"
                                    />
                                    <button className="px-4 py-2 bg-[#5b4160] text-white hover:bg-[#9C8CB9] dark:bg-[#9C8CB9] dark:hover:bg-[#BA96C1] rounded-lg text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="mt-12 pt-8 border-t border-white/20 dark:border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-sm opacity-75">
                                © 2025 MI Store. All rights reserved.
                            </div>
                            <div className="flex items-center space-x-4 text-sm opacity-75">
                                <a href="#" className="hover:opacity-100 hover:text-[#BA96C1] dark:hover:text-[#DCD7D5] transition-all duration-300">Privacy Policy</a>
                                <span>•</span>
                                <a href="#" className="hover:opacity-100 hover:text-[#BA96C1] dark:hover:text-[#DCD7D5] transition-all duration-300">Terms of Service</a>
                                <span>•</span>
                                <div className="flex items-center space-x-1">
                                    <span>Made with</span>
                                    <Heart size={12} className="text-red-300 fill-current" />
                                    <span>for flower lovers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;