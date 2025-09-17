import heroImage from '../assets/imgs/HeroImage.jpeg';
export const portfolioData = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: "Dr. Michael Thompson",
      title: "Mathematics Teacher & Educational Consultant",
      subtitle: "Passionate educator with 15+ years of experience in mathematics education and curriculum development",
      cta: "Get In Touch",
      scrollText: "Scroll Down",
      image: heroImage
    },
    
    // About Section
    about: {
      title: "About Me",
      subtitle: "Dedicated Educator & Mathematics Specialist",
      description: "I am a passionate mathematics teacher with over 15 years of experience in secondary and higher education. My mission is to make mathematics accessible and enjoyable for all students through innovative teaching methods and personalized learning approaches.",
      highlights: [
        "15+ years of teaching experience",
        "PhD in Mathematics Education",
        "Certified Educational Consultant",
        "Published researcher in math pedagogy",
        "Expert in curriculum development"
      ],
      stats: [
        { number: "500+", label: "Students Taught" },
        { number: "15+", label: "Years Experience" },
        { number: "95%", label: "Student Success Rate" },
        { number: "50+", label: "Research Papers" }
      ]
    },
    
    // Skills Section
    skills: {
      title: "My Skills",
      subtitle: "Teaching Excellence & Technical Proficiency",
      categories: [
        {
          name: "Mathematics",
          icon: "fas fa-calculator",
          skills: [
            { name: "Algebra", level: 95 },
            { name: "Geometry", level: 90 },
            { name: "Calculus", level: 88 },
            { name: "Statistics", level: 92 },
            { name: "Trigonometry", level: 85 }
          ]
        },
        {
          name: "Teaching Methods",
          icon: "fas fa-chalkboard-teacher",
          skills: [
            { name: "Interactive Learning", level: 90 },
            { name: "Problem Solving", level: 88 },
            { name: "Visual Teaching", level: 85 },
            { name: "Assessment Design", level: 92 },
            { name: "Technology Integration", level: 80 }
          ]
        },
        {
          name: "Technology",
          icon: "fas fa-laptop-code",
          skills: [
            { name: "Educational Software", level: 85 },
            { name: "Online Teaching", level: 88 },
            { name: "Learning Management Systems", level: 82 },
            { name: "Data Analysis", level: 75 },
            { name: "Digital Assessment", level: 80 }
          ]
        }
      ]
    },
    
    // Education Section
    education: {
      title: "Education",
      subtitle: "Academic Journey & Qualifications",
      timeline: [
        {
          year: "2015",
          degree: "PhD in Mathematics Education",
          institution: "University of Cambridge",
          description: "Specialized in innovative teaching methodologies and curriculum development for secondary mathematics education.",
          gpa: "3.9/4.0"
        },
        {
          year: "2010",
          degree: "Master of Education (M.Ed)",
          institution: "Oxford University",
          description: "Focused on educational psychology and advanced pedagogical strategies for mathematics instruction.",
          gpa: "3.8/4.0"
        },
        {
          year: "2008",
          degree: "Bachelor of Science in Mathematics",
          institution: "Imperial College London",
          description: "Comprehensive study of pure and applied mathematics with emphasis on mathematical analysis and algebra.",
          gpa: "3.7/4.0"
        }
      ]
    },
    
    // Experience Section
    experience: {
      title: "Experience",
      subtitle: "Professional Teaching Journey",
      timeline: [
        {
          period: "2018 - Present",
          position: "Senior Mathematics Teacher & Department Head",
          company: "International School of Excellence",
          description: "Leading the mathematics department, developing curriculum, mentoring junior teachers, and implementing innovative teaching methods.",
          achievements: [
            "Improved student performance by 25%",
            "Led curriculum redesign project",
            "Mentored 8 junior teachers",
            "Implemented digital learning platform"
          ]
        },
        {
          period: "2012 - 2018",
          position: "Mathematics Teacher",
          company: "Elite Preparatory School",
          description: "Taught advanced mathematics courses, prepared students for university entrance exams, and developed assessment tools.",
          achievements: [
            "100% university admission rate for students",
            "Developed new assessment methodology",
            "Led after-school math tutoring program",
            "Collaborated on cross-curricular projects"
          ]
        },
        {
          period: "2008 - 2012",
          position: "Mathematics Teacher",
          company: "Greenwood High School",
          description: "Started teaching career, developed foundational teaching skills, and established classroom management techniques.",
          achievements: [
            "Created engaging lesson plans",
            "Established positive learning environment",
            "Achieved 90% student satisfaction rate",
            "Participated in professional development programs"
          ]
        }
      ]
    },
    
    // Testimonials Section
    testimonials: {
      title: "Testimonials",
      subtitle: "What Students & Colleagues Say",
      reviews: [
        {
          name: "Ahmed Hassan",
          role: "Former Student",
          content: "Dr. Michael's teaching methods made mathematics enjoyable and understandable. He has a unique ability to break down complex concepts into simple, digestible parts.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNGY0NmU1Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFIPC90ZXh0Pgo8L3N2Zz4="
        },
        {
          name: "Maria Rodriguez",
          role: "Parent",
          content: "My daughter struggled with math until she joined Dr. Michael's class. The improvement was remarkable - not just in grades, but in confidence and understanding.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWM0ODk4Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1SPC90ZXh0Pgo8L3N2Zz4="
        },
        {
          name: "Prof. James Wilson",
          role: "Department Head",
          content: "Dr. Michael is an exceptional educator who brings innovation and passion to mathematics education. His curriculum development skills are outstanding.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDU5NjY5Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkpXPC90ZXh0Pgo8L3N2Zz4="
        },
        {
          name: "Fatima Al-Zahra",
          role: "Former Student",
          content: "Dr. Michael's patience and dedication helped me overcome my fear of mathematics. He creates a supportive learning environment where everyone can succeed.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGE1Y2Y2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZBCjwvdGV4dD4KPC9zdmc+"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Connect & Discuss Education",
      description: "I'm always interested in discussing mathematics education, curriculum development, or potential collaborations. Feel free to reach out!",
      info: [
        {
          icon: "fas fa-envelope",
          label: "Email",
          value: "dr.michael.thompson@email.com"
        },
        {
          icon: "fas fa-phone",
          label: "Phone",
          value: "+1 (555) 123-4567"
        },
        {
          icon: "fas fa-map-marker-alt",
          label: "Location",
          value: "London, United Kingdom"
        }
      ],
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message"
      }
    },
    
    // Footer
    footer: {
      copyright: "© 2024 Dr. Michael Thompson. All rights reserved.",
      social: "Follow Me",
      links: [
        { name: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
        { name: "Twitter", icon: "fab fa-twitter", url: "#" },
        { name: "ResearchGate", icon: "fas fa-graduation-cap", url: "#" }
      ]
    },

    // Additional Data
    additional: {
      // Header info
      header: {
        name: "Dr. Michael Thompson",
        title: "Mathematics Educator"
      },
      
      // Contact info
      contactInfo: {
        email: "dr.michael.thompson@email.com",
        phone: "+1 (555) 123-4567",
        location: "London, United Kingdom",
        locationDescription: "I provide my lessons in London, United Kingdom. Online sessions can also be arranged for students worldwide."
      },

      // Additional Skills
      additionalSkills: [
        { name: 'LaTeX', icon: 'fas fa-file-alt', color: 'from-blue-500 to-blue-600' },
        { name: 'MATLAB', icon: 'fas fa-chart-line', color: 'from-orange-500 to-orange-600' },
        { name: 'Python', icon: 'fab fa-python', color: 'from-green-500 to-green-600' },
        { name: 'Geogebra', icon: 'fas fa-drafting-compass', color: 'from-purple-500 to-purple-600' },
        { name: 'Zoom', icon: 'fas fa-video', color: 'from-indigo-500 to-indigo-600' },
        { name: 'Moodle', icon: 'fas fa-graduation-cap', color: 'from-red-500 to-red-600' },
        { name: 'Google Classroom', icon: 'fab fa-google', color: 'from-yellow-500 to-yellow-600' },
        { name: 'Khan Academy', icon: 'fas fa-book-open', color: 'from-teal-500 to-teal-600' },
        { name: 'Desmos', icon: 'fas fa-function', color: 'from-pink-500 to-pink-600' },
        { name: 'Wolfram Alpha', icon: 'fas fa-brain', color: 'from-gray-500 to-gray-600' },
        { name: 'Excel', icon: 'fas fa-table', color: 'from-green-600 to-green-700' },
        { name: 'PowerPoint', icon: 'fas fa-presentation', color: 'from-orange-600 to-orange-700' }
      ],

      // Certifications
      certifications: [
        { name: 'Advanced Mathematics Teaching Certificate', issuer: 'Ministry of Education', icon: 'fas fa-graduation-cap' },
        { name: 'Certified Digital Learning Trainer', issuer: 'Cambridge University', icon: 'fas fa-laptop-code' },
        { name: 'Curriculum Development Specialist', issuer: 'British Council', icon: 'fas fa-book-open' }
      ],

      // Academic Achievements
      academicAchievements: [
        { icon: 'fas fa-medal', text: 'Research Excellence Award' },
        { icon: 'fas fa-graduation-cap', text: 'Magna Cum Laude Graduate' },
        { icon: 'fas fa-book', text: 'Published 15 peer-reviewed papers' },
        { icon: 'fas fa-users', text: 'President of Mathematics Student Club' }
      ],

      // Research Areas
      researchAreas: [
        { area: 'Interactive Mathematics Education', progress: 95 },
        { area: 'Digital Curriculum Development', progress: 88 },
        { area: 'Mathematical Learning Psychology', progress: 82 },
        { area: 'Formative Assessment in Mathematics', progress: 90 }
      ],

      // Continuing Education
      continuingEducation: [
        { 
          title: 'Professional Workshops',
          count: '25+',
          desc: 'Workshops in teaching and technology'
        },
        { 
          title: 'Online Courses',
          count: '40+',
          desc: 'Courses in latest educational methodologies'
        },
        { 
          title: 'International Conferences',
          count: '12+',
          desc: 'Participation in mathematics education conferences'
        }
      ],

      // Skills Gained
      skillsGained: [
        {
          category: 'Leadership & Management',
          icon: 'fas fa-users-cog',
          skills: [
            { name: 'Team Management', level: 92 },
            { name: 'Strategic Planning', level: 88 },
            { name: 'Conflict Resolution', level: 85 },
            { name: 'Effective Communication', level: 90 }
          ],
          color: 'from-blue-500 to-blue-600'
        },
        {
          category: 'Professional Development',
          icon: 'fas fa-chart-line',
          skills: [
            { name: 'Curriculum Development', level: 95 },
            { name: 'Assessment & Evaluation', level: 88 },
            { name: 'Training & Mentoring', level: 90 },
            { name: 'Educational Research', level: 85 }
          ],
          color: 'from-green-500 to-green-600'
        },
        {
          category: 'Technology Integration',
          icon: 'fas fa-laptop-code',
          skills: [
            { name: 'E-Learning', level: 87 },
            { name: 'Learning Platforms', level: 82 },
            { name: 'Digital Assessment Tools', level: 80 },
            { name: 'Virtual Collaboration', level: 85 }
          ],
          color: 'from-purple-500 to-purple-600'
        }
      ],

      // Career Highlights
      careerHighlights: [
        { 
          number: '500+', 
          label: 'Students Helped',
          icon: 'fas fa-graduation-cap'
        },
        { 
          number: '25+', 
          label: 'Teachers Mentored',
          icon: 'fas fa-user-tie'
        },
        { 
          number: '15+', 
          label: 'Curriculum Projects',
          icon: 'fas fa-book'
        },
        { 
          number: '98%', 
          label: 'Student Satisfaction',
          icon: 'fas fa-heart'
        }
      ],

      // Testimonial Statistics
      testimonialStats: [
        { 
          number: '98%', 
          label: 'Overall Satisfaction',
          icon: 'fas fa-smile'
        },
        { 
          number: '95%', 
          label: 'Success Rate',
          icon: 'fas fa-chart-line'
        },
        { 
          number: '100%', 
          label: 'Would Recommend',
          icon: 'fas fa-thumbs-up'
        },
        { 
          number: '4.9/5', 
          label: 'Average Rating',
          icon: 'fas fa-star'
        }
      ],

      // Services
      services: [
        'Private Math Tutoring',
        'Online Learning',
        'Curriculum Development',
        'Teacher Training',
        'Educational Consulting'
      ]
    }
  },
  
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      education: "التعليم",
      experience: "الخبرة",
      testimonials: "الشهادات",
      contact: "تواصل معي"
    },
    
    // Hero Section
    hero: {
      greeting: "مرحباً، أنا",
      name: "د. مايكل طومسون",
      title: "معلم رياضيات ومستشار تعليمي",
      subtitle: "مربي متحمس مع أكثر من 15 عاماً من الخبرة في تعليم الرياضيات وتطوير المناهج",
      cta: "تواصل معي",
      scrollText: "انتقل للأسفل"
    },
    
    // About Section
    about: {
      title: "نبذة عني",
      subtitle: "مربي مخصص ومتخصص في الرياضيات",
      description: "أنا معلم رياضيات متحمس مع أكثر من 15 عاماً من الخبرة في التعليم الثانوي والعالي. مهمتي هي جعل الرياضيات متاحة وممتعة لجميع الطلاب من خلال طرق التدريس المبتكرة والنهج التعليمية الشخصية.",
      highlights: [
        "أكثر من 15 عاماً من الخبرة التدريسية",
        "دكتوراه في تعليم الرياضيات",
        "مستشار تعليمي معتمد",
        "باحث منشور في منهجية تعليم الرياضيات",
        "خبير في تطوير المناهج"
      ],
      stats: [
        { number: "500+", label: "طالب درستهم" },
        { number: "15+", label: "سنوات الخبرة" },
        { number: "95%", label: "معدل نجاح الطلاب" },
        { number: "50+", label: "ورقة بحثية" }
      ]
    },
    
    // Skills Section
    skills: {
      title: "مهاراتي",
      subtitle: "التميز في التدريس والكفاءة التقنية",
      categories: [
        {
          name: "الرياضيات",
          icon: "fas fa-calculator",
          skills: [
            { name: "الجبر", level: 95 },
            { name: "الهندسة", level: 90 },
            { name: "التفاضل والتكامل", level: 88 },
            { name: "الإحصاء", level: 92 },
            { name: "علم المثلثات", level: 85 }
          ]
        },
        {
          name: "طرق التدريس",
          icon: "fas fa-chalkboard-teacher",
          skills: [
            { name: "التعلم التفاعلي", level: 90 },
            { name: "حل المشكلات", level: 88 },
            { name: "التدريس المرئي", level: 85 },
            { name: "تصميم التقييم", level: 92 },
            { name: "دمج التكنولوجيا", level: 80 }
          ]
        },
        {
          name: "التكنولوجيا",
          icon: "fas fa-laptop-code",
          skills: [
            { name: "البرمجيات التعليمية", level: 85 },
            { name: "التدريس الإلكتروني", level: 88 },
            { name: "أنظمة إدارة التعلم", level: 82 },
            { name: "تحليل البيانات", level: 75 },
            { name: "التقييم الرقمي", level: 80 }
          ]
        }
      ]
    },
    
    // Education Section
    education: {
      title: "التعليم",
      subtitle: "الرحلة الأكاديمية والمؤهلات",
      timeline: [
        {
          year: "2015",
          degree: "دكتوراه في تعليم الرياضيات",
          institution: "جامعة كامبريدج",
          description: "تخصص في منهجيات التدريس المبتكرة وتطوير المناهج لتعليم الرياضيات الثانوي.",
          gpa: "3.9/4.0"
        },
        {
          year: "2010",
          degree: "ماجستير في التربية (M.Ed)",
          institution: "جامعة أكسفورد",
          description: "التركيز على علم النفس التربوي والاستراتيجيات البيداغوجية المتقدمة لتدريس الرياضيات.",
          gpa: "3.8/4.0"
        },
        {
          year: "2008",
          degree: "بكالوريوس العلوم في الرياضيات",
          institution: "إمبريال كوليدج لندن",
          description: "دراسة شاملة للرياضيات البحتة والتطبيقية مع التركيز على التحليل الرياضي والجبر.",
          gpa: "3.7/4.0"
        }
      ]
    },
    
    // Experience Section
    experience: {
      title: "الخبرة",
      subtitle: "الرحلة التدريسية المهنية",
      timeline: [
        {
          period: "2018 - الحاضر",
          position: "معلم رياضيات أول ورئيس القسم",
          company: "مدرسة التميز الدولية",
          description: "قيادة قسم الرياضيات، تطوير المناهج، إرشاد المعلمين الجدد، وتطبيق طرق التدريس المبتكرة.",
          achievements: [
            "تحسين أداء الطلاب بنسبة 25%",
            "قيادة مشروع إعادة تصميم المناهج",
            "إرشاد 8 معلمين جدد",
            "تطبيق منصة التعلم الرقمي"
          ]
        },
        {
          period: "2012 - 2018",
          position: "معلم رياضيات",
          company: "مدرسة النخبة التحضيرية",
          description: "تدريس دورات الرياضيات المتقدمة، إعداد الطلاب لامتحانات القبول الجامعي، وتطوير أدوات التقييم.",
          achievements: [
            "معدل قبول جامعي 100% للطلاب",
            "تطوير منهجية تقييم جديدة",
            "قيادة برنامج دروس الرياضيات المسائي",
            "التعاون في المشاريع متعددة التخصصات"
          ]
        },
        {
          period: "2008 - 2012",
          position: "معلم رياضيات",
          company: "مدرسة جرينوود الثانوية",
          description: "بداية مسيرة التدريس، تطوير مهارات التدريس الأساسية، ووضع تقنيات إدارة الفصل.",
          achievements: [
            "إنشاء خطط دروس جذابة",
            "تأسيس بيئة تعلم إيجابية",
            "تحقيق معدل رضا الطلاب 90%",
            "المشاركة في برامج التطوير المهني"
          ]
        }
      ]
    },
    
    // Testimonials Section
    testimonials: {
      title: "الشهادات",
      subtitle: "ما يقوله الطلاب والزملاء",
      reviews: [
        {
          name: "أحمد حسن",
          role: "طالب سابق",
          content: "جعلت طرق تدريس د. مايكل الرياضيات ممتعة ومفهومة. لديه قدرة فريدة على تقسيم المفاهيم المعقدة إلى أجزاء بسيطة وقابلة للفهم.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNGY0NmU1Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFIPC90ZXh0Pgo8L3N2Zz4="
        },
        {
          name: "ماريا رودريغيز",
          role: "والدة طالبة",
          content: "كانت ابنتي تواجه صعوبات في الرياضيات حتى انضمت إلى فصل د. مايكل. كان التحسن ملحوظاً - ليس فقط في الدرجات، ولكن في الثقة والفهم.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWM0ODk4Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1SPC90ZXh0Pgo8L3N2Zz4="
        },
        {
          name: "بروفيسور جيمس ويلسون",
          role: "رئيس القسم",
          content: "د. مايكل مربي استثنائي يجلب الابتكار والعاطفة لتعليم الرياضيات. مهاراته في تطوير المناهج متميزة.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDU5NjY5Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkpXPC90ZXh0Pgo8L3N2Zz4="
        },
        {
          name: "فاطمة الزهراء",
          role: "طالبة سابقة",
          content: "ساعد صبر وتفاني د. مايكل في التغلب على خوفي من الرياضيات. يخلق بيئة تعلم داعمة يمكن للجميع النجاح فيها.",
          rating: 5,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGE1Y2Y2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZBCjwvdGV4dD4KPC9zdmc+"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "تواصل معي",
      subtitle: "دعنا نتواصل ونناقش التعليم",
      description: "أنا مهتمة دائماً بمناقشة تعليم الرياضيات، تطوير المناهج، أو التعاون المحتمل. لا تتردد في التواصل!",
      info: [
        {
          icon: "fas fa-envelope",
          label: "البريد الإلكتروني",
          value: "dr.michael.thompson@email.com"
        },
        {
          icon: "fas fa-phone",
          label: "الهاتف",
          value: "+1 (555) 123-4567"
        },
        {
          icon: "fas fa-map-marker-alt",
          label: "الموقع",
          value: "لندن، المملكة المتحدة"
        }
      ],
      form: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        submit: "إرسال الرسالة"
      }
    },
    
    // Footer
    footer: {
      copyright: "© 2024 د. مايكل طومسون. جميع الحقوق محفوظة.",
      social: "تابعني",
      links: [
        { name: "لينكد إن", icon: "fab fa-linkedin", url: "#" },
        { name: "تويتر", icon: "fab fa-twitter", url: "#" },
        { name: "ResearchGate", icon: "fas fa-graduation-cap", url: "#" }
      ]
    },

    // Additional Data
    additional: {
      // Header info
      header: {
        name: "د. مايكل طومسون",
        title: "مربية رياضيات"
      },
      
      // Contact info
      contactInfo: {
        email: "dr.michael.thompson@email.com",
        phone: "+1 (555) 123-4567",
        location: "لندن، المملكة المتحدة",
        locationDescription: "أقوم بتقديم دروسي في لندن، المملكة المتحدة. يمكن أيضاً ترتيب جلسات عبر الإنترنت للطلاب في جميع أنحاء العالم."
      },

      // Additional Skills
      additionalSkills: [
        { name: 'LaTeX', icon: 'fas fa-file-alt', color: 'from-blue-500 to-blue-600' },
        { name: 'MATLAB', icon: 'fas fa-chart-line', color: 'from-orange-500 to-orange-600' },
        { name: 'Python', icon: 'fab fa-python', color: 'from-green-500 to-green-600' },
        { name: 'Geogebra', icon: 'fas fa-drafting-compass', color: 'from-purple-500 to-purple-600' },
        { name: 'Zoom', icon: 'fas fa-video', color: 'from-indigo-500 to-indigo-600' },
        { name: 'Moodle', icon: 'fas fa-graduation-cap', color: 'from-red-500 to-red-600' },
        { name: 'Google Classroom', icon: 'fab fa-google', color: 'from-yellow-500 to-yellow-600' },
        { name: 'Khan Academy', icon: 'fas fa-book-open', color: 'from-teal-500 to-teal-600' },
        { name: 'Desmos', icon: 'fas fa-function', color: 'from-pink-500 to-pink-600' },
        { name: 'Wolfram Alpha', icon: 'fas fa-brain', color: 'from-gray-500 to-gray-600' },
        { name: 'Excel', icon: 'fas fa-table', color: 'from-green-600 to-green-700' },
        { name: 'PowerPoint', icon: 'fas fa-presentation', color: 'from-orange-600 to-orange-700' }
      ],

      // Certifications
      certifications: [
        { name: 'شهادة تدريس الرياضيات المتقدمة', issuer: 'وزارة التربية والتعليم', icon: 'fas fa-graduation-cap' },
        { name: 'مدرب معتمد في التعليم الرقمي', issuer: 'جامعة كامبريدج', icon: 'fas fa-laptop-code' },
        { name: 'خبير في تطوير المناهج', issuer: 'المجلس البريطاني', icon: 'fas fa-book-open' }
      ],

      // Academic Achievements
      academicAchievements: [
        { icon: 'fas fa-medal', text: 'جائزة التميز في البحث العلمي' },
        { icon: 'fas fa-graduation-cap', text: 'ماجنا كام لود (Magna Cum Laude)' },
        { icon: 'fas fa-book', text: 'نشر 15 ورقة بحثية في مجلات محكمة' },
        { icon: 'fas fa-users', text: 'رئيسة نادي الرياضيات الطلابي' }
      ],

      // Research Areas
      researchAreas: [
        { area: 'تعليم الرياضيات التفاعلي', progress: 95 },
        { area: 'تطوير المناهج الرقمية', progress: 88 },
        { area: 'علم نفس التعلم الرياضي', progress: 82 },
        { area: 'التقييم التكويني في الرياضيات', progress: 90 }
      ],

      // Continuing Education
      continuingEducation: [
        { 
          title: 'ورش العمل المهنية',
          count: '25+',
          desc: 'ورش عمل في التدريس والتكنولوجيا'
        },
        { 
          title: 'الدورات الإلكترونية',
          count: '40+',
          desc: 'دورات في أحدث المناهج التعليمية'
        },
        { 
          title: 'المؤتمرات الدولية',
          count: '12+',
          desc: 'مشاركة في مؤتمرات تعليم الرياضيات'
        }
      ],

      // Skills Gained
      skillsGained: [
        {
          category: 'القيادة والإدارة',
          icon: 'fas fa-users-cog',
          skills: [
            { name: 'إدارة الفريق', level: 92 },
            { name: 'التخطيط الاستراتيجي', level: 88 },
            { name: 'حل النزاعات', level: 85 },
            { name: 'التواصل الفعال', level: 90 }
          ],
          color: 'from-blue-500 to-blue-600'
        },
        {
          category: 'التطوير المهني',
          icon: 'fas fa-chart-line',
          skills: [
            { name: 'تطوير المناهج', level: 95 },
            { name: 'التقييم والتقويم', level: 88 },
            { name: 'التدريب والتوجيه', level: 90 },
            { name: 'البحث التربوي', level: 85 }
          ],
          color: 'from-green-500 to-green-600'
        },
        {
          category: 'التكنولوجيا',
          icon: 'fas fa-laptop-code',
          skills: [
            { name: 'التدريس الإلكتروني', level: 87 },
            { name: 'منصات التعلم', level: 82 },
            { name: 'أدوات التقييم الرقمي', level: 80 },
            { name: 'التعاون الافتراضي', level: 85 }
          ],
          color: 'from-purple-500 to-purple-600'
        }
      ],

      // Career Highlights
      careerHighlights: [
        { 
          number: '500+', 
          label: 'طالب نجحوا',
          icon: 'fas fa-graduation-cap'
        },
        { 
          number: '25+', 
          label: 'معلم تم إرشادهم',
          icon: 'fas fa-user-tie'
        },
        { 
          number: '15+', 
          label: 'مشروع مناهج',
          icon: 'fas fa-book'
        },
        { 
          number: '98%', 
          label: 'معدل رضا الطلاب',
          icon: 'fas fa-heart'
        }
      ],

      // Testimonial Statistics
      testimonialStats: [
        { 
          number: '98%', 
          label: 'معدل الرضا العام',
          icon: 'fas fa-smile'
        },
        { 
          number: '95%', 
          label: 'معدل النجاح',
          icon: 'fas fa-chart-line'
        },
        { 
          number: '100%', 
          label: 'توصية للآخرين',
          icon: 'fas fa-thumbs-up'
        },
        { 
          number: '4.9/5', 
          label: 'التقييم العام',
          icon: 'fas fa-star'
        }
      ],

      // Services
      services: [
        'دروس الرياضيات الشخصية',
        'الدراسة عبر الإنترنت',
        'تطوير المناهج',
        'التدريب المهني للمعلمين',
        'الاستشارات التعليمية'
      ]
    }
  }
};

export default portfolioData;
