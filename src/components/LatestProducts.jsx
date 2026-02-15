import React from "react";
import { FaArrowRight, FaEye, FaGem } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { GiSparkles, GiCrown, GiGoldBar } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const LatestProducts = () => {
    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-[#faf9f7] to-[#f5f0e8]">
            {/* LEFT HERO SECTION */}
            <div className="relative w-full lg:w-1/2 h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
                {/* Diamond Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 sm:opacity-10 z-10" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Floating Diamonds - Responsive sizing */}
                <div className="absolute top-10 left-5 sm:top-20 sm:left-10 text-[#D4AF37]/20 animate-float z-20">
                    <IoDiamondOutline size={40} />
                </div>
                <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 text-[#D4AF37]/20 animate-float-delay z-20">
                    <GiSparkles size={35} />
                </div>

                {/* Background Image with Gold Overlay */}
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-transparent z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1400&q=80"
                        alt="Jewelry Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent flex flex-col justify-center px-6 sm:px-8 lg:px-20 z-30">
                    {/* NEW IN with Diamond - Responsive */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <FaDiamond className="text-[#D4AF37]" size={12} />
                        <p className="text-[10px] sm:text-xs tracking-[0.2em] text-white font-light">
                            NEW IN
                        </p>
                        <FaDiamond className="text-[#D4AF37]" size={12} />
                    </div>

                    {/* Heading - Responsive text sizes */}
                    <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-serif text-white leading-tight mb-4 sm:mb-6">
                        Radiate Elegance,
                        <br />
                        <span className="italic font-light text-[#D4AF37]">Wear Confidence</span>
                    </h1>

                    {/* Gold Button - Responsive */}
                    <button className="group relative bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 w-fit flex items-center gap-2 sm:gap-3 overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative flex items-center gap-2 sm:gap-3">
                            <GiGoldBar size={16} />
                            SHOP COLLECTION
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                        </span>
                    </button>

                    {/* Diamond Sparkles - Hidden on mobile */}
                    <div className="hidden sm:flex absolute bottom-10 left-10 gap-2">
                        <GiSparkles className="text-[#D4AF37]/40 animate-pulse" size={20} />
                        <GiSparkles className="text-[#D4AF37]/40 animate-pulse delay-300" size={20} />
                        <GiSparkles className="text-[#D4AF37]/40 animate-pulse delay-700" size={20} />
                    </div>
                </div>
            </div>

            {/* RIGHT PRODUCT SECTION */}
            <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
                {/* Diamond Pattern Background */}
                <div className="absolute inset-0 opacity-5 sm:opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 15px 15px, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>

                {/* Floating Gold Elements - Responsive */}
                <div className="absolute top-5 right-5 sm:top-10 sm:right-10 text-[#D4AF37]/20 animate-float">
                    <GiCrown size={50} />
                </div>
                <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 text-[#D4AF37]/20 animate-float-delay">
                    <IoDiamondOutline size={45} />
                </div>

                {/* Product Card */}
                <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] w-full max-w-[320px] sm:max-w-sm md:max-w-md p-[2px] rounded-xl sm:rounded-2xl shadow-2xl">
                    {/* Gold Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-sm opacity-20"></div>

                    <div className="relative bg-[#1a1a1a] rounded-sm p-4 sm:p-5 md:p-6">
                        {/* Diamond Badge */}
                        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-30">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md opacity-50"></div>
                                <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-900 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[8px] sm:text-[10px] md:text-xs font-bold shadow-xl flex items-center gap-0.5 sm:gap-1">
                                    <FaDiamond size={8} />
                                    <span>Premium</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Container with Gold Border */}
                        <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30">
                            {/* Diamond Sparkle Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10"></div>

                            <img
                                src="https://sennes.s3.ap-south-1.amazonaws.com/image/large/jewellery/ring/LG-DLR-D000747825-YG-1.jpg"
                                alt="Pearl Bracelet"
                                className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transform transition-transform duration-700 hover:scale-110"
                            />

                            {/* Eye Icon - Diamond Style */}
                            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full p-1.5 sm:p-2 md:p-3 shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 z-20 group">
                                <FaEye className="text-gray-900 group-hover:scale-110 transition-transform" size={14} />
                            </div>

                            {/* Diamond Dust Effect - Hidden on mobile */}
                            <div className="hidden xs:block absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                                <div className="flex gap-0.5 sm:gap-1">
                                    <FaDiamond className="text-[#D4AF37]/40" size={8} />
                                    <FaDiamond className="text-[#D4AF37]/30" size={8} />
                                    <FaDiamond className="text-[#D4AF37]/20" size={8} />
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="mt-4 sm:mt-5 md:mt-6 text-center relative">
                            {/* Gold Divider */}
                            <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-2 sm:mb-3 md:mb-4"></div>

                            <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm tracking-wide">
                                Harris Reed In Good Hands
                            </p>

                            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl text-white font-serif mt-1 mb-2 sm:mb-3">
                                Pearl Bracelet
                            </h3>

                            {/* Price with Diamond */}
                            <div className="flex items-center justify-center gap-1 sm:gap-2">
                                <FaGem className="text-[#D4AF37]" size={12} />
                                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                                    $2,499.00
                                </p>
                                <FaGem className="text-[#D4AF37]" size={12} />
                            </div>

                            {/* Rating - Responsive */}
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 mt-2 sm:mt-3">
                                <FaDiamond className="text-[#D4AF37]" size={8} />
                                <FaDiamond className="text-[#D4AF37]" size={8} />
                                <FaDiamond className="text-[#D4AF37]" size={8} />
                                <FaDiamond className="text-[#D4AF37]" size={8} />
                                <FaDiamond className="text-[#D4AF37]/40" size={8} />
                                <span className="text-gray-500 text-[8px] xs:text-[10px] ml-1">(124)</span>
                            </div>
                        </div>

                        {/* Add to Cart Button - Responsive */}
                        <button className="w-full mt-4 sm:mt-5 md:mt-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-900 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold flex items-center justify-center gap-1 sm:gap-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm">
                            <GiGoldBar size={14} />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>

                {/* Certification Badge - Responsive */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    <p className="text-[6px] xs:text-[8px] sm:text-[10px] text-[#D4AF37] flex items-center gap-0.5 sm:gap-1">
                        <FaDiamond size={6} />
                        IGI Certified
                        <FaDiamond size={6} />
                    </p>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default LatestProducts;