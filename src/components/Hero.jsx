import React from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-32 left-1/3 w-32 h-32 border-2 border-blue-300 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-purple-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg rotate-12 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 lg:space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`}>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium animate-fade-in-up">
                {data.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-7xl xl:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in-up delay-200 leading-tight">
                <span className="gradient-text">{data.hero.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-blue-700 dark:text-blue-300 font-semibold animate-fade-in-up delay-400 leading-relaxed">
                {data.hero.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up delay-600 max-w-2xl">
                {data.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up delay-800 ${isRTL ? 'sm:justify-end' : ''}`}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus-ring"
              >
                <span className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <span>{data.hero.cta}</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </button>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus-ring"
              >
                <span className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <span>{isRTL ? 'تعرف علي أكثر' : 'Learn More'}</span>
                  <i className="fas fa-info-circle group-hover:rotate-12 transition-transform duration-300"></i>
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-8 animate-fade-in-up delay-1000">
              {data.about.stats.map((stat, index) => (
                <div key={index} className="group text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image */}
          <div className={`${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="relative flex justify-center lg:justify-start">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 animate-scale-in delay-1000 hover:shadow-3xl transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={data.hero.image}
                      alt={data.hero.name}
                      className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNGY0NmU1Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1UPC90ZXh0Pgo8L3N2Zz4=';
                      }}
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
                
                {/* Enhanced Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-90 animate-float shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-90 animate-float delay-1000 shadow-lg"></div>
                <div className="absolute top-1/2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80 animate-pulse delay-500 shadow-md"></div>
                <div className="absolute top-1/4 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-80 animate-pulse delay-1500 shadow-md"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className={`group flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 animate-bounce ${isRTL ? 'flex-row space-x-2 rtl:space-x-reverse' : 'flex-col'}`}
          >
            <span className={`text-sm font-medium group-hover:scale-110 transition-transform duration-300 ${isRTL ? '' : 'mb-2'}`}>
              {data.hero.scrollText}
            </span>
            <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-chevron-down text-sm"></i>
            </div>
          </button>
        </div>
    </section>
  );
};

export default Hero;
