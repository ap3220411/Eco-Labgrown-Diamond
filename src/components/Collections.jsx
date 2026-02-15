import React, { useState, useEffect } from "react";
import { FaArrowRight, FaGem } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { GiSparkles, GiGoldBar, GiCrystalGrowth } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const Collections = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile: 1 collection
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet: 2 collections
      } else {
        setVisibleCount(3); // Desktop: 3 collections
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Light background jewelry collection images
  const collectionImages = {
    engagement: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop&auto=format&q=80",
    wedding: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&auto=format&q=80",
    luxury: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop&auto=format&q=80",
    vintage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop&auto=format&q=80",
    modern: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop&auto=format&q=80",
    pearl: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=800&h=1000&fit=crop&auto=format&q=80"
  };

  const collections = [
    {
      id: 1,
      name: "Engagement",
      description: "Timeless diamond rings for life's most precious moment",
      image: collectionImages.engagement,
      itemCount: "124+ Pieces",
      bgColor: "from-rose-50 to-amber-50"
    },
    {
      id: 2,
      name: "Wedding Bands",
      description: "Eternal symbols of love crafted in precious metals",
      image: collectionImages.wedding,
      itemCount: "89+ Pieces",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      id: 3,
      name: "Luxury",
      description: "Exquisite high-end jewelry for the discerning collector",
      image: collectionImages.luxury,
      itemCount: "56+ Pieces",
      bgColor: "from-purple-50 to-pink-50"
    },
    // {
    //   id: 4,
    //   name: "Vintage",
    //   description: "Timeless elegance inspired by classic eras",
    //   image: collectionImages.vintage,
    //   itemCount: "78+ Pieces",
    //   bgColor: "from-amber-50 to-orange-50"
    // },
    {
      id: 5,
      name: "Modern",
      description: "Contemporary designs with clean lines and bold statements",
      image: collectionImages.modern,
      itemCount: "92+ Pieces",
      bgColor: "from-gray-50 to-stone-50"
    },
    // {
    //   id: 6,
    //   name: "Pearl",
    //   description: "Elegant pearl jewelry for timeless sophistication",
    //   image: collectionImages.pearl,
    //   itemCount: "67+ Pieces",
    //   bgColor: "from-emerald-50 to-teal-50"
    // }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden w-full">
      {/* Soft Background Pattern - Responsive */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30px 30px, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Elements - Responsive visibility and size */}
      <div className="hidden md:block absolute top-20 left-[5%] text-primary/10 animate-float">
        <IoDiamondOutline size={50} />
      </div>
      <div className="hidden lg:block absolute bottom-20 right-[8%] text-secondary/10 animate-float-delay">
        <GiCrystalGrowth size={60} />
      </div>
      
      {/* Mobile Floating Elements */}
      <div className="block md:hidden absolute top-10 right-5 text-primary/10 animate-float">
        <IoDiamondOutline size={40} />
      </div>
      <div className="block md:hidden absolute bottom-10 left-5 text-secondary/10 animate-float-delay">
        <GiSparkles size={35} />
      </div>
      
      {/* Sparkles - Responsive */}
      <div className="absolute top-40 right-[10%] md:right-[15%] animate-sparkle">
        <GiSparkles className="text-[#D4AF37]/20" size={30} />
      </div>
      <div className="absolute bottom-40 left-[8%] md:left-[12%] animate-sparkle-delay">
        <GiSparkles className="text-primary/20" size={35} />
      </div>

      <div className="relative w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Responsive */}
        <div className="text-center mb-10 md:mb-16">
          {/* Collection Badge - Responsive */}
          <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6">
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <GiGoldBar className="text-[#D4AF37]" size={18} />
              <span className="text-[#D4AF37] font-light tracking-[0.2em] text-[10px] md:text-sm uppercase">CURATED</span>
              <GiGoldBar className="text-[#D4AF37]" size={18} />
            </div>
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

          {/* Main Heading - Responsive */}
          <h2 className="relative mb-4 md:mb-6 px-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold bg-gradient-to-r from-[#D4AF37] via-primary to-[#D4AF37] bg-clip-text text-transparent">
              OUR COLLECTIONS
            </span>
          </h2>

          {/* Decorative Line - Responsive */}
          <div className="flex items-center justify-center space-x-2 mb-4 md:mb-6">
            <FaDiamond className="text-primary/40" size={12} />
            <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <FaDiamond className="text-primary/60 animate-pulse" size={14} />
            <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <FaDiamond className="text-primary/40" size={12} />
          </div>

          {/* Description - Responsive */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our meticulously curated collections, each telling a unique story 
            of craftsmanship, elegance, and timeless beauty
          </p>
        </div>

        {/* Collections Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Light Glow Effect */}
              <div className={`absolute -inset-2 md:-inset-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl md:rounded-3xl blur-xl transition-opacity duration-500 ${hoveredId === collection.id ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-sm overflow-hidden shadow-lg md:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.bgColor} opacity-30 md:opacity-40 z-10`}></div>
                
                {/* Diamond Sparkle on Hover - Hidden on mobile */}
                {hoveredId === collection.id && (
                  <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 animate-ping">
                      <FaDiamond className="text-primary/30" size={16} />
                    </div>
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 animate-ping delay-300">
                      <FaDiamond className="text-secondary/30" size={16} />
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Light Source Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent z-10"></div>
                  
                  <img
                    src={collection.image}
                    alt={`${collection.name} Collection`}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Soft Shine Overlay - Hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10"></div>

                  {/* Collection Info Overlay - Responsive */}
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 lg:p-6 bg-gradient-to-t from-white/95 via-white/60 to-transparent z-20">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-1 md:mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 md:mb-3 line-clamp-2">
                      {collection.description}
                    </p>
                    
                    {/* Collection Footer - Responsive */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] md:text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                        {collection.itemCount}
                      </span>
                      
                      <button className="flex items-center space-x-1 md:space-x-2 text-[#D4AF37] hover:text-primary transition-colors group/btn">
                        <span className="text-xs md:text-sm font-medium">Explore</span>
                        <FaArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Light Accent - Responsive */}
                  <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/30 rounded-full filter blur-2xl md:blur-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="text-center mt-10 md:mt-16">
        
          {/* Collection Stats - Responsive */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mt-6 md:mt-8">
            <div className="text-center min-w-[80px]">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37]">500+</div>
              <div className="text-[10px] md:text-sm text-gray-500">Unique Designs</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">12</div>
              <div className="text-[10px] md:text-sm text-gray-500">Collections</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37]">100%</div>
              <div className="text-[10px] md:text-sm text-gray-500">Certified</div>
            </div>
          </div>
        </div>

        {/* Decorative Dots - Responsive */}
        <div className="flex justify-center space-x-1.5 md:space-x-2 mt-8 md:mt-12">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/40"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]/30"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/20"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]/40"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/30"></div>
        </div>

        {/* Mobile View More Indicator */}
        <div className="block sm:hidden text-center mt-6">
          <p className="text-xs text-gray-400 flex items-center justify-center space-x-1">
            <span>Swipe to see more</span>
            <FaArrowRight size={10} className="animate-pulse" />
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
        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 5s ease-in-out infinite;
        }
        .animate-sparkle-delay {
          animation: sparkle 6s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default Collections;