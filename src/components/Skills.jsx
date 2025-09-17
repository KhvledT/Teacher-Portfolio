import React from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];

  const ProgressBar = ({ skill }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm lg:text-base">{skill.name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm lg:text-base">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            <span className="gradient-text">{data.skills.title}</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {data.skills.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.skills.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
              {/* Enhanced Category Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className={`${category.icon} text-white text-2xl lg:text-3xl`}></i>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar key={skillIndex} skill={skill} />
                ))}
              </div>

              {/* Category Summary */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {isRTL ? 'متوسط الكفاءة' : 'Average Proficiency'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              <span className="gradient-text-secondary">{isRTL ? 'مهارات إضافية' : 'Additional Skills'}</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {isRTL 
                ? 'مجموعة متنوعة من المهارات التي تدعم رحلتي التعليمية وتساعدني في تقديم أفضل تجربة تعليمية.'
                : 'A diverse set of skills that support my educational journey and help me deliver the best learning experience.'
              }
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {data.additional.additionalSkills.map((skill, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <i className={`${skill.icon} text-white text-lg lg:text-xl`}></i>
                </div>
                <div className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Certifications */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-6 lg:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                {isRTL ? 'الشهادات والاعتمادات' : 'Certifications & Credentials'}
              </h3>
              <p className="text-blue-100 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
                {isRTL 
                  ? 'شهادات مهنية معترف بها تؤكد خبرتي ومهاراتي في مجال التعليم.'
                  : 'Professional certifications that validate my expertise and skills in education.'
                }
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data.additional.certifications.map((cert, index) => (
                <div key={index} className="group bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <i className={`${cert.icon} text-white text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-2 group-hover:text-blue-100 transition-colors duration-300">{cert.name}</div>
                      <div className="text-blue-200 text-sm font-medium">{cert.issuer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
