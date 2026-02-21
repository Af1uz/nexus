import React from 'react';
import { ArrowUpRight, MapPin, Mail, Clock, Truck, Package, Timer } from 'lucide-react';

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
      delivery: {
        title: 'Yetkazib Berish',
        subtitle: 'Tez va ishonchli yetkazib berish xizmati',
        features: [
          { icon: 'truck',   label: 'Express Yetkazish', desc: 'Bir kunda yetkazib beramiz' },
          { icon: 'package', label: 'Xavfsiz Qadoqlash', desc: 'Premium qadoq materiallari' },
          { icon: 'timer',   label: 'Vaqtida Yetkazish',  desc: '99% o\'z vaqtida' },
        ],
        addressLabel: 'Manzilimiz',
        address1: 'Toshkent shahri, O\'zbekiston',
        address2: 'Chimgan Eco Bozor',
        mapNote: 'Xaritada ko\'rish',
      },
      contact: 'Bog\'lanish',
      availability: 'Ish Vaqti',
      email: '...',
      phone: '...',
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
          { year: '2018', title: 'The Beginning', description: 'Our first store opened in Tashkent. A small team with big dreams.' },
          { year: '2023', title: 'Expansion',     description: 'We opened 2 branches across Uzbekistan. Growth and development.' },
          { year: '2021', title: 'Innovation',    description: 'Premium products were introduced. Happy customers.' },
          { year: '2024', title: 'Today',         description: 'The largest product range and team expansion.' }
        ]
      },
      delivery: {
        title: 'Delivery',
        subtitle: 'Fast and reliable delivery service',
        features: [
          { icon: 'truck',   label: 'Express Delivery', desc: 'Delivered within one day' },
          { icon: 'package', label: 'Safe Packaging',   desc: 'Premium packaging materials' },
          { icon: 'timer',   label: 'On-Time Delivery', desc: '99% on time' },
        ],
        addressLabel: 'Our Address',
        address1: 'Tashkent city, Uzbekistan',
        address2: 'Chimgan Eco Bozor',
        mapNote: 'View on map',
      },
      contact: 'Contact',
      availability: 'Work Hours',
      email: '...',
      phone: '...',
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
          { year: '2018', title: 'Начало',      description: 'Наш первый магазин открылся в Ташкенте. Маленькая команда с большими мечтами.' },
          { year: '2023', title: 'Расширение',  description: 'Мы открыли 2 филиала по Узбекистану. Рост и развитие.' },
          { year: '2021', title: 'Новинки',     description: 'Были представлены премиум товары. Довольные клиенты.' },
          { year: '2024', title: 'Сегодня',     description: 'Самый широкий ассортимент товаров и расширение команды.' }
        ]
      },
      delivery: {
        title: 'Доставка',
        subtitle: 'Быстрая и надёжная служба доставки',
        features: [
          { icon: 'truck',   label: 'Экспресс Доставка', desc: 'Доставим за один день' },
          { icon: 'package', label: 'Безопасная Упаковка', desc: 'Премиум упаковочные материалы' },
          { icon: 'timer',   label: 'Вовремя',            desc: '99% в срок' },
        ],
        addressLabel: 'Наш Адрес',
        address1: 'г. Ташкент, Узбекистан',
        address2: 'Chimgan Eco Bozor',
        mapNote: 'Посмотреть на карте',
      },
      contact: 'Контакты',
      availability: 'Часы Работы',
      email: '...',
      phone: '...',
      worktime: 'Каждый день: 09:00 - 20:00',
      weekend: 'Выходные: Открыто',
      footer: 'Все права защищены',
      social: ['Instagram', 'Telegram', 'Magnate']
    }
  };

  const t = translations[language];
  const historyImages = [brasm1, brasm2, brasm3, brasm4];

  const iconMap = { truck: Truck, package: Package, timer: Timer };

  return (
    <div className={`footer-page ${isDark ? 'dark' : 'light'}`}>

      {/* ── History Section ── */}
      <section className="history-section">
        <div className="history-container">
          <div className="history-grid">
            <div className="history-left">
              <div className="history-header" data-aos="fade-up">
                <h2 className="history-title">{t.history.title}</h2>
                <p className="history-subtitle">{t.history.subtitle}</p>
              </div>
              <div className="timeline">
                {t.history.items.map((item, idx) => (
                  <div key={idx} className="timeline-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="history-right">
              <div className="images-grid">
                {historyImages.map((img, idx) => (
                  <div key={idx} className="image-item" data-aos="fade-left" data-aos-delay={idx * 100}>
                    <div className="history-image" style={{ backgroundImage: `url(${img})` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery Section (manzil o'rniga) ── */}
      <section className="delivery-section">
        <div className="delivery-container">

          {/* Header */}
          <div className="delivery-header" data-aos="fade-up">
            <h2 className="delivery-title">{t.delivery.title}</h2>
            <p className="delivery-subtitle">{t.delivery.subtitle}</p>
          </div>

          {/* Feature pills */}
          <div className="delivery-features" data-aos="fade-up" data-aos-delay="100">
            {t.delivery.features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div key={i} className="delivery-feature">
                  <div className="feat-icon-wrap"><Icon size={20} /></div>
                  <div>
                    <p className="feat-label">{f.label}</p>
                    <p className="feat-desc">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Address + Map layout */}
          <div className="addr-map-grid">

            {/* Left — address text */}
            <div className="addr-text-side" data-aos="fade-right">
              <div className="addr-pin-row">
                <MapPin size={18} className="addr-pin-icon" />
                <span className="addr-label">{t.delivery.addressLabel}</span>
              </div>
              <p className="addr-line addr-line--main">{t.delivery.address1}</p>
              <p className="addr-line">{t.delivery.address2}</p>

              <div className="addr-divider" />

              <div className="addr-contact-row">
                <Mail size={15} />
                <a href={`mailto:${t.email}`} className="addr-contact-link">{t.email}</a>
              </div>
              <div className="addr-contact-row">
                <Clock size={15} />
                <span className="addr-contact-text">{t.worktime}</span>
              </div>
              <div className="addr-contact-row weekend-row">
                <Clock size={15} style={{ opacity: 0 }} />
                <span className="addr-weekend">{t.weekend}</span>
              </div>

              <a
                href="https://maps.google.com/?q=Eco+Bozor+Tashkent"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link-btn"
              >
                {t.delivery.mapNote}
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Right — embedded Google Map */}
            <div className="map-side" data-aos="fade-left" data-aos-delay="100">
              <div className="map-frame-wrap">
                <iframe
                  title="Magnate Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11956.0!2d70.0167!3d41.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5a52b6d0b3d7f%3A0x7e8f1c2a3b4c5d6e!2sChimgan%2C%20Uzbekistan!5e0!3m2!1sen!2suz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-overlay-badge">
                  <MapPin size={14} />
                  <span>Chimgan Eco Bozor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact cards (Bog'lanish + Ish Vaqti) ── */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">

            <div className="contact-card" data-aos="fade-up">
              <div className="card-icon"><Clock size={24} /></div>
              <h3 className="card-title">{t.availability}</h3>
              <div className="card-content">
                <p>{t.worktime}</p>
                <p className="weekend-text">{t.weekend}</p>
              </div>
            </div>

            <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon"><Mail size={24} /></div>
              <h3 className="card-title">{t.contact}</h3>
              <div className="card-content">
                {/* <a href={`mailto:${t.email}`} className="contact-link">{t.email}</a> */}

                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    TELEFON RAQAMLAR — shu yerda o'zgartiring:
                    href="tel:+998901234567"  ← raqamni yozing
                    ko'rinadigan matn ham o'zgartiring
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                {/* <a
                  href="tel:+998901234567"
                  className="contact-link phone-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:+998901234567';
                  }}
                >
                   +998 97 123 45 67
                </a> */}
                <a
                  href="tel:+998991264004"
                  className="contact-link phone-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:+998991264004';
                  }}
                >
                   +998 99 126 40 04
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-brand">MAGNATE</div>
              <p className="footer-text">© {new Date().getFullYear()} {t.footer}</p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    SOCIAL LINKS — linkni shu yerga yozing:
                    Instagram : href="https://instagram.com/SIZNING_USERNAME"
                    Telegram  : href="https://t.me/SIZNING_USERNAME"
                    Magnate   : href="#" (yoki o'z saytingiz)
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                <a
                  href="https://instagram.com/magnateshoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://t.me/magnateshoes"
                  onClick={(e) => {
                    e.preventDefault();
                    // Avval Telegram ilovasida ochishga urinadi
                    window.location.href = 'tg://resolve?domain=magnateshoes';
                    // Agar ilova yo'q bo'lsa, 1.5 sekunddan so'ng brauzerda ochadi
                    // setTimeout(() => {
                    //   window.open('https://t.me/SIZNING_USERNAME', '_blank');
                    // }, 1500);
                  }}
                  className="social-link"
                >
                  Telegram
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="#"
                  className="social-link"
                >
                  Magnate
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;700&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-page { transition: background-color 0.4s ease, color 0.4s ease; }
        .footer-page.dark  { background: #000000; color: #ffffff; }
        .footer-page.light { background: #ffffff; color: #000000; }

        /* ── History ── */
        .history-section { padding: 6rem 2rem; border-top: 1px solid; }
        .dark  .history-section { background: #050505; border-color: #1a1a1a; }
        .light .history-section { background: #fafafa; border-color: #f0f0f0; }
        .history-container { max-width: 1400px; margin: 0 auto; }
        .history-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
        .history-left { position: sticky; top: 100px; }
        .history-header { margin-bottom: 4rem; }
        .history-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; letter-spacing: -0.02em; margin-bottom: 1rem; }
        .history-subtitle { font-size: 1.2rem; opacity: 0.6; font-weight: 300; }

        .timeline { position: relative; padding-left: 3rem; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; }
        .dark  .timeline::before { background: #1a1a1a; }
        .light .timeline::before { background: #e5e5e5; }
        .timeline-item { position: relative; margin-bottom: 4rem; padding-left: 2rem; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-item::before { content: ''; position: absolute; left: -3.5rem; top: 0.5rem; width: 16px; height: 16px; border-radius: 50%; border: 3px solid; }
        .dark  .timeline-item::before { background: #000000; border-color: #ffffff; }
        .light .timeline-item::before { background: #ffffff; border-color: #000000; }
        .timeline-year { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; opacity: 0.3; }
        .timeline-title { font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem; }
        .timeline-description { font-size: 1.1rem; line-height: 1.8; opacity: 0.7; max-width: 500px; }

        .history-right { position: relative; }
        .images-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .image-item { position: relative; width: 100%; padding-top: 100%; overflow: hidden; border: 1px solid; }
        .dark  .image-item { background: #0a0a0a; border-color: #1a1a1a; }
        .light .image-item { background: #f5f5f5; border-color: #e5e5e5; }
        .history-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.5s ease; }
        .image-item:hover .history-image { transform: scale(1.05); }

        /* ── Delivery Section ── */
        .delivery-section { padding: 6rem 2rem; border-top: 1px solid; }
        .dark  .delivery-section { border-color: #1a1a1a; background: #020202; }
        .light .delivery-section { border-color: #f0f0f0; background: #f9f9f7; }
        .delivery-container { max-width: 1400px; margin: 0 auto; }

        .delivery-header { margin-bottom: 3rem; }
        .delivery-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 300; letter-spacing: -0.02em; margin-bottom: 0.7rem; }
        .delivery-subtitle { font-size: 1.1rem; opacity: 0.55; font-weight: 300; }

        .delivery-features { display: flex; gap: 1.5rem; margin-bottom: 3.5rem; flex-wrap: wrap; }
        .delivery-feature { display: flex; align-items: flex-start; gap: 1rem; padding: 1.2rem 1.5rem; border: 1px solid; border-radius: 2px; flex: 1; min-width: 200px; transition: transform 0.3s ease; }
        .dark  .delivery-feature { border-color: #1a1a1a; background: #0a0a0a; }
        .light .delivery-feature { border-color: #e8e8e8; background: #ffffff; }
        .delivery-feature:hover { transform: translateY(-4px); }
        .feat-icon-wrap { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .dark  .feat-icon-wrap { background: rgba(255,255,255,0.06); color: #fff; }
        .light .feat-icon-wrap { background: rgba(0,0,0,0.05); color: #000; }
        .feat-label { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.2rem; letter-spacing: 0.02em; }
        .feat-desc  { font-size: 0.8rem; opacity: 0.55; }

        /* Address + Map two-column */
        .addr-map-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; align-items: stretch; }

        /* Left text column */
        .addr-text-side { display: flex; flex-direction: column; justify-content: center; padding: 2rem 0; }
        .addr-pin-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
        .addr-pin-icon { opacity: 0.5; }
        .addr-label { font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.45; }
        .addr-line { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300; line-height: 1.2; }
        .addr-line--main { font-size: 2.2rem; margin-bottom: 0.2rem; }

        .addr-divider { width: 48px; height: 1px; margin: 1.8rem 0; }
        .dark  .addr-divider { background: rgba(255,255,255,0.15); }
        .light .addr-divider { background: rgba(0,0,0,0.15); }

        .addr-contact-row { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.6rem; font-size: 0.95rem; opacity: 0.75; }
        .addr-contact-link { text-decoration: none; transition: opacity 0.2s; }
        .dark  .addr-contact-link { color: #fff; }
        .light .addr-contact-link { color: #000; }
        .addr-contact-link:hover { opacity: 0.5; }
        .addr-contact-text { }
        .addr-weekend { opacity: 0.45; font-size: 0.9rem; }

        .map-link-btn { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 2rem; font-size: 0.82rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; padding: 0.7rem 1.4rem; border: 1px solid; transition: all 0.3s ease; font-weight: 500; }
        .dark  .map-link-btn { color: #fff; border-color: rgba(255,255,255,0.25); }
        .light .map-link-btn { color: #000; border-color: rgba(0,0,0,0.22); }
        .map-link-btn:hover { opacity: 0.6; transform: translateY(-2px); }

        /* Right map column */
        .map-side { min-height: 420px; }
        .map-frame-wrap { position: relative; width: 100%; height: 100%; min-height: 420px; overflow: hidden; border: 1px solid; }
        .dark  .map-frame-wrap { border-color: #1a1a1a; }
        .light .map-frame-wrap { border-color: #e0e0e0; }
        .map-frame-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; }
        .map-overlay-badge { position: absolute; bottom: 1rem; left: 1rem; display: flex; align-items: center; gap: 0.4rem; padding: 0.45rem 0.9rem; border-radius: 100px; font-size: 0.78rem; font-weight: 600; pointer-events: none; backdrop-filter: blur(8px); letter-spacing: 0.05em; }
        .dark  .map-overlay-badge { background: rgba(0,0,0,0.7); color: #fff; border: 1px solid rgba(255,255,255,0.15); }
        .light .map-overlay-badge { background: rgba(255,255,255,0.88); color: #000; border: 1px solid rgba(0,0,0,0.12); }

        /* ── Contact (2 cards only) ── */
        .contact-section { padding: 4rem 2rem 6rem; border-top: 1px solid; }
        .dark  .contact-section { border-color: #1a1a1a; }
        .light .contact-section { border-color: #f0f0f0; }
        .contact-container { max-width: 1400px; margin: 0 auto; }
        .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; max-width: 900px; margin-left: auto; margin-right: auto; }
        .contact-card { padding: 3rem 2rem; border: 1px solid; transition: all 0.3s ease; }
        .dark  .contact-card { background: #000000; border-color: #1a1a1a; }
        .light .contact-card { background: #ffffff; border-color: #e5e5e5; }
        .contact-card:hover { transform: translateY(-8px); }
        .dark  .contact-card:hover { border-color: #333333; }
        .light .contact-card:hover { border-color: #cccccc; }
        .card-icon { width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; border-radius: 50%; }
        .dark  .card-icon { background: #0a0a0a; color: #ffffff; }
        .light .card-icon { background: #f5f5f5; color: #000000; }
        .card-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; }
        .card-content { display: flex; flex-direction: column; gap: 0.8rem; }
        .card-content p { font-size: 1.05rem; opacity: 0.8; line-height: 1.6; }
        .contact-link { font-size: 1.05rem; text-decoration: none; transition: all 0.3s ease; display: inline-block; }
        .dark  .contact-link { color: #ffffff; }
        .light .contact-link { color: #000000; }
        .contact-link:hover { opacity: 0.6; transform: translateX(5px); }
        .weekend-text { opacity: 0.5 !important; }

        /* ── Footer ── */
        .main-footer { padding: 3rem 2rem; border-top: 1px solid; }
        .dark  .main-footer { border-color: #1a1a1a; }
        .light .main-footer { border-color: #e5e5e5; }
        .footer-container { max-width: 1400px; margin: 0 auto; }
        .footer-content { display: flex; justify-content: space-between; align-items: center; }
        .footer-left { display: flex; flex-direction: column; gap: 0.8rem; }
        .footer-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 700; letter-spacing: 0.3em; }
        .footer-text { font-size: 0.9rem; opacity: 0.6; }
        .footer-right { display: flex; align-items: center; }
        .social-links { display: flex; gap: 2rem; }
        .social-link { text-decoration: none; font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 0.3rem; transition: all 0.3s ease; }
        .dark  .social-link { color: #ffffff; }
        .light .social-link { color: #000000; }
        .social-link:hover { opacity: 0.6; transform: translateY(-2px); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .history-grid { grid-template-columns: 1fr; gap: 4rem; }
          .history-left { position: static; }
          .addr-map-grid { grid-template-columns: 1fr; gap: 3rem; }
          .map-side { min-height: 320px; }
          .map-frame-wrap { min-height: 320px; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; max-width: 500px; }
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
          .delivery-section { padding: 4rem 1.5rem; }
          .delivery-features { gap: 1rem; }
          .delivery-feature { min-width: 150px; }
          .addr-line--main { font-size: 1.8rem; }
          .addr-line { font-size: 1.4rem; }
          .contact-section { padding: 3rem 1.5rem 4rem; }
          .contact-card { padding: 2rem 1.5rem; }
          .main-footer { padding: 2rem 1.5rem; }
          .social-links { flex-direction: column; gap: 1rem; }
        }
        @media (max-width: 480px) {
          .history-section { padding: 3rem 1rem; }
          .timeline { padding-left: 1.5rem; }
          .timeline-item { padding-left: 1rem; }
          .timeline-item::before { left: -2rem; width: 12px; height: 12px; }
          .timeline-year { font-size: 1.8rem; }
          .delivery-section { padding: 3rem 1rem; }
          .delivery-features { flex-direction: column; }
          .addr-line--main { font-size: 1.6rem; }
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