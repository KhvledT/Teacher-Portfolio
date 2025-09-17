import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { language, isRTL } = useAppContext();
  const data = portfolioData[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            <span className="gradient-text">{data.contact.title}</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {data.contact.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Enhanced Contact Information */}
            <div className={`space-y-8 lg:space-y-10 ${isRTL ? 'lg:col-start-2' : ''}`}>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="gradient-text-secondary">{isRTL ? 'معلومات التواصل' : 'Contact Information'}</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {data.contact.description}
                </p>
              </div>

              {/* Enhanced Contact Details */}
              <div className="space-y-4 lg:space-y-6">
                {data.contact.info.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-4 rtl:space-x-reverse p-4 lg:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <i className={`${info.icon} text-white text-lg lg:text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-base lg:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="gradient-text">{data.footer.social}</span>
                </h4>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {data.footer.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="group w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-6 transform shadow-lg hover:shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                    >
                      <i className={`${link.icon} text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Quick Response Time */}
              <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 rounded-2xl p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold">
                    {isRTL ? 'وقت الاستجابة السريع' : 'Quick Response Time'}
                  </h4>
                </div>
                <p className="text-green-100 text-base lg:text-lg leading-relaxed">
                  {isRTL 
                    ? 'أرد على جميع الرسائل خلال 24 ساعة. للاستفسارات العاجلة، يمكنك الاتصال بي مباشرة.'
                    : 'I respond to all messages within 24 hours. For urgent inquiries, you can call me directly.'
                  }
                </p>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`${isRTL ? 'lg:col-start-1' : ''}`}>
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8">
                  <span className="gradient-text-secondary">{isRTL ? 'أرسل لي رسالة' : 'Send Me a Message'}</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {data.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 focus-ring"
                        placeholder={data.contact.form.name}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {data.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 focus-ring"
                        placeholder={data.contact.form.email}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {data.contact.form.subject} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 focus-ring"
                      placeholder={data.contact.form.subject}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {data.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 focus-ring resize-none"
                      placeholder={data.contact.form.message}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none focus-ring"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <i className="fas fa-spinner fa-spin text-lg"></i>
                        <span className="text-base">{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <span className="text-base">{data.contact.form.submit}</span>
                        <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                      </div>
                    )}
                  </button>

                  {/* Enhanced Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4 lg:p-6 shadow-lg">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-check text-white text-sm"></i>
                        </div>
                        <span className="text-green-700 dark:text-green-300 font-medium text-sm lg:text-base">
                          {isRTL 
                            ? 'تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت ممكن.'
                            : 'Your message has been sent successfully! I will get back to you as soon as possible.'
                          }
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
            <div className="p-6 lg:p-8 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="gradient-text">{isRTL ? 'موقعي' : 'My Location'}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                {data.additional.contactInfo.locationDescription}
              </p>
            </div>
            <div className="h-64 lg:h-80 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              <div className="text-center text-gray-600 dark:text-gray-300 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="fas fa-map-marked-alt text-white text-2xl"></i>
                </div>
                <p className="text-xl lg:text-2xl font-bold mb-2">{data.additional.contactInfo.location}</p>
                <p className="text-sm lg:text-base">{isRTL ? 'مفتوح للدروس الشخصية والعبر الإنترنت' : 'Open for in-person and online lessons'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
