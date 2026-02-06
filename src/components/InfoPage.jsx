import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('uz');
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    });

    setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [language]);

  const translations = {
    uz: {
      nav: 'NEXUS',
      menu: ['Bosh sahifa', 'Xizmatlar', 'Portfolio', 'Aloqa'],
      hero: {
        greeting: 'Xush kelibsiz',
        title: 'Kelajak Bu Yerda',
        subtitle: 'Innovatsion texnologiyalar va kreativ yechimlar bilan biznesingizni yangi bosqichga olib chiqing',
        cta1: 'Boshlash',
        cta2: 'Batafsil'
      },
      stats: [
        { value: '500+', label: 'Loyihalar' },
        { value: '98%', label: 'Mamnunlik' },
        { value: '24/7', label: 'Qo\'llab-quvvatlash' },
        { value: '50+', label: 'Hamkorlar' }
      ],
      servicesTitle: 'Bizning Xizmatlar'
    },
    en: {
      nav: 'NEXUS',
      menu: ['Home', 'Services', 'Portfolio', 'Contact'],
      hero: {
        greeting: 'Welcome',
        title: 'Future Starts Here',
        subtitle: 'Take your business to the next level with innovative technologies and creative solutions',
        cta1: 'Get Started',
        cta2: 'Learn More'
      },
      stats: [
        { value: '500+', label: 'Projects' },
        { value: '98%', label: 'Satisfaction' },
        { value: '24/7', label: 'Support' },
        { value: '50+', label: 'Partners' }
      ],
      servicesTitle: 'Our Services'
    },
    ru: {
      nav: 'NEXUS',
      menu: ['Главная', 'Услуги', 'Портфолио', 'Контакты'],
      hero: {
        greeting: 'Добро пожаловать',
        title: 'Будущее Начинается Здесь',
        subtitle: 'Выведите свой бизнес на новый уровень с инновационными технологиями и креативными решениями',
        cta1: 'Начать',
        cta2: 'Подробнее'
      },
      stats: [
        { value: '500+', label: 'Проектов' },
        { value: '98%', label: 'Удовлетворенность' },
        { value: '24/7', label: 'Поддержка' },
        { value: '50+', label: 'Партнеров' }
      ],
      servicesTitle: 'Наши Услуги'
    }
  };

  const t = translations[language];

  const handleGetStarted = () => {
    alert(`${language === 'uz' ? 'Boshlash tugmasi bosildi!' : language === 'en' ? 'Get Started clicked!' : 'Кнопка Начать нажата!'}`);
  };

  const handleLearnMore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className={`loading-screen ${isDark ? 'dark' : 'light'}`}>
        <div className="loading-content">
          <div className="loading-logo">NEXUS</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
        
        <style jsx>{`
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
            overflow: hidden;
          }
          .loading-screen.dark {
            background: #000000;
            color: #ffffff;
          }
          .loading-screen.light {
            background: #ffffff;
            color: #000000;
          }
          .loading-content {
            text-align: center;
          }
          .loading-logo {
            font-family: 'SF Pro Display', -apple-system, sans-serif;
            font-size: 3rem;
            font-weight: 700;
            letter-spacing: 0.3em;
            margin-bottom: 2rem;
            animation: pulse 2s ease-in-out infinite;
          }
          .loading-bar {
            width: 300px;
            height: 2px;
            background: ${isDark ? '#1a1a1a' : '#f0f0f0'};
            position: relative;
            overflow: hidden;
          }
          .loading-progress {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 50%;
            background: ${isDark ? '#ffffff' : '#000000'};
            animation: loading 1.5s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes loading {
            0% { left: -50%; }
            100% { left: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`main-container ${isDark ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" data-aos="fade-right">
            {t.nav}
          </div>
          
          <div className="nav-menu">
            {t.menu.map((item, idx) => (
              <a key={idx} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </div>

          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'uz' ? 'active' : ''}`}
                onClick={() => setLanguage('uz')}
              >
                UZ
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => setLanguage('ru')}
              >
                RU
              </button>
            </div>

            <button 
              className="theme-toggle"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-decoration">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>

        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-greeting" data-aos="fade-up">
                {t.hero.greeting}
              </div>
              
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
                {t.hero.title}
              </h1>
              
              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                {t.hero.subtitle}
              </p>

              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
                <button className="btn btn-primary" onClick={handleGetStarted}>
                  <span>{t.hero.cta1}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
                
                <button className="btn btn-secondary" onClick={handleLearnMore}>
                  <span>{t.hero.cta2}</span>
                </button>
              </div>

              <div className="hero-stats desktop-stats" data-aos="fade-up" data-aos-delay="400">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-right" data-aos="fade-left" data-aos-delay="400">
              <div className="image-carousel">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`carousel-image ${idx === currentImageIndex ? 'active' : ''} ${
                      idx === (currentImageIndex - 1 + images.length) % images.length ? 'prev' : ''
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>

              <div className="carousel-dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-stats mobile-stats" data-aos="fade-up" data-aos-delay="500">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="600">
          <div className="scroll-line"></div>
          <div className="scroll-text">Scroll</div>
        </div>
      </section>

      {/* --- YANGI QO'SHILGAN SEKSIYA: SERVICES --- */}
      <section className="services-section" id="services">
        <div className="section-container">
            <h2 className="section-title" data-aos="fade-up">
                {t.servicesTitle}
            </h2>
            <div className="services-grid">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="service-card" data-aos="fade-up" data-aos-delay={item * 100}>
                        <div className="service-icon">0{item}</div>
                        <h3>Digital Solution {item}</h3>
                        <p>Biznesingiz uchun eng zamonaviy va xavfsiz raqamli texnologiyalar to'plami.</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }

        body {
          overflow-x: hidden;
        }

        .main-container {
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: background-color 0.4s ease, color 0.4s ease;
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        .main-container.dark {
          background: #000000;
          color: #ffffff;
        }

        .main-container.light {
          background: #ffffff;
          color: #000000;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
        }

        .navbar.scrolled {
          backdrop-filter: blur(20px);
          border-bottom: 1px solid;
        }

        .dark .navbar.scrolled {
          background: rgba(0, 0, 0, 0.8);
          border-color: #1a1a1a;
        }

        .light .navbar.scrolled {
          background: rgba(255, 255, 255, 0.8);
          border-color: #f0f0f0;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-menu {
          display: flex;
          gap: 2.5rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }

        .dark .nav-link {
          color: #ffffff;
        }

        .light .nav-link {
          color: #000000;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          transition: width 0.3s ease;
        }

        .dark .nav-link::after {
          background: #ffffff;
        }

        .light .nav-link::after {
          background: #000000;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-shrink: 0;
        }

        .language-switcher {
          display: flex;
          gap: 0.5rem;
        }

        .lang-btn {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          border-radius: 4px;
          white-space: nowrap;
        }

        .dark .lang-btn {
          color: #ffffff;
        }

        .light .lang-btn {
          color: #000000;
        }

        .dark .lang-btn.active {
          background: #ffffff;
          color: #000000;
        }

        .light .lang-btn.active {
          background: #000000;
          color: #ffffff;
        }

        .theme-toggle {
          padding: 0.6rem;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .dark .theme-toggle {
          color: #ffffff;
          border: 1px solid #1a1a1a;
        }

        .light .theme-toggle {
          color: #000000;
          border: 1px solid #f0f0f0;
        }

        .theme-toggle:hover {
          transform: rotate(180deg);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 10rem 2rem 4rem;
          width: 100%;
          overflow: hidden;
        }

        /* Background Decorations */
        .hero-bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.03;
        }

        .dark .bg-circle {
          background: #ffffff;
        }

        .light .bg-circle {
          background: #000000;
        }

        .bg-circle-1 {
          width: 500px;
          height: 500px;
          top: -150px;
          right: -100px;
          animation: floatSlow 25s ease-in-out infinite;
        }

        .bg-circle-2 {
          width: 350px;
          height: 350px;
          bottom: -100px;
          left: -80px;
          animation: floatSlow 20s ease-in-out infinite reverse;
        }

        .bg-circle-3 {
          width: 250px;
          height: 250px;
          top: 40%;
          left: 15%;
          animation: floatSlow 22s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, -15px);
          }
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        /* Left Side */
        .hero-left {
          max-width: 600px;
        }

        .hero-greeting {
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          opacity: 0.6;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          opacity: 0.7;
          font-weight: 300;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .btn {
          padding: 1rem 2.5rem;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          font-family: inherit;
          white-space: nowrap;
        }

        .btn-primary {
          color: #000000;
        }

        .dark .btn-primary {
          background: #ffffff;
        }

        .light .btn-primary {
          background: #000000;
          color: #ffffff;
        }

        .btn-primary:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid;
        }

        .dark .btn-secondary {
          color: #ffffff;
          border-color: #ffffff;
        }

        .light .btn-secondary {
          color: #000000;
          border-color: #000000;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
        }

        .dark .btn-secondary:hover {
          background: #ffffff;
          color: #000000;
        }

        .light .btn-secondary:hover {
          background: #000000;
          color: #ffffff;
        }

        /* Stats */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid;
        }

        .dark .hero-stats {
          border-color: #1a1a1a;
        }

        .light .hero-stats {
          border-color: #f0f0f0;
        }

        .desktop-stats {
          display: grid;
        }

        .mobile-stats {
          display: none;
          margin-top: 4rem;
        }

        .stat-item {
          text-align: left;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.6;
        }

        /* Right Side - Image Carousel */
        .hero-right {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-carousel {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.1);
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-image.active {
          opacity: 1;
          transform: scale(1);
        }

        .carousel-image.prev {
          opacity: 0;
          transform: scale(0.95);
        }

        .carousel-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.8rem;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dark .dot {
          background: rgba(255, 255, 255, 0.3);
        }

        .light .dot {
          background: rgba(0, 0, 0, 0.3);
        }

        .dark .dot.active {
          background: #ffffff;
          width: 30px;
          border-radius: 5px;
        }

        .light .dot.active {
          background: #000000;
          width: 30px;
          border-radius: 5px;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          animation: scrollLine 2s ease-in-out infinite;
        }

        .dark .scroll-line {
          background: linear-gradient(to bottom, transparent, #ffffff);
        }

        .light .scroll-line {
          background: linear-gradient(to bottom, transparent, #000000);
        }

        @keyframes scrollLine {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(20px);
            opacity: 1;
          }
        }

        .scroll-text {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.5;
        }

        /* Services Section (Yangi) */
        .services-section {
            padding: 10rem 2rem;
            width: 100%;
        }

        .section-container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 3rem;
            font-weight: 300;
            margin-bottom: 4rem;
            text-align: center;
            letter-spacing: -0.02em;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            padding: 3rem;
            border-radius: 24px;
            transition: all 0.4s ease;
            border: 1px solid transparent;
        }

        .dark .service-card {
            background: #0a0a0a;
            border-color: #1a1a1a;
        }

        .light .service-card {
            background: #f9f9f9;
            border-color: #f0f0f0;
        }

        .service-card:hover {
            transform: translateY(-10px);
            border-color: currentColor;
        }

        .service-icon {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 2rem;
            opacity: 0.2;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .service-card p {
            opacity: 0.6;
            line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-grid {
            gap: 4rem;
          }

          .hero-right {
            height: 500px;
          }
        }

        @media (max-width: 1024px) {
          .nav-menu {
            display: none;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero-right {
            height: 400px;
          }

          .desktop-stats {
            display: none;
          }

          .mobile-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .nav-container {
            padding: 0 1rem;
          }

          .nav-logo {
            font-size: 1.2rem;
            letter-spacing: 0.2em;
          }

          .language-switcher {
            gap: 0.25rem;
          }

          .lang-btn {
            padding: 0.4rem 0.7rem;
            font-size: 0.75rem;
          }

          .hero-section {
            padding: 7rem 1rem 3rem;
          }

          .hero-greeting {
            font-size: 0.8rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 0.8rem;
          }

          .btn {
            width: 100%;
            justify-content: center;
            padding: 0.9rem 2rem;
            font-size: 0.95rem;
          }

          .hero-right {
            height: 350px;
          }

          .mobile-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 3rem;
          }

          .stat-item {
            text-align: center;
          }

          .stat-value {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }

          .carousel-dots {
            bottom: 1rem;
            gap: 0.6rem;
          }

          .dot {
            width: 8px;
            height: 8px;
          }

          .dot.active {
            width: 24px;
          }
          
          .section-title {
              font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoPage;