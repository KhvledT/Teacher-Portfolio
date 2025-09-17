import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Header = () => {
  const { language, toggleLanguage, isDarkMode, toggleDarkMode, isRTL } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const data = portfolioData[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'education', href: '#education' },
    { key: 'experience', href: '#experience' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50 dark:border-gray-700/50' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <i className="fas fa-graduation-cap text-white text-lg group-hover:rotate-12 transition-transform duration-300"></i>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {data.additional.header.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                {data.additional.header.title}
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <span className="relative z-10">{data.nav[item.key]}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Enhanced Controls */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="group p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 focus-ring"
              title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <i className={`fas ${language === 'en' ? 'fa-language' : 'fa-globe'} text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300`}></i>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="group p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all duration-300 hover:scale-105 focus-ring"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-gray-600 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-all duration-300 group-hover:rotate-12`}></i>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 focus-ring"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-600 dark:text-gray-400 transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="group flex items-center w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 font-medium hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex-1">{data.nav[item.key]}</span>
                <i className="fas fa-arrow-left rtl:fa-arrow-right text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </button>
            ))}
            
            {/* Mobile Controls */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <i className={`fas ${language === 'en' ? 'fa-language' : 'fa-globe'}`}></i>
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300"
                >
                  <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                  <span>{isDarkMode ? 'Light' : 'Dark'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
