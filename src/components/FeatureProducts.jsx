import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaShoppingCart, FaArrowRight, FaGem, FaArrowLeft } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { GiSparkles, GiCrystalShine, GiGoldBar } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const FeatureProducts = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const sliderRef = useRef(null);

  // High-quality diamond product images with lighting effects
  const productImages = {
    ring: "https://sennes.s3.ap-south-1.amazonaws.com/image/large/jewellery/ring/LG-DLR-D000747825-YG-1.jpg",
    bracelet: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&auto=format&q=80",
    necklace: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&auto=format&q=80",
    earrings: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop&auto=format&q=80",
    pendant: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop&auto=format&q=80",
    bangle: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&h=600&fit=crop&auto=format&q=80"
  };

  const products = [
    {
      id: 1,
      name: "Curabitur cursus dignis",
      description: "18K Gold Diamond Ring",
      price: "$200.00",
      originalPrice: "$299.00",
      image: productImages.ring,
      sale: true,
      discount: "33% OFF",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Donec aliquam ante n...",
      description: "Platinum Diamond Bracelet",
      price: "$250.00",
      originalPrice: "$399.00",
      image: productImages.bracelet,
      sale: true,
      discount: "37% OFF",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Donec condime ferme..",
      description: "Rose Gold Diamond Necklace",
      price: "$200.00",
      originalPrice: "$279.00",
      image: productImages.necklace,
      sale: false,
      discount: null,
      rating: 4.7,
      reviews: 56
    },
    {
      id: 4,
      name: "Maximus quam posue...",
      description: "Solitaire Diamond Earrings",
      price: "$200.00",
      originalPrice: "$269.00",
      image: productImages.earrings,
      sale: false,
      discount: null,
      rating: 4.8,
      reviews: 92
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit",
      description: "Diamond Pendant 18K Gold",
      price: "$180.00",
      originalPrice: "$249.00",
      image: productImages.pendant,
      sale: true,
      discount: "28% OFF",
      rating: 4.6,
      reviews: 67
    },
    {
      id: 6,
      name: "Vestibulum ante ipsum",
      description: "Gold Diamond Bangle",
      price: "$320.00",
      originalPrice: "$399.00",
      image: productImages.bangle,
      sale: false,
      discount: null,
      rating: 4.9,
      reviews: 103
    }
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile: 1 product
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet: 2 products
      } else {
        setVisibleCount(4); // Desktop: 4 products
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalProducts = products.length;
  const maxIndex = Math.max(0, totalProducts - visibleCount);

  // Reset current index if it exceeds new max index
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden w-full">
      {/* Luxury Background Pattern - Responsive sizing */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30px 30px, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Diamonds - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-20 left-[5%] lg:left-[10%] text-primary/10 animate-float">
        <IoDiamondOutline size={60} />
      </div>
      <div className="hidden lg:block absolute bottom-20 right-[10%] lg:right-[15%] text-secondary/10 animate-float-delay">
        <FaDiamond size={70} />
      </div>
      
      {/* Sparkle Effects - Adjusted for mobile */}
      <div className="absolute top-40 right-[10%] md:right-[20%] animate-sparkle">
        <GiSparkles className="text-[#D4AF37]/20" size={30} />
      </div>
      <div className="absolute bottom-40 left-[10%] md:left-[20%] animate-sparkle-delay">
        <GiCrystalShine className="text-primary/20" size={40} />
      </div>

      <div className="relative w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Responsive typography */}
        <div className="text-center mb-8 md:mb-12">
          {/* Diamond Badge - Responsive */}
          <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6">
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <GiGoldBar className="text-[#D4AF37]" size={20} />
              <span className="text-[#D4AF37] font-light tracking-[0.2em] text-xs md:text-sm uppercase">LUXURY</span>
              <GiGoldBar className="text-[#D4AF37]" size={20} />
            </div>
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

          {/* Main Heading - Responsive text sizes */}
          <h2 className="relative px-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold bg-gradient-to-r from-[#D4AF37] via-primary to-[#D4AF37] bg-clip-text text-transparent leading-tight">
              FEATURED PRODUCTS
            </span>
          </h2>

          {/* Decorative Line - Responsive */}
          <div className="flex items-center justify-center space-x-2 mt-4 md:mt-6">
            <FaDiamond className="text-primary/60 animate-pulse" size={12} />
            <div className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <FaDiamond className="text-primary/60 animate-pulse delay-300" size={14} />
            <div className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <FaDiamond className="text-primary/60 animate-pulse delay-700" size={12} />
          </div>

          {/* Description - Responsive text */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto px-4">
            Discover our exquisite collection of certified diamonds, 
            each piece meticulously crafted to perfection
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group ">
          {/* Navigation Buttons - Hidden on mobile, visible on tablet/desktop */}
          <button 
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`hidden sm:flex absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-[#D4AF37] w-8 h-8 md:w-10 md:h-12 rounded-full shadow-xl items-center justify-center transition-all duration-300 border border-[#D4AF37]/20 ${
              currentIndex === 0 
                ? 'opacity-0 cursor-not-allowed' 
                : 'opacity-0 group-hover:opacity-100 group-hover:-left-4 md:group-hover:-left-6 hover:bg-[#D4AF37] hover:text-white'
            }`}
          >
            <FaArrowLeft size={16} />
          </button>
          
          <button 
            onClick={scrollRight}
            disabled={currentIndex === maxIndex}
            className={`hidden sm:flex absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-[#D4AF37] w-8 h-8 md:w-10 md:h-12 rounded-full shadow-xl items-center justify-center transition-all duration-300 border border-[#D4AF37]/20 ${
              currentIndex === maxIndex 
                ? 'opacity-0 cursor-not-allowed' 
                : 'opacity-0 group-hover:opacity-100 group-hover:-right-4 md:group-hover:-right-6 hover:bg-[#D4AF37] hover:text-white'
            }`}
          >
            <FaArrowRight size={16} />
          </button>

          {/* Mobile Navigation Arrows - Visible only on mobile */}
          <div className="flex sm:hidden justify-between items-center mb-4">
            <button 
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`bg-white text-[#D4AF37] w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-[#D4AF37]/20 ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-white'
              }`}
            >
              <FaArrowLeft size={16} />
            </button>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button 
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`bg-white text-[#D4AF37] w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-[#D4AF37]/20 ${
                currentIndex === maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-white'
              }`}
            >
              <FaArrowRight size={16} />
            </button>
          </div>

          {/* Products Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`px-2 sm:px-3 ${
                    visibleCount === 1 ? 'min-w-[100%]' : 
                    visibleCount === 2 ? 'min-w-[50%]' : 
                    'min-w-[25%]'
                  }`}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Main Card - Responsive sizing */}
                  <div className="relative bg-white rounded-sm overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    
                    {/* Diamond Sparkle on Hover - Hidden on mobile */}
                    {hoveredId === product.id && (
                      <div className="hidden sm:block absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 animate-ping">
                          <FaDiamond className="text-primary/40" size={20} />
                        </div>
                        <div className="absolute bottom-4 right-4 animate-ping delay-300">
                          <FaDiamond className="text-secondary/40" size={20} />
                        </div>
                      </div>
                    )}

                    {/* Sale Badge - Responsive */}
                    {product.sale && (
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-xl">
                          {product.discount}
                        </div>
                      </div>
                    )}

                    {/* Rating Badge - Responsive */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-md">
                      <div className="flex items-center space-x-1">
                        <FaStar className="text-[#D4AF37]" size={10} />
                        <span className="text-gray-800 text-[10px] sm:text-xs font-semibold">{product.rating}</span>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Shine Overlay - Hidden on mobile */}
                      <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>

                      {/* Quick Add Button - Responsive */}
                      <button className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 bg-[#D4AF37] text-white p-2 sm:p-3 rounded-full shadow-xl transform translate-y-10 sm:translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary">
                        <FaShoppingCart size={14} />
                      </button>
                    </div>

                    {/* Product Details - Responsive */}
                    <div className="p-3 sm:p-5 relative bg-white">
                      <p className="text-gray-500 text-[10px] sm:text-xs mb-1 line-clamp-1">{product.description}</p>
                      <h3 className="text-gray-800 font-medium text-sm sm:text-lg mb-1 sm:mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      
                      {/* Price Section - Responsive */}
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline space-x-1 sm:space-x-2">
                          <span className="text-base sm:text-2xl font-bold text-gray-900">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-[10px] sm:text-sm">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        {/* Diamond Indicator - Hidden on mobile */}
                        <div className="hidden sm:flex items-center space-x-1">
                          <FaGem className="text-primary/60" size={12} />
                          <FaGem className="text-primary/40" size={12} />
                          <FaGem className="text-primary/20" size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators - Responsive */}
        <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-4 sm:w-8 bg-[#D4AF37]' 
                  : 'w-1.5 sm:w-2 bg-[#D4AF37]/40 hover:bg-[#D4AF37]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        {/* <div className="text-center mt-8 sm:hidden">
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-primary text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
            <span>View All</span>
            <FaArrowRight size={12} />
          </button>
        </div> */}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
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
    </section>
  );
};

export default FeatureProducts;