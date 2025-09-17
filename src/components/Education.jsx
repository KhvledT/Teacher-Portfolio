import React from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Education = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {data.education.title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
            {data.education.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600 rtl:left-auto rtl:right-8"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {data.education.timeline.map((item, index) => (
                <div key={index} className={`relative flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className={`absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 ${isRTL ? 'right-0' : 'left-0'}`}>
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 ml-20 mr-8 rtl:ml-8 rtl:mr-20 hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'border-l-4 border-blue-500' : 'border-r-4 border-blue-500 rtl:border-l-4 rtl:border-r-0'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.degree}
                        </h3>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                          <i className="fas fa-university text-blue-600 dark:text-blue-400"></i>
                          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {item.institution}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                        <i className="fas fa-star text-yellow-500"></i>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {item.gpa}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Education Info */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <i className="fas fa-trophy text-yellow-500 mr-3 rtl:mr-0 rtl:ml-3"></i>
                {isRTL ? 'الإنجازات الأكاديمية' : 'Academic Achievements'}
              </h3>
              <div className="space-y-4">
                {data.additional.academicAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                      <i className={`${achievement.icon} text-white text-sm`}></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <i className="fas fa-microscope text-green-500 mr-3 rtl:mr-0 rtl:ml-3"></i>
                {isRTL ? 'مجالات البحث' : 'Research Areas'}
              </h3>
              <div className="space-y-4">
                {data.additional.researchAreas.map((research, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{research.area}</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">{research.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${research.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Continuing Education */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {isRTL ? 'التعليم المستمر' : 'Continuing Education'}
              </h3>
              <p className="text-purple-100 max-w-2xl mx-auto">
                {isRTL 
                  ? 'التعلم مدى الحياة هو شغفي. أستمر في تطوير مهاراتي ومعرفتي لضمان تقديم أفضل تعليم ممكن.'
                  : 'Lifelong learning is my passion. I continuously develop my skills and knowledge to ensure I provide the best possible education.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.additional.continuingEducation.map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold mb-2">{item.count}</div>
                  <div className="font-semibold mb-2">{item.title}</div>
                  <div className="text-purple-200 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
