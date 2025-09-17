import React from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            <span className="gradient-text">{data.about.title}</span>
          </h2>
          <p className="text-lg  sm:text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {data.about.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Enhanced Content */}
          <div className={`space-y-8 lg:space-y-10 ${isRTL ? 'lg:col-start-2' : ''}`}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {data.about.description}
              </p>
            </div>

            {/* Enhanced Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="gradient-text-secondary">{isRTL ? 'أبرز إنجازاتي' : 'Key Highlights'}</span>
              </h3>
              <div className="grid gap-4 lg:gap-6">
                {data.about.highlights.map((highlight, index) => (
                  <div key={index} className="group flex items-start space-x-4 rtl:space-x-reverse p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className={`${isRTL ? 'lg:col-start-1' : ''}`}>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {data.about.stats.map((stat, index) => (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-200 dark:hover:from-gray-700 dark:hover:to-gray-600">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Additional Info Card */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <i className="fas fa-award text-2xl"></i>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold">
                  {isRTL ? 'التزامي بالتميز' : 'Commitment to Excellence'}
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
                {isRTL 
                  ? 'أؤمن بقوة التعليم في تغيير الحياة وأكرس نفسي لتقديم أفضل تجربة تعليمية ممكنة لطلابي.'
                  : 'I believe in the transformative power of education and am committed to providing the best possible learning experience for my students.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Preview */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">{isRTL ? 'مجالات التخصص' : 'Areas of Expertise'}</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: 'fas fa-calculator', title: isRTL ? 'الرياضيات المتقدمة' : 'Advanced Mathematics', desc: isRTL ? 'تخصص في الجبر والهندسة والتفاضل والتكامل' : 'Specialized in Algebra, Geometry, and Calculus', color: 'from-blue-500 to-blue-600' },
              { icon: 'fas fa-chalkboard-teacher', title: isRTL ? 'طرق التدريس المبتكرة' : 'Innovative Teaching', desc: isRTL ? 'استخدام أحدث التقنيات والمناهج التعليمية' : 'Using cutting-edge techniques and methodologies', color: 'from-purple-500 to-purple-600' },
              { icon: 'fas fa-users', title: isRTL ? 'التطوير المهني' : 'Professional Development', desc: isRTL ? 'تدريب وإرشاد المعلمين الجدد' : 'Training and mentoring new educators', color: 'from-green-500 to-green-600' }
            ].map((item, index) => (
              <div key={index} className="group text-center p-6 lg:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <i className={`${item.icon} text-white text-xl lg:text-2xl`}></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
