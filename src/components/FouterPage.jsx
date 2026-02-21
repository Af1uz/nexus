import React from 'react';
import { ArrowUpRight, MapPin, Mail, Clock } from 'lucide-react';

import brasm1 from '../images/brsm1.png'
import brasm2 from '../images/brsm2.png'
import brasm3 from '../images/brsm3.png'
import brasm4 from '../images/brsm4.png'

const FouterPage = ({ isDark = true, language = 'uz' }) => {
  const translations = {
    uz: {
      history: {
        title: 'Bizning Tariximiz',
        subtitle: 'Yillar davomida rivojlanish va muvaffaqiyat',
        items: [
          {
            year: '2018',
            title: 'Boshlanish',
            description: 'Birinchi do\'konimiz Toshkent shahrida ochildi. Kichik jamoa bilan katta orzular.'
          },
          {
            year: '2023',
            title: 'Kengayish',
            description: 'O\'zbekiston bo\'ylab 2 ta filial ega bo\'ldik. Kengayish va kattalashuv.'
          },
          {
            year: '2021',
            title: 'Yangilik',
            description: 'Premium mahsulotlar taqdim etildi. Baxtli mijozlar.'
          },
          {
            year: '2024',
            title: 'Bugungi Kun',
            description: 'Eng yirik mahsulotlar va jamoa kengayishi.'
          }
        ]
      },
      contact: 'Bog\'lanish',
      location: 'Manzil',
      availability: 'Ish Vaqti',
      email: '...',
      phone: '...',
      address1: 'Toshkent, O\'zbekiston',
      address2: 'Eco Bozor',
      worktime: 'Barcha kunlar: 09:00 - 20:00',
      weekend: 'Dam olish kunlari: Ochiq',
      footer: 'Barcha huquqlar himoyalangan',
      social: ['Instagram', 'Telegram', 'Magnate']
    },
    en: {
      history: {
        title: 'Our History',
        subtitle: 'Years of growth and success',
        items: [
          {
            year: '2018',
            title: 'The Beginning',
            description: 'Our first store opened in Tashkent. A small team with big dreams.'
          },
          {
            year: '2023',
            title: 'Expansion',
            description: 'We opened 2 branches across Uzbekistan. Growth and development.'
          },
          {
            year: '2021',
            title: 'Innovation',
            description: 'Premium products were introduced. Happy customers.'
          },
          {
            year: '2024',
            title: 'Today',
            description: 'The largest product range and team expansion.'
          }
        ]
      },
      contact: 'Contact',
      location: 'Location',
      availability: 'Work Hours',
      email: '...',
      phone: '...',
      address1: 'Tashkent, Uzbekistan',
      address2: 'Eco Bozor',
      worktime: 'Every day: 09:00 - 20:00',
      weekend: 'Days off: Open',
      footer: 'All rights reserved',
      social: ['Instagram', 'Telegram', 'Magnate']
    },
    ru: {
      history: {
        title: 'Наша История',
        subtitle: 'Годы роста и успеха',
        items: [
          {
            year: '2018',
            title: 'Начало',
            description: 'Наш первый магазин открылся в Ташкенте. Маленькая команда с большими мечтами.'
          },
          {
            year: '2023',
            title: 'Расширение',
            description: 'Мы открыли 2 филиала по Узбекистану. Рост и развитие.'
          },
          {
            year: '2021',
            title: 'Новинки',
            description: 'Были представлены премиум товары. Довольные клиенты.'
          },
          {
            year: '2024',
            title: 'Сегодня',
            description: 'Самый широкий ассортимент товаров и расширение команды.'
          }
        ]
      },
      contact: 'Контакты',
      location: 'Адрес',
      availability: 'Часы Работы',
      email: '...',
      phone: '...',
      address1: 'Ташкент, Узбекистан',
      address2: 'Eco Bozor',
      worktime: 'Каждый день: 09:00 - 20:00',
      weekend: 'Выходные: Открыто',
      footer: 'Все права защищены',
      social: ['Instagram', 'Telegram', 'Magnate']
    }
  };

  const t = translations[language];

  const historyImages = [brasm1, brasm2, brasm3, brasm4];

  return (
    <div className={`footer-page ${isDark ? 'dark' : 'light'}`}>
      {/* History Section with Images */}
      <section className="history-section">
        <div className="history-container">
          <div className="history-grid">
            {/* Left Side - Timeline */}
            <div className="history-left">
              <div className="history-header" data-aos="fade-up">
                <h2 className="history-title">{t.history.title}</h2>
                <p className="history-subtitle">{t.history.subtitle}</p>
              </div>

              <div className="timeline">
                {t.history.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Images Grid */}
            <div className="history-right">
              <div className="images-grid">
                {historyImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="image-item"
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}
                  >
                    <div
                      className="history-image"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-card" data-aos="fade-up">
              <div className="card-icon">
                <Mail size={24} />
              </div>
              <h3 className="card-title">{t.contact}</h3>
              <div className="card-content">
                <a href={`mailto:${t.email}`} className="contact-link">{t.email}</a>
                <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="contact-link">{t.phone}</a>
              </div>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon">
                <MapPin size={24} />
              </div>
              <h3 className="card-title">{t.location}</h3>
              <div className="card-content">
                <p>{t.address1}</p>
                <p>{t.address2}</p>
              </div>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon">
                <Clock size={24} />
              </div>
              <h3 className="card-title">{t.availability}</h3>
              <div className="card-content">
                <p>{t.worktime}</p>
                <p className="weekend-text">{t.weekend}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-brand">MAGNATE</div>
              <p className="footer-text">© {new Date().getFullYear()} {t.footer}</p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                {t.social.map((social, idx) => (
                  <a key={idx} href="#" className="social-link">
                    {social}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-page { transition: background-color 0.4s ease, color 0.4s ease; }
        .footer-page.dark { background: #000000; color: #ffffff; }
        .footer-page.light { background: #ffffff; color: #000000; }

        .history-section { padding: 6rem 2rem; border-top: 1px solid; }
        .dark .history-section { background: #050505; border-color: #1a1a1a; }
        .light .history-section { background: #fafafa; border-color: #f0f0f0; }
        .history-container { max-width: 1400px; margin: 0 auto; }
        .history-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
        .history-left { position: sticky; top: 100px; }
        .history-header { margin-bottom: 4rem; }
        .history-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; letter-spacing: -0.02em; margin-bottom: 1rem; }
        .history-subtitle { font-size: 1.2rem; opacity: 0.6; font-weight: 300; }

        .timeline { position: relative; padding-left: 3rem; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; }
        .dark .timeline::before { background: #1a1a1a; }
        .light .timeline::before { background: #e5e5e5; }
        .timeline-item { position: relative; margin-bottom: 4rem; padding-left: 2rem; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-item::before { content: ''; position: absolute; left: -3.5rem; top: 0.5rem; width: 16px; height: 16px; border-radius: 50%; border: 3px solid; }
        .dark .timeline-item::before { background: #000000; border-color: #ffffff; }
        .light .timeline-item::before { background: #ffffff; border-color: #000000; }
        .timeline-year { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; opacity: 0.3; }
        .timeline-title { font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem; }
        .timeline-description { font-size: 1.1rem; line-height: 1.8; opacity: 0.7; max-width: 500px; }

        .history-right { position: relative; }
        .images-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .image-item { position: relative; width: 100%; padding-top: 100%; overflow: hidden; border: 1px solid; }
        .dark .image-item { background: #0a0a0a; border-color: #1a1a1a; }
        .light .image-item { background: #f5f5f5; border-color: #e5e5e5; }
        .history-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.5s ease; }
        .image-item:hover .history-image { transform: scale(1.05); }

        .contact-section { padding: 4rem 2rem 6rem; border-top: 1px solid; }
        .dark .contact-section { border-color: #1a1a1a; }
        .light .contact-section { border-color: #f0f0f0; }
        .contact-container { max-width: 1400px; margin: 0 auto; }
        .contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; }
        .contact-card { padding: 3rem 2rem; border: 1px solid; transition: all 0.3s ease; }
        .dark .contact-card { background: #000000; border-color: #1a1a1a; }
        .light .contact-card { background: #ffffff; border-color: #e5e5e5; }
        .contact-card:hover { transform: translateY(-8px); }
        .dark .contact-card:hover { border-color: #333333; }
        .light .contact-card:hover { border-color: #cccccc; }
        .card-icon { width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; border-radius: 50%; }
        .dark .card-icon { background: #0a0a0a; color: #ffffff; }
        .light .card-icon { background: #f5f5f5; color: #000000; }
        .card-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; }
        .card-content { display: flex; flex-direction: column; gap: 0.8rem; }
        .card-content p { font-size: 1.05rem; opacity: 0.8; line-height: 1.6; }
        .contact-link { font-size: 1.05rem; text-decoration: none; transition: all 0.3s ease; display: inline-block; }
        .dark .contact-link { color: #ffffff; }
        .light .contact-link { color: #000000; }
        .contact-link:hover { opacity: 0.6; transform: translateX(5px); }
        .weekend-text { opacity: 0.5 !important; }

        .main-footer { padding: 3rem 2rem; border-top: 1px solid; }
        .dark .main-footer { border-color: #1a1a1a; }
        .light .main-footer { border-color: #e5e5e5; }
        .footer-container { max-width: 1400px; margin: 0 auto; }
        .footer-content { display: flex; justify-content: space-between; align-items: center; }
        .footer-left { display: flex; flex-direction: column; gap: 0.8rem; }
        .footer-brand { font-size: 1.5rem; font-weight: 700; letter-spacing: 0.3em; }
        .footer-text { font-size: 0.9rem; opacity: 0.6; }
        .footer-right { display: flex; align-items: center; }
        .social-links { display: flex; gap: 2rem; }
        .social-link { text-decoration: none; font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 0.3rem; transition: all 0.3s ease; }
        .dark .social-link { color: #ffffff; }
        .light .social-link { color: #000000; }
        .social-link:hover { opacity: 0.6; transform: translateY(-2px); }

        @media (max-width: 1024px) {
          .history-grid { grid-template-columns: 1fr; gap: 4rem; }
          .history-left { position: static; }
          .images-grid { gap: 1.2rem; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-content { flex-direction: column; gap: 2rem; text-align: center; }
          .footer-left { align-items: center; }
          .social-links { gap: 1.5rem; }
        }
        @media (max-width: 768px) {
          .history-section { padding: 4rem 1.5rem; }
          .history-header { margin-bottom: 3rem; }
          .timeline { padding-left: 2rem; }
          .timeline-item { padding-left: 1.5rem; margin-bottom: 3rem; }
          .timeline-item::before { left: -2.5rem; }
          .timeline-year { font-size: 2rem; }
          .timeline-title { font-size: 1.5rem; }
          .timeline-description { font-size: 1rem; }
          .images-grid { gap: 1rem; }
          .contact-section { padding: 3rem 1.5rem 4rem; }
          .contact-card { padding: 2rem 1.5rem; }
          .card-icon { width: 50px; height: 50px; margin-bottom: 1.5rem; }
          .card-title { font-size: 1.3rem; }
          .main-footer { padding: 2rem 1.5rem; }
          .social-links { flex-direction: column; gap: 1rem; }
        }
        @media (max-width: 480px) {
          .history-section { padding: 3rem 1rem; }
          .timeline { padding-left: 1.5rem; }
          .timeline-item { padding-left: 1rem; }
          .timeline-item::before { left: -2rem; width: 12px; height: 12px; }
          .timeline-year { font-size: 1.8rem; }
          .timeline-title { font-size: 1.3rem; }
          .timeline-description { font-size: 0.95rem; }
          .contact-section { padding: 2.5rem 1rem 3rem; }
          .contact-card { padding: 1.5rem 1rem; }
          .main-footer { padding: 1.5rem 1rem; }
          .footer-brand { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};

export default FouterPage;