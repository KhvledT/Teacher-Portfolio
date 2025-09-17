import React from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {data.experience.title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
            {data.experience.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-12">
            {data.experience.timeline.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline Indicator */}
                  <div className="lg:w-1/3">
                    <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 rtl:border-l-0 rtl:border-r-4 ${isRTL ? 'lg:text-right' : ''}`}>
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                        {exp.period}
                      </div>
                      <div className="text-gray-800 dark:text-white font-semibold text-xl">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="lg:w-2/3">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {exp.position}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                          <i className="fas fa-star text-yellow-500 mr-2 rtl:mr-0 rtl:ml-2"></i>
                          {isRTL ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                        </h4>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                <i className="fas fa-check text-white text-xs"></i>
                              </div>
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < data.experience.timeline.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-blue-600 top-full mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Gained Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'المهارات المكتسبة' : 'Skills Gained'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL 
                ? 'خلال مسيرتي المهنية، اكتسبت مجموعة متنوعة من المهارات التي ساعدتني في تطوير قدراتي التعليمية.'
                : 'Throughout my career, I have acquired a diverse set of skills that have helped me develop my educational capabilities.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.additional.skillsGained.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <i className={`${category.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h4>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {isRTL ? 'أبرز إنجازات المسيرة المهنية' : 'Career Highlights'}
              </h3>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                {isRTL 
                  ? 'بعض من أبرز الإنجازات والنجاحات التي حققتها خلال مسيرتي المهنية في التعليم.'
                  : 'Some of the most significant achievements and successes I have accomplished throughout my career in education.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.additional.careerHighlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${highlight.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-3xl font-bold mb-2">{highlight.number}</div>
                  <div className="text-indigo-200 text-sm">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
