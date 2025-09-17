import React from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">{data.additional.header.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {isRTL 
                ? 'مربية متحمسة ومتخصصة في الرياضيات مع أكثر من 15 عاماً من الخبرة في التعليم وتطوير المناهج.'
                : 'Passionate educator and mathematics specialist with over 15 years of experience in teaching and curriculum development.'
              }
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {data.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  <i className={`${link.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {[
                { key: 'about', href: '#about' },
                { key: 'skills', href: '#skills' },
                { key: 'education', href: '#education' },
                { key: 'experience', href: '#experience' },
                { key: 'testimonials', href: '#testimonials' },
                { key: 'contact', href: '#contact' }
              ].map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {data.nav[link.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isRTL ? 'الخدمات' : 'Services'}
            </h3>
            <ul className="space-y-2">
              {data.additional.services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isRTL ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <i className="fas fa-envelope text-blue-400 mt-1"></i>
                <span className="text-gray-300">{data.additional.contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <i className="fas fa-phone text-blue-400 mt-1"></i>
                <span className="text-gray-300">{data.additional.contactInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                <span className="text-gray-300">
                  {data.additional.contactInfo.location}
                </span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <i className="fas fa-clock text-blue-400 mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? '24/7 للاستفسارات العاجلة' : '24/7 for urgent inquiries'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">
              {isRTL ? 'اشترك في النشرة الإخبارية' : 'Subscribe to Newsletter'}
            </h3>
            <p className="text-gray-300 mb-6">
              {isRTL 
                ? 'احصل على آخر الأخبار والنصائح التعليمية مباشرة في بريدك الإلكتروني.'
                : 'Get the latest news and educational tips delivered straight to your inbox.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={isRTL ? 'بريدك الإلكتروني' : 'Your email address'}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                {isRTL ? 'اشترك' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-center md:text-left">
              {data.footer.copyright}
            </div>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fas fa-arrow-up"></i>
                <span>{isRTL ? 'العودة للأعلى' : 'Back to Top'}</span>
              </button>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-gray-400 text-sm">
                  {isRTL ? 'تم تطويره بـ' : 'Built with'}
                </span>
                <i className="fab fa-react text-blue-400"></i>
                <i className="fab fa-js text-yellow-400"></i>
                <i className="fab fa-css3-alt text-blue-500"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center space-x-6 rtl:space-x-reverse text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              {isRTL ? 'شروط الاستخدام' : 'Terms of Service'}
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              {isRTL ? 'ملفات تعريف الارتباط' : 'Cookie Policy'}
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              {isRTL ? 'إمكانية الوصول' : 'Accessibility'}
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-40"
          title={isRTL ? 'العودة للأعلى' : 'Back to Top'}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
