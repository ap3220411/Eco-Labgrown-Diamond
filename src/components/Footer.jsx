import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { FaGem, FaStar, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GiSparkles, GiCrown, GiGoldBar } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import logo from "../assets/footer.png";

const Footer = () => {
    return (
        <footer className="relative w-full bg-gradient-to-b from-[#faf9f7] to-[#f5f0e8] text-gray-800 overflow-hidden">
            {/* Light Diamond Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 30px 30px, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Floating Light Gold Elements */}
            <div className="absolute top-20 left-[5%] text-[#D4AF37]/20 animate-float">
                <IoDiamondOutline size={60} />
            </div>
            <div className="absolute bottom-20 right-[5%] text-[#D4AF37]/20 animate-float-delay">
                <GiCrown size={70} />
            </div>
            <div className="absolute top-40 right-[10%] text-[#D4AF37]/20 animate-sparkle">
                <GiSparkles size={40} />
            </div>
            <div className="absolute bottom-40 left-[8%] text-[#D4AF37]/20 animate-sparkle-delay">
                <GiSparkles size={50} />
            </div>

            {/* Soft Gold Light Rays */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent blur-3xl"></div>

            <div className="relative w-[99%] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Brand Section - Left */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Logo */}
                        <div className="flex items-center justify-center space-x-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-xl opacity-30"></div>
                                <img
                                    src={logo}
                                    alt="Eco Labgrown Diamond"
                                    className="relative w-56 h-32 object-contain"
                                />
                            </div>

                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Discover our exquisite collection of certified diamonds and fine jewelry,
                            each piece meticulously crafted to perfection for timeless elegance.
                        </p>

                        {/* Stats with Light Style */}
                        <div className="flex space-x-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#D4AF37]">700+</div>
                                <div className="text-xs text-gray-500">Websites</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#D4AF37]">24K</div>
                                <div className="text-xs text-gray-500">Pure Gold</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#D4AF37]">100%</div>
                                <div className="text-xs text-gray-500">Certified</div>
                            </div>
                        </div>

                        {/* Social Icons - Light Style */}
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group">
                                <BsInstagram className="text-[#D4AF37] group-hover:text-white" size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group">
                                <BsFacebook className="text-[#D4AF37] group-hover:text-white" size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group">
                                <BsTwitter className="text-[#D4AF37] group-hover:text-white" size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group">
                                <BsPinterest className="text-[#D4AF37] group-hover:text-white" size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Center Left */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2 text-gray-800">
                            <FaDiamond className="text-[#D4AF37]" size={14} />
                            <span>Quick Links</span>
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Products', 'Inspirations', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories - Center Right */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2 text-gray-800">
                            <FaGem className="text-[#D4AF37]" size={14} />
                            <span>Categories</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Pendants', 'Wedding Bands'].map((item) => (
                                <a key={item} href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors text-sm">
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Featured Product - Light Style */}
                        <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#D4AF37]/20">
                            <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                <FaStar className="text-[#D4AF37]" size={10} />
                                Featured Collection
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-gray-800 font-medium">Golden Earrings</h4>
                                    <p className="text-[#D4AF37] font-bold text-lg">$1,329.99</p>
                                </div>
                                <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Newsletter - Right */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2 text-gray-800">
                                <GiGoldBar className="text-[#D4AF37]" size={16} />
                                <span>Contact Us</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                                        <FaPhone className="text-[#D4AF37]" size={14} />
                                    </div>
                                    <p className="text-gray-600 text-sm">+1 234 567 890</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                                        <FaEnvelope className="text-[#D4AF37]" size={14} />
                                    </div>
                                    <p className="text-gray-600 text-sm">info@EcoLabgrownDiamond.com</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-[#D4AF37]" size={14} />
                                    </div>
                                    <p className="text-gray-600 text-sm">123 Diamond Street, Indore, IN 10001</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-gray-800 font-medium mb-3 flex items-center gap-2">
                                <GiSparkles className="text-[#D4AF37]" size={16} />
                                Newsletter
                            </h4>
                            <p className="text-gray-500 text-xs mb-3">Subscribe for exclusive offers</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-white border border-[#D4AF37]/30 rounded-l-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#D4AF37] placeholder-gray-400"
                                />
                                <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-4 rounded-r-lg hover:shadow-lg transition-all">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center space-x-4">
                            <span className="text-xs text-gray-500">We Accept:</span>
                            <div className="flex gap-2">
                                <div className="w-10 h-6 bg-white rounded text-[10px] flex items-center justify-center text-gray-600 shadow-sm font-medium">VISA</div>
                                <div className="w-10 h-6 bg-white rounded text-[10px] flex items-center justify-center text-gray-600 shadow-sm font-medium">MC</div>
                                <div className="w-10 h-6 bg-white rounded text-[10px] flex items-center justify-center text-gray-600 shadow-sm font-medium">AMEX</div>
                                <div className="w-10 h-6 bg-white rounded text-[10px] flex items-center justify-center text-gray-600 shadow-sm font-medium">PYPL</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[#D4AF37]/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-xs">
                            © 2026 Eco Labgrown Diamond. All rights reserved. Certified Diamonds • Ethical Luxury
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Shipping & Returns</a>
                        </div>
                    </div>
                </div>

                {/* Diamond Decoration */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <FaDiamond className="text-[#D4AF37]/30" size={12} />
                    <FaDiamond className="text-[#D4AF37]/40" size={12} />
                    <FaDiamond className="text-[#D4AF37]/50" size={12} />
                    <FaDiamond className="text-[#D4AF37]/40" size={12} />
                    <FaDiamond className="text-[#D4AF37]/30" size={12} />
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 4s ease-in-out infinite;
        }
        .animate-sparkle-delay {
          animation: sparkle 5s ease-in-out infinite 2s;
        }
      `}</style>
        </footer>
    );
};

export default Footer;