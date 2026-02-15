import React, { useState } from "react";
import { FaGem, FaStar, FaArrowRight } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { GiSparkles, GiCrown, GiGoldBar } from "react-icons/gi";
FaDiamond
const CategoryShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // High-quality diamond jewelry images
  const categoryImages = {
    bracelet: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
    ring: "https://sennes.s3.ap-south-1.amazonaws.com/image/large/jewellery/ring/LG-DLR-D000747825-YG-1.jpg",
    earrings: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop",
    necklace: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    polki: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop"
  };

  const categories = [
    { 
      name: "Bracelet", 
      image: categoryImages.bracelet,
      count: "124+ Designs",
      price: "Starting $299"
    },
    { 
      name: "Ring", 
      image: categoryImages.ring,
      count: "256+ Designs",
      price: "Starting $199"
    },
    { 
      name: "Earrings", 
      image: categoryImages.earrings,
      count: "189+ Designs",
      price: "Starting $249"
    },
    { 
      name: "Necklace", 
      image: categoryImages.necklace,
      count: "312+ Designs",
      price: "Starting $399"
    },
    { 
      name: "Polki", 
      image: categoryImages.polki,
      count: "98+ Designs",
      price: "Starting $599"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#faf9f7] via-white to-[#f5f0e8] relative overflow-hidden">
      {/* Background Diamond Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute top-20 left-10 text-secondary/20 animate-pulse">
        <GiSparkles size={60} />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/20 animate-pulse delay-1000">
        <GiSparkles size={80} />
      </div>
      <div className="absolute top-40 right-40 text-[#D4AF37]/10 animate-float">
        <FaDiamond size={50} />
      </div>
      <div className="absolute bottom-40 left-40 text-[#D4AF37]/10 animate-float-delay">
        <GiCrown size={60} />
      </div>

      <div className="w-[99%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Luxury Design */}
        <div className="text-center mb-16">
          {/* Diamond Badge */}

            <div className="flex items-center justify-center space-x-3 mb-6">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                      <div className="flex items-center space-x-2">
                        <GiGoldBar className="text-[#D4AF37]" size={24} />
                        <span className="text-[#D4AF37] font-light tracking-[0.2em] text-sm uppercase">LUXURY CATEGORYS</span>
                        <GiGoldBar className="text-[#D4AF37]" size={24} />
                      </div>
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                    </div>
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              DISCOVER ETHICAL LUXURY
            </span>
            <br />
            <span className="text-gray-800">WITH IVANA JEWELS</span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <FaDiamond className="text-primary" size={16} />
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <FaDiamond className="text-primary" size={16} />
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <FaDiamond className="text-primary" size={16} />
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            India's Finest Lab Grown Diamond Jewellery — 
            <span className="text-secondary font-semibold block mt-2 text-2xl md:text-3xl">
              Ethical, Certified & Exquisitely Crafted
            </span>
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-xs text-gray-500">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-gray-500">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-gray-500">Certified</div>
            </div>
          </div>
        </div>

        {/* Categories Grid with Luxury Cards */}
        <div className="grid  md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-sm shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                
                {/* Diamond Badge on Image */}
                <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-primary" size={12} />
                    <span className="text-xs font-semibold text-secondary">Premium</span>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.name} - Lab Grown Diamond Jewellery`}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gold Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-2xl font-bold block mb-2">{category.name}</span>
                      <div className="flex items-center justify-center space-x-1 mb-3">
                        <FaDiamond size={12} />
                        <FaDiamond size={12} />
                        <FaDiamond size={12} />
                        <FaDiamond size={12} />
                        <FaDiamond size={12} />
                      </div>
                      <button className="bg-white text-secondary px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary hover:text-white transition-colors flex items-center space-x-1 mx-auto">
                        <span>Shop Now</span>
                        <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-800 font-bold text-lg">{category.name}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  <p className="text-secondary font-semibold text-sm">{category.price}</p>
                  
                  {/* Quick View Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span>Explore All Categories</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center space-x-1">
            <FaGem className="text-primary" />
            <span>Free Shipping on All Orders • 30-Day Returns</span>
            <FaGem className="text-primary" />
          </p>
        </div> */}

        {/* Decorative Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-300"></div>
          <div className="w-2 h-2 rounded-full bg-secondary/40 animate-pulse delay-700"></div>
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-1000"></div>
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 7s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default CategoryShowcase;