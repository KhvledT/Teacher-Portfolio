import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Testimonials = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === data.testimonials.reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data.testimonials.reviews.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.testimonials.reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.testimonials.reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {data.testimonials.title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
            {data.testimonials.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-quote-left text-white text-xl"></i>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  "{data.testimonials.reviews[currentIndex].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(data.testimonials.reviews[currentIndex].rating)}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <img
                    src={data.testimonials.reviews[currentIndex].avatar}
                    alt={data.testimonials.reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className={`text-left ${isRTL ? 'text-right' : ''}`}>
                    <div className="font-bold text-gray-900 dark:text-white text-lg">
                      {data.testimonials.reviews[currentIndex].name}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">
                      {data.testimonials.reviews[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${isRTL ? 'right-0' : 'left-0'} -translate-x-6 rtl:translate-x-6`}
            >
              <i className={`fas ${isRTL ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
            </button>

            <button
              onClick={nextTestimonial}
              className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${isRTL ? 'left-0' : 'right-0'} translate-x-6 rtl:-translate-x-6`}
            >
              <i className={`fas ${isRTL ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8 rtl:space-x-reverse">
            {data.testimonials.reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials.reviews.map((review, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
              }`}
            >
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic text-center">
                "{review.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {isRTL ? 'إحصائيات رضا العملاء' : 'Client Satisfaction Statistics'}
              </h3>
              <p className="text-green-100 max-w-2xl mx-auto">
                {isRTL 
                  ? 'الأرقام تتحدث عن نفسها - رضا عالي ومستمر من الطلاب وأولياء الأمور.'
                  : 'The numbers speak for themselves - consistently high satisfaction from students and parents.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {data.additional.testimonialStats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${stat.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'انضم إلى طلابي الناجحين' : 'Join My Successful Students'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {isRTL 
                ? 'كن جزءاً من رحلة التعلم الناجحة. تواصل معي اليوم لتبدأ رحلتك نحو التميز في الرياضيات.'
                : 'Be part of a successful learning journey. Contact me today to start your path to mathematical excellence.'
              }
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {isRTL ? 'ابدأ رحلتك الآن' : 'Start Your Journey Now'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
