import React, { useState, useEffect } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { FaRing, FaInfoCircle, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { GiGemNecklace } from 'react-icons/gi';
import { CgHome } from 'react-icons/cg';
import logo from "../assets/logo.png";
import homeIcon from "../assets/icon-home.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', icon: <CgHome size={24} /> },
    { id: 'products', name: 'Products', icon: <GiGemNecklace size={24} /> },
    { id: 'inspirations', name: 'Inspire', icon: <FaRing size={24} /> },
    { id: 'about', name: 'About', icon: <FaInfoCircle size={24} /> },
    { id: 'contact', name: 'Contact', icon: <FaPhone size={24} /> }
  ];

  const desktopNavItems = [
    { id: 'home', name: 'Home', icon: homeIcon },
    { id: 'products', name: 'Products', icon: null },
    { id: 'inspirations', name: 'Inspirations', icon: null },
    { id: 'about', name: 'About', icon: null },
    { id: 'contact', name: 'Contact', icon: null }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white border-b border-gray-200 shadow-md'
        : 'bg-transparent border-none shadow-none'
        }`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Desktop Navigation - left */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-10">
              {desktopNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id === "home" ? "/" : `/${item.id}`}
                  className={`transition-all capitalize font-medium relative group text-lg flex items-center space-x-1 ${isScrolled
                    ? 'text-third hover:text-secondary'
                    : 'text-third hover:text-secondary'
                    }`}
                >
                  {item.icon && item.id === 'home' ? (
                    <img src={item.icon} alt="home" className="w-5 h-5" />
                  ) : (
                    <span>{item.name}</span>
                  )}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform ${isScrolled ? 'bg-secondary' : 'bg-white'
                    }`}></span>
                </a>
              ))}
            </div>

            {/* Logo - center */}
            <div className="flex items-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <img src={logo} alt="Eco Labgrown Diamond" className="w-10 h-10 md:w-12 md:h-12" />
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`lg:hidden transition-colors ${isScrolled ? 'text-third hover:text-secondary' : 'text-third hover:text-secondary'
                  }`}
              >
                <FaBars size={24} />
              </button>

              {/* Desktop Icons - User and Heart (hidden on mobile) */}
              <div className="hidden lg:flex items-center space-x-4">
                <button className={`transition-colors ${isScrolled ? 'text-third hover:text-secondary' : 'text-third hover:text-secondary'
                  }`}>
                  <FaRegUser size={20} />
                </button>
                <button className={`transition-colors relative ${isScrolled ? 'text-third hover:text-secondary' : 'text-third hover:text-secondary'
                  }`}>
                  <FaRegHeart size={20} />
                  <span className={`absolute -top-2 -right-2  text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${isScrolled ? 'text-secondary  ' : 'text-gray-900'
                    }`}>
                    0
                  </span>
                </button>
              </div>

              {/* Cart Icon - Visible on all devices */}
              <button className={`hidden lg:block transition-colors relative ${isScrolled ? 'text-third hover:text-secondary' : 'text-third hover:text-secondary'
                }`}>
                <CgShoppingCart size={22} className="md:w-6 md:h-6" />
                <span className={`absolute -top-2 -right-2  text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${isScrolled ? 'text-third hover:text-secondary' : 'text-third hover:text-secondary'
                  }`}>
                  0
                </span>
              </button>

              {/* Cart Amount - Hidden on mobile, visible on desktop */}
              <span className={`hidden lg:block font-semibold text-sm md:text-base ${isScrolled ? 'text-third' : 'text-third'
                }`}>$0.00</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 lg:hidden ${isMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar Menu - Slides from right to left */}
      <div
        className={`fixed top-0 right-0 w-[280px] sm:w-[320px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img src={logo} alt="Eco Labgrown Diamond" className="w-10 h-10" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-third hover:text-secondary transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Sidebar Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {desktopNavItems.map((item) => (
              <a
                key={item.id}
                href={item.id === "home" ? "/" : `/${item.id}`}
                className="flex items-center space-x-3 px-4 py-3 text-third hover:text-secondary hover:bg-gray-50 transition-all capitalize border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.id === 'home' ? (
                  <img src={homeIcon} alt="home" className="w-5 h-5" />
                ) : (
                  <span className="text-base font-medium">{item.name}</span>
                )}
              </a>
            ))}

            {/* Account and Wishlist in Sidebar */}
            <div className="mt-6 px-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Account
              </div>
              <button className="flex items-center space-x-3 w-full px-4 py-3 text-third hover:text-secondary hover:bg-gray-50 transition-colors rounded-lg">
                <FaRegUser size={18} className="text-third" />
                <span className="text-sm">Sign In / Register</span>
              </button>
              <button className="flex items-center space-x-3 w-full px-4 py-3 text-third hover:text-secondary hover:bg-gray-50 transition-colors rounded-lg relative">
                <FaRegHeart size={18} className="text-third" />
                <span className="text-sm">Wishlist</span>
                <span className="ml-auto bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-third">Cart Total</span>
              <span className="font-bold text-secondary">$0.00</span>
            </div>
            <button className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors flex items-center justify-center space-x-2">
              <CgShoppingCart size={18} />
              <span>View Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-40 lg:hidden">
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id === 'home' ? '/' : `/${item.id}`}
              onClick={() => setActiveMobileTab(item.id)}
              className="flex flex-col items-center justify-center py-1 px-2"
            >
              <div className={`transition-all ${activeMobileTab === item.id
                ? 'text-secondary'
                : 'text-third'
                }`}>
                {item.icon}
              </div>
              <span className={`text-[11px] font-medium mt-1 ${activeMobileTab === item.id
                ? 'text-secondary font-bold'
                : 'text-third'
                }`}>
                {item.name}
              </span>
              {activeMobileTab === item.id && (
                <div className="w-1 h-1 bg-secondary rounded-full mt-1"></div>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Spacer for bottom navigation on mobile */}
      <div className="h-20 lg:hidden"></div>

      {/* User icon in bottom right - Optional */}
      <button className="fixed bottom-20 right-4 bg-primary text-white p-3 rounded-full shadow-lg z-40 lg:hidden hover:bg-secondary transition-colors">
        <FaRegUser size={20} />
      </button>
    </>
  );
};

export default Navbar;